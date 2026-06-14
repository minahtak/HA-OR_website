import { useState } from 'react';
import { motion } from 'motion/react';

export function SizeGuide() {
  const [circumference, setCircumference] = useState<string>('');

  // Simple calculation: circumference (mm) - 43 = KS size (rough estimate)
  // Let's make an accurate table lookup for better realism
  const calculateSize = (circStr: string) => {
    const circ = parseFloat(circStr);
    if (!circ || isNaN(circ)) return null;
    
    // KS standard rings size approx: 1=44mm, 2=45mm ... 10=53mm ... 20=63mm
    if (circ < 44) return 'Too small (under Size 1)';
    if (circ > 75) return 'Too large (over Size 30)';
    
    // KS size rough formula for display
    const ksSize = Math.round(circ - 43);
    return `KS 호수: ${ksSize}호`;
  };

  const recommendedSize = calculateSize(circumference);

  return (
    <section id="size-guide" className="py-24 bg-[#fbfaf8] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] tracking-[0.3em] text-slate-400 uppercase block mb-6">
            Size Guide
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-700 mb-8">
            Find Your Light (당신의 호수 찾기)
          </h2>
          
          <div className="text-[11px] leading-[1.8] text-slate-600 font-light mb-12 max-w-2xl mx-auto">
            <p>완벽한 핏을 위해 소중한 사람 혹은 본인의 손가락 둘레를 측정해 주세요.</p>
            <p>종이띠나 실을 이용해 손가락 가장 두꺼운 마디를 감싸 잰 후, 자신의 둘레 길이를 아래에 입력하시면 한국 표준 호수(KS)를 안내해 드립니다.</p>
          </div>

          <div className="bg-[#fbfaf8] border border-stone-200 p-8 md:p-12 max-w-md mx-auto relative before:absolute before:inset-0 before:border before:border-stone-100 before:m-2">
            <label htmlFor="circumference" className="block text-[10px] tracking-[0.2em] text-slate-500 mb-4 font-medium uppercase relative z-10">
              손가락 둘레 (둘레 길이, mm)
            </label>
            <input
              type="number"
              id="circumference"
              value={circumference}
              onChange={(e) => setCircumference(e.target.value)}
              placeholder="예: 53"
              className="w-full bg-transparent border-b border-stone-200 px-4 py-3 text-center text-xl font-serif text-slate-800 focus:outline-none focus:border-slate-400 transition-colors placeholder:text-stone-300 mb-6 relative z-10"
            />
            
            <div className="h-12 flex items-center justify-center relative z-10">
              {circumference && recommendedSize ? (
                <div className="text-sm font-medium text-slate-700 tracking-wider">
                  추천 사이즈: {recommendedSize}
                </div>
              ) : (
                <div className="text-[10px] text-slate-400 tracking-[0.2em] font-light uppercase">
                  길이를 입력해주세요
                </div>
              )}
            </div>

            <p className="text-[9px] text-slate-400 mt-6 tracking-widest font-light uppercase relative z-10">
              * 이스라엘 현지 오더 시 한국 호수 기준으로 자동 매핑되어 주문됩니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
