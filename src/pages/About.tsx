import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen bg-[#fbfaf8] text-slate-800 font-light flex flex-col pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center md:text-left border-b border-stone-200 pb-16"
        >
          <h1 className="text-slate-800 font-serif text-3xl md:text-5xl mb-6 tracking-wide">
            About HA'OR
          </h1>
          <p className="text-[11px] tracking-[0.3em] text-slate-400 uppercase">
            We find pieces of wisdom in Jerusalem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Left visual space */}
          <div className="md:col-span-5 relative aspect-[3/4] bg-stone-100 border border-stone-200">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Jerusalem alley" 
              className="w-full h-full object-cover opacity-80 grayscale-[20%] transition-opacity hover:opacity-100 duration-700"
            />
            <div className="absolute inset-0 bg-[#fbfaf8]/10 mix-blend-overlay"></div>
          </div>

          {/* Right text content */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-10 text-xs md:text-sm leading-[2.2] tracking-wide text-slate-600">
            <p>
              <span className="text-slate-800 font-medium tracking-widest">HA'OR (하오르)</span>는 이스라엘 예루살렘에서 시작된 주얼리 큐레이션 브랜드입니다.
            </p>
            
            <p>
              수천 년의 역사와 시간이 겹겹이 쌓인 예루살렘의 고대 골목에는 오랜 전통을 이어오는 로컬 세공인들의 공방이 숨어 있습니다. 우리는 그곳에서 단순한 장신구가 아닌, 저마다 깊은 메시지와 정통성을 품고 있는 주얼리들을 발굴합니다.
            </p>

            <div className="py-10 border-y border-stone-200 my-8 text-center md:text-left">
              <p className="font-serif text-2xl md:text-3xl text-slate-800 tracking-wider mb-4 leading-relaxed">
                "הכל עובר וגם זה יעבור"
              </p>
              <p className="text-slate-500 text-[11px] tracking-widest uppercase mb-4">
                (이 또한 지나가리라)
              </p>
            </div>
            
            <p>
              솔로몬의 지혜로 잘 알려진 고대 명언을 비롯하여, 삶의 이정표가 되어주는 성경의 문구와 히브리어 원문 각인들을 엄선합니다.
            </p>

            <p>
              유학생의 시선과 안목으로 현지에서 직접 바잉하여, 한국에서는 쉽게 접할 수 없는 이스라엘 본토 고유의 무드와 영원한 가치를 당신의 일상에 전합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
