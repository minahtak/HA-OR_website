import { Hero } from '../components/Hero';
import { CollectionPreview } from '../components/CollectionPreview';
import { SizeGuide } from '../components/SizeGuide';
import { PreOrder } from '../components/PreOrder';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-[#fbfaf8] flex flex-col items-center w-full">
      <Hero />
      <CollectionPreview />
      <SizeGuide />
      <PreOrder />
    </div>
  );
}
