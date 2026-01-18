
import React from 'react';
import { Product, BadgeType } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    if (!price || price === 0) return 'Liên hệ';
    return new Intl.NumberFormat('vi-VN').format(price) + ' ₫';
  };

  const getBadge = (type?: string) => {
    const t = type?.toUpperCase();
    if (t === 'HOT') return <span className="bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm">HOT</span>;
    if (t === 'BEST_SELLER' || t === 'BÁN CHẠY') return <span className="bg-orange-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm">BÁN CHẠY</span>;
    if (t === 'DEEP_DISCOUNT' || t === 'GIẢM SÂU') return <span className="bg-yellow-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm">GIẢM SÂU</span>;
    return null;
  };

  const hasDiscount = product.originalPrice > product.salePrice && product.salePrice > 0;
  const discountPercent = hasDiscount 
    ? Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400?text=Hinh+Anh+Dang+Cap+Nhat';
          }}
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {getBadge(product.badge)}
        </div>
        {discountPercent > 0 && (
          <div className="absolute top-0 right-0 bg-yellow-400 text-red-600 font-black px-2 py-1 text-xs rounded-bl-xl shadow-sm">
            -{discountPercent}%
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-slate-800 font-bold text-xs sm:text-sm line-clamp-2 mb-2 min-h-[2.5rem] leading-tight group-hover:text-[#EE4D2D]">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <div className="mb-3">
            {hasDiscount && (
              <span className="text-[10px] sm:text-xs text-slate-400 line-through block">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-sm sm:text-base font-black text-[#EE4D2D]">
              {formatPrice(product.salePrice)}
            </span>
          </div>

          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-2 bg-[#EE4D2D] text-white rounded-lg font-bold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-orange-100"
          >
            Mua Ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
