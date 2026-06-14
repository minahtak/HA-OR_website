import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export function CollectionPreview() {
  return (
    <section className="py-24 px-6 md:px-10 max-w-5xl mx-auto w-full">
      <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
        
        <h2 className="font-serif text-3xl md:text-4xl text-slate-700 mb-4">
          Collection Preview
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-24">
        {products.slice(0, 2).map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group flex flex-col border-b md:border-b-0 md:border-r border-stone-200 pb-12 md:pb-0 md:pr-12 last:border-0"
          >
            <Link to={`/showroom/${product.id}`} className="block">
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-stone-100 mb-6 border border-stone-200 flex items-center justify-center">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </div>

              {/* Details context */}
              <div className="flex flex-col flex-1">
                <h3 className="font-serif text-sm text-slate-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-[10px] tracking-widest text-slate-400 uppercase mb-2">
                  {product.material}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-medium text-slate-700">
                    {product.price}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 sm:mt-24 text-center">
        <Link 
          to="/showroom" 
          className="inline-block px-10 py-4 border border-slate-800 text-slate-800 text-[10px] tracking-[0.3em] uppercase hover:bg-slate-800 hover:text-white transition-colors duration-500"
        >
          View All Collection
        </Link>
      </div>
    </section>
  );
}
