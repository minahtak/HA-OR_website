import { motion } from 'motion/react';

export function PreOrder() {
  return (
    <section id="pre-order" className="py-24 md:py-32 px-10 max-w-4xl mx-auto border-t border-stone-200">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <span className="text-[10px] tracking-[0.3em] text-slate-400 uppercase block mb-6">
          Private Order
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-slate-700 mb-12">
          1st Project : Special Edition Pre-Order
        </h2>

        <div className="space-y-6 text-[11px] leading-[1.8] text-slate-600 font-light text-left mb-16 p-8 md:p-12 border border-stone-200 relative before:absolute before:inset-0 before:border before:border-stone-100 before:m-2">
          <p className="text-[10px] tracking-[0.3em] uppercase text-slate-800 text-center mb-8 font-medium">
            [9월 귀국 한정 프리오더 안내]
          </p>
          <p className="relative z-10">
            HA'OR의 모든 제품은 대량 생산되는 기성품이 아닙니다. 
            예루살렘 현지 공방에서 고객님의 호수에 맞춰 1:1로 엄선하여 직접 바잉해오는 한정 수량 프로젝트입니다.
          </p>
          <p className="relative z-10">
            국제 배송비 리스크를 없애고 온전한 제품의 가치만 전달하기 위해, 
            9월 입국 시 캐리어에 소중히 담아 귀국 후 순차적으로 안전하게 국내 발송해 드립니다.
          </p>
          
          <ul className="mt-8 space-y-2 text-slate-700 border-t border-stone-200 pt-6 text-[10px] tracking-[0.2em] uppercase text-center relative z-10">
            <li><span className="font-medium mr-4 text-slate-500">1차 오더 마감:</span> 2026년 8월 30일</li>
            <li><span className="font-medium mr-4 text-slate-500">일괄 배송 예정:</span> 2026년 9월 중순</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#" 
             className="w-full sm:w-auto px-8 py-4 border border-transparent bg-slate-800 text-white text-[10px] tracking-[0.3em] uppercase hover:bg-slate-900 transition-colors text-center">
            Order Via Google Form
          </a>
          <a href="#" 
             className="w-full sm:w-auto px-8 py-4 border border-slate-800 text-slate-800 text-[10px] tracking-[0.3em] uppercase hover:bg-slate-800 hover:text-white transition-colors text-center">
            Inquiry on Instagram DM
          </a>
        </div>
      </motion.div>
    </section>
  );
}
