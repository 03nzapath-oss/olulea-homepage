import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, SHOP_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-text">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 h-16 md:h-20 flex items-center justify-between px-4 md:px-8 border-b border-secondary">
        <NavLink to="/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.svg`}
            alt="OLU'LEA"
            className="h-10 md:h-14 w-auto"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs tracking-widest hover:text-accent transition-colors ${isActive ? 'text-accent border-b border-accent pb-1' : 'text-subtext'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-subtext"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 flex flex-col items-center justify-start pt-12 space-y-6 md:hidden overflow-y-auto pb-20">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-[0.2em] py-2 ${isActive ? 'text-accent font-medium' : 'text-text'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-8 pt-8 border-t border-secondary w-3/4 flex justify-center">
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="flex items-center space-x-2 text-accent"
            >
              <Phone size={18} />
              <span className="text-lg tracking-widest">{SHOP_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12 px-4 text-center mt-20">
        <img
          src={`${import.meta.env.BASE_URL}images/logo-header.svg`}
          alt="OLU'LEA"
          className="h-20 w-auto mx-auto mb-6"
        />
        <div className="text-xs text-subtext space-y-2 mb-8 leading-relaxed">
          <p>{SHOP_INFO.address}</p>
          <p className="tracking-widest">{SHOP_INFO.phone}</p>
          <p>Open 9:00 - 19:00</p>
        </div>

        <p className="text-[10px] text-gray-400 tracking-wider">
          &copy; {new Date().getFullYear()} OLU’LEA. All Rights Reserved.
        </p>
      </footer>

      {/* Sticky Call Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 right-6 z-30">
        <a
          href={`tel:${SHOP_INFO.phone}`}
          className="flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:bg-opacity-90 transition-all"
          aria-label="Call Now"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default Layout;
