
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center bg-white/85 backdrop-blur-xl p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-white/50">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6 animate-bounce shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-red-600"></span>
            Lân Khai Xuân - Deal Ngập Tràn
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-7xl">
            <span className="block xl:inline">Tết Giáp Thìn –</span>{' '}
            <span className="block text-[#EE4D2D] xl:inline">Ưu Đãi Linh Đình</span>
          </h1>
          <p className="mt-5 max-w-md mx-auto text-base text-slate-800 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl font-semibold leading-relaxed">
            Hòa cùng không khí rộn ràng của tiếng trống lân, ConCungDeals mang đến cho bạn những sản phẩm sắm Tết chất lượng nhất với giá hời chưa từng có.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#catalog"
              className="px-10 py-5 border border-transparent text-lg font-black rounded-2xl text-white bg-[#EE4D2D] hover:bg-[#d73211] transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(238,77,45,0.4)]"
            >
              🧧 XEM DEAL TẾT NGAY 🧧
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
