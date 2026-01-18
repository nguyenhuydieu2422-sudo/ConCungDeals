
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import { CATEGORIES } from './constants';
import { Product } from './types';

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtXanpTZiMaqKJhTFFKCBvoz5ISJ0JFo3feYCiXyWTCKBUigF5_M_HBVkAWCwnBJhpYYW6mWcUBteK/pub?gid=0&single=true&output=csv";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${SHEET_CSV_URL}&t=${new Date().getTime()}`);
        const csvText = await response.text();
        
        const parseCSVLine = (line: string) => {
          const result = [];
          let cur = '';
          let inQuote = false;
          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') inQuote = !inQuote;
            else if (char === ',' && !inQuote) {
              result.push(cur.trim());
              cur = '';
            } else cur += char;
          }
          result.push(cur.trim());
          return result;
        };

        const lines = csvText.split(/\r?\n/).filter(l => l.trim() !== '');
        if (lines.length < 2) return;

        const headers = parseCSVLine(lines[0]).map(h => h.toLowerCase().trim());
        
        // Cải tiến tìm chỉ số cột - Tránh nhầm lẫn giữa Link Ảnh và Link Mua Hàng
        const findIdx = (include: string[], exclude: string[] = []) => 
          headers.findIndex(h => 
            include.some(k => h.includes(k)) && !exclude.some(e => h.includes(e))
          );

        const idx = {
          name: findIdx(['tên', 'name', 'sản phẩm']),
          image: findIdx(['ảnh', 'image', 'hình', 'thumb', 'photo'], ['shopee', 'affiliate', 'mua', 'url']),
          oldPrice: findIdx(['gốc', 'cũ', 'original', 'niêm yết']),
          newPrice: findIdx(['mới', 'bán', 'sale', 'ưu đãi', 'hiện tại']),
          category: findIdx(['danh mục', 'category', 'loại']),
          link: findIdx(['shopee', 'affiliate', 'mua ngay', 'url', 'link mua']),
          badge: findIdx(['nhãn', 'badge', 'trạng thái'])
        };

        console.log("Mapped Columns:", idx);

        const cleanPrice = (val: string) => {
          if (!val) return 0;
          let s = val.toString().toLowerCase().replace(/[^0-9k.]/g, '');
          if (s.includes('k')) return parseFloat(s.replace('k', '')) * 1000;
          return parseInt(s.replace(/\./g, '')) || 0;
        };

        const processImageUrl = (url: string) => {
          if (!url) return 'https://via.placeholder.com/400?text=Chua+Co+Anh';
          let cleanUrl = url.trim().replace(/^"|"$/g, '');
          
          // Xử lý link Google Drive
          if (cleanUrl.includes('drive.google.com')) {
            let fileId = '';
            if (cleanUrl.includes('/d/')) {
              fileId = cleanUrl.split('/d/')[1]?.split('/')[0];
            } else if (cleanUrl.includes('id=')) {
              fileId = cleanUrl.split('id=')[1]?.split('&')[0];
            }
            return fileId ? `https://lh3.googleusercontent.com/d/${fileId}` : cleanUrl;
          }
          
          // Nếu link không bắt đầu bằng http (có thể do lỗi copy-paste)
          if (cleanUrl.length > 5 && !cleanUrl.startsWith('http')) {
            return `https://${cleanUrl}`;
          }

          return cleanUrl;
        };

        const parsed = lines.slice(1).map((line, i) => {
          const col = parseCSVLine(line);
          
          // Cơ chế dự phòng: Nếu không thấy cột ảnh, tìm bất kỳ ô nào có link ảnh
          let imageUrl = col[idx.image];
          if (!imageUrl || (!imageUrl.includes('http') && !imageUrl.includes('drive'))) {
             const found = col.find(c => c.includes('http') && (c.includes('.jpg') || c.includes('.png') || c.includes('.webp') || c.includes('image')));
             if (found) imageUrl = found;
          }

          return {
            id: i.toString(),
            name: col[idx.name] || 'Sản phẩm ' + (i + 1),
            image: processImageUrl(imageUrl),
            originalPrice: cleanPrice(col[idx.oldPrice]),
            salePrice: cleanPrice(col[idx.newPrice]),
            category: (col[idx.category] || 'all').toLowerCase(),
            affiliateUrl: col[idx.link] || '#',
            badge: (col[idx.badge] as any) || undefined
          };
        }).filter(p => p.name.length > 1);

        setProducts(parsed);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCat = selectedCategory === 'all' || p.category.includes(selectedCategory.toLowerCase());
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery, products]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <section id="catalog" className="py-12 px-4 max-w-7xl mx-auto w-full">
          <div className="glass-container p-6 sm:p-10 rounded-[2.5rem] shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">🔥 Deal Ngon Giá Hời</h2>
                <p className="text-slate-500 font-medium mt-1">Dữ liệu được cập nhật trực tiếp từ hệ thống</p>
              </div>
              
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Tìm sản phẩm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 pl-12 pr-4 py-3 bg-white border-2 border-slate-100 rounded-2xl focus:border-[#EE4D2D] outline-none transition-all shadow-sm"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-[#EE4D2D] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'shopee-gradient text-white shadow-lg scale-105'
                      : 'bg-white text-slate-600 border border-slate-100 hover:border-[#EE4D2D]'
                  }`}
                >
                  <span>{cat.icon}</span> {cat.name}
                </button>
              ))}
            </div>

            {isLoading ? (
              <div className="py-32 text-center">
                <div className="w-12 h-12 border-4 border-[#EE4D2D] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-500 font-bold">Đang tải sản phẩm...</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
            
            {!isLoading && filteredProducts.length === 0 && (
              <div className="py-20 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-4xl mb-4">🔍</p>
                <h3 className="text-xl font-bold text-slate-800">Không có sản phẩm nào</h3>
                <p className="text-slate-500">Thử tìm với từ khóa khác nhé!</p>
              </div>
            )}
          </div>
        </section>

        <WhyUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
