
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold flex items-center gap-2 justify-center md:justify-start">
              <span className="text-[#EE4D2D]">ConCung</span>Deals
            </div>
            <p className="mt-2 text-slate-400 max-w-xs mx-auto md:mx-0">
              Kênh tổng hợp deal hời và mã giảm giá Shopee uy tín số 1 Việt Nam.
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm text-slate-300">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-[#EE4D2D] font-bold">Hotline:</span>
                <a href="tel:0824245288" className="hover:text-white transition-colors">0824245288</a>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/nguyenba.huy2205" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#EE4D2D] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-[#EE4D2D] transition-colors">TikTok</a>
            <a href="#" className="flex items-center gap-2 hover:text-[#EE4D2D] transition-colors">YouTube</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm mb-2">
            Disclaimer: Website chia sẻ các sản phẩm chất lượng với giá ưu đãi. Chúng tôi không trực tiếp bán hàng.
          </p>
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} ConCungDeals Affiliate Hub. Không thu thập dữ liệu người dùng.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
