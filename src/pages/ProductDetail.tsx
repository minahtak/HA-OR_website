import { useParams, Navigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useState } from 'react';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <Navigate to="/showroom" />;
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto w-full flex-1">
      <Link to="/showroom" className="inline-block text-[10px] tracking-[0.2em] text-slate-400 hover:text-slate-800 transition-colors uppercase mb-12">
        ← Back to Collection
      </Link>
      
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        {/* Left: Images */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="relative aspect-[4/5] bg-stone-100 border border-stone-200 overflow-hidden flex items-center justify-center">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 aspect-square border ${activeImage === idx ? 'border-slate-800' : 'border-stone-200'} opacity-80 hover:opacity-100 transition-opacity`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 flex flex-col py-4">
          <span className="text-[10px] tracking-widest text-slate-400 uppercase mb-4 block">
            {product.material}
          </span>
          <h1 className="font-serif text-2xl md:text-3xl text-slate-800 mb-2">
            {product.name}
          </h1>
          <p className="text-[11px] text-slate-500 tracking-widest uppercase mb-8">
            {product.englishName}
          </p>
          
          <div className="text-sm font-medium text-slate-700 mb-8 pb-8 border-b border-stone-200">
            {product.price}
          </div>
          
          <p className="text-[11px] leading-[2] text-slate-600 font-light mb-12">
            {product.description}
          </p>

          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.2em] font-medium text-slate-500 uppercase">
              Options (메시지 선택)
            </span>
            
            <div className="flex flex-col gap-4">
              {product.options.map((opt, i) => (
                <div key={opt.id} className="p-5 border border-stone-200 bg-[#fbfaf8] hover:border-slate-300 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-slate-400 transition-colors"></div>
                  <div className="text-[9px] tracking-widest text-slate-400 mb-3 uppercase pl-2">Option 0{i+1}</div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pl-2">
                    <span className="text-xs text-slate-800 font-light leading-relaxed">
                      {opt.title}<br/>
                      <span className="text-[11px] text-slate-500 font-medium">{opt.subtitle}</span>
                    </span>
                    <span className="font-serif text-[15px] text-slate-700 tracking-wider whitespace-nowrap">{opt.hebrew}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-stone-200">
            <Link to="/#pre-order" className="block w-full py-4 bg-slate-800 text-white text-center text-[10px] tracking-[0.3em] uppercase hover:bg-slate-900 transition-colors">
              Go to Pre-Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
