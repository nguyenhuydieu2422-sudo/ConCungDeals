
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#EE4D2D] text-white py-1.5 px-4 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:0824245288" className="flex items-center gap-1 hover:underline">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0824245288
            </a>
            <a href="https://www.facebook.com/nguyenba.huy2205" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1 hover:underline">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
          <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">Hỗ trợ 24/7</span>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-[#EE4D2D] font-bold text-xl sm:text-2xl tracking-tight flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,6H16.5A4.5,4.5 0 0,0 12,1.5A4.5,4.5 0 0,0 7.5,6H5A2,2 0 0,0 3,8V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V8A2,2 0 0,0 19,6M12,3.5A2.5,2.5 0 0,1 14.5,6H9.5A2.5,2.5 0 0,1 12,3.5M19,20H5V8H7V10H9V8H15V10H17V8H19V20Z" />
                </svg>
                <span>ConCungDeals</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-[#EE4D2D] font-medium transition-colors">Danh mục</a>
              <a href="#benefits" className="text-gray-600 hover:text-[#EE4D2D] font-medium transition-colors">Lý do chọn chúng tôi</a>
            </div>
            <div>
               <span className="bg-orange-50 text-[#EE4D2D] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-orange-200">
                  100% Chính Hãng
               </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
