
import React from 'react';

const benefits = [
  {
    title: 'Chọn lọc deal thật',
    desc: 'Mọi sản phẩm đều được kiểm duyệt kỹ về chất lượng và mức giá.',
    icon: (
      <svg className="w-6 h-6 text-[#EE4D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Không tăng giá',
    desc: 'Cam kết chia sẻ link trực tiếp từ nhà bán hàng, không kê giá ảo.',
    icon: (
      <svg className="w-6 h-6 text-[#EE4D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Link Chính Hãng',
    desc: 'Ưu tiên các gian hàng Shopee Mall để đảm bảo quyền lợi người mua.',
    icon: (
      <svg className="w-6 h-6 text-[#EE4D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Cập nhật hằng ngày',
    desc: 'Hàng ngàn mã giảm giá và deal sốc được update mỗi sáng sớm.',
    icon: (
      <svg className="w-6 h-6 text-[#EE4D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const WhyUs: React.FC = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-xl border border-white/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Vì sao nên chọn ConCungDeals?
            </h2>
            <div className="mt-4 h-1.5 w-24 bg-[#EE4D2D] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-orange-50 mb-6 shadow-sm border border-orange-100">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
