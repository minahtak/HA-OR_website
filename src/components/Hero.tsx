import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#fbfaf8]">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-[100px] leading-none text-slate-800 mb-2"
        >
          אור
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[11px] tracking-widest text-slate-400 uppercase mb-16"
        >
          Curated in Jerusalem, Israel.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-6 mb-16 font-light leading-relaxed text-slate-800"
        >
          <p className="font-serif text-3xl md:text-4xl leading-snug">
            예루살렘의 시간과<br className="hidden md:block" />빛을 큐레이션합니다.
          </p>
          <p className="text-[11px] md:text-xs text-slate-500 tracking-wide font-light">
            고대 도시의 흔적 속에서 발견한<br className="hidden md:block" />
            히브리어 문장들과 주얼리 에디션.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link 
            to="/showroom"
            className="inline-flex items-center px-8 py-4 border border-slate-800 text-slate-800 text-[10px] tracking-[0.3em] uppercase hover:bg-slate-800 hover:text-white transition-all duration-500"
          >
            View Collection
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}
