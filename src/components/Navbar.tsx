import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Collection', href: '/showroom' },
    { name: 'Our Story', href: '/about' },
    { name: 'Size Guide', href: '/#size-guide' },
    { name: 'Pre-Order', href: '/#pre-order' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate(href);
      } else {
        const id = href.replace('/#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || !isHome
          ? 'bg-[#fbfaf8]/95 backdrop-blur-md py-4 border-b border-stone-200 shadow-sm' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl tracking-[0.3em] font-light transition-colors text-slate-800">
          HA'OR
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => {
            const commonClasses = "text-[10px] tracking-[0.2em] font-medium uppercase transition-colors hover:opacity-70 text-slate-500 hover:text-slate-900 cursor-pointer";

            return (
              <a key={link.name} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} href={link.href} className={commonClasses}>
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-800" />
          ) : (
            <Menu className="w-6 h-6 text-slate-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-10 bg-[#fbfaf8] border-b border-stone-200 text-slate-800">
          {navLinks.map((link) => {
            const commonClasses = "text-[10px] tracking-[0.3em] uppercase font-medium transition-colors text-slate-500 hover:text-slate-900 cursor-pointer";

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={commonClasses}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
