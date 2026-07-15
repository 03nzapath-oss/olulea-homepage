import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { NAV_LINKS, SHOP_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const PAGE_TITLES: Record<string, string> = {
  '/': "OLU'LEA オルレア | Hair Relaxation Salon",
  '/concept': "コンセプト | OLU'LEA オルレア",
  '/menu': "メニュー・料金 | OLU'LEA オルレア",
  '/english': "English Menu | OLU'LEA",
  '/headspa': "ヘッドスパ | OLU'LEA オルレア",
  '/esthe': "エステ | OLU'LEA オルレア",
  '/info': "店舗情報 | OLU'LEA オルレア",
  '/holiday': "定休日・営業時間 | OLU'LEA オルレア",
  '/access': "アクセス | OLU'LEA オルレア",
  '/gallery': "ギャラリー | OLU'LEA オルレア",
  '/contact': "ご予約・お問い合わせ | OLU'LEA オルレア",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Reset page state and metadata on route changes.
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    document.title = PAGE_TITLES[location.pathname] ?? PAGE_TITLES['/'];
  }, [location.pathname]);

  // Google Analytics event for phone calls
  const handlePhoneClick = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'click_phone', {
        event_category: 'contact',
        event_label: SHOP_INFO.phone
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-text">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 h-16 md:h-20 flex items-center justify-between px-4 md:px-8 border-b border-secondary">
        <NavLink to="/" className="flex items-center shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.svg`}
            alt="OLU'LEA"
            className="h-10 md:h-14 w-auto"
            fetchPriority="high"
            decoding="sync"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">
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
          className="lg:hidden p-2 text-subtext"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 md:top-20 bg-white z-40 flex flex-col items-center justify-start pt-12 space-y-6 lg:hidden overflow-y-auto pb-20">
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
          <div className="mt-8 pt-8 border-t border-secondary w-3/4 flex flex-col items-center gap-6">
            <a
              href={`tel:${SHOP_INFO.phone}`}
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 text-accent"
            >
              <Phone size={18} />
              <span className="text-lg tracking-widest">{SHOP_INFO.phone}</span>
            </a>

            <div className="flex items-center gap-8">
              <a
                href={SHOP_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-subtext hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
                <span className="text-xs tracking-wider">Instagram</span>
              </a>

              <a
                href="https://page.line.me/197hdesp?oat__id=6321973&openQrModal=true#~"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-subtext hover:text-accent transition-colors"
                aria-label="LINE"
              >
                <svg width="24" height="24" viewBox="53 58 214 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M266.66,144.92c0-47.74-47.86-86.58-106.69-86.58S53.28,97.18,53.28,144.92c0,42.8,38,78.65,89.22,85.42,3.48.75,8.21,2.29,9.4,5.26,1.08,2.7.71,6.93.35,9.65,0,0-1.25,7.53-1.52,9.13-.47,2.7-2.15,10.55,9.24,5.76s61.44-36.18,83.82-61.95h0C259.25,181.24,266.66,164,266.66,144.92Z" />
                  <path fill="#FFFFFF" d="M120.29,172.49a2,2,0,0,0,2-2v-7.56a2,2,0,0,0-2-2H99.92v-37a2,2,0,0,0-2-2H90.32a2,2,0,0,0-2,2v46.53h0v0a2,2,0,0,0,2,2h30Z" />
                  <rect fill="#FFFFFF" x="128.73" y="121.85" width="11.64" height="50.64" rx="2.04" />
                  <path fill="#FFFFFF" d="M189.84,121.85h-7.56a2,2,0,0,0-2,2v27.66l-21.3-28.77a1.2,1.2,0,0,0-.17-.21v0l-.12-.12,0,0-.11-.09-.06,0-.11-.08-.06,0-.11-.06-.07,0-.11,0-.07,0-.12,0-.08,0-.12,0h-.08l-.11,0h-7.71a2,2,0,0,0-2,2v46.56a2,2,0,0,0,2,2h7.57a2,2,0,0,0,2-2V142.81l21.33,28.8a2,2,0,0,0,.52.52h0l.12.08.06,0,.1.05.1,0,.07,0,.14,0h0a2.42,2.42,0,0,0,.54.07h7.52a2,2,0,0,0,2-2V123.89A2,2,0,0,0,189.84,121.85Z" />
                  <path fill="#FFFFFF" d="M231.16,172.49h-30a2,2,0,0,1-2-2v0h0V123.94h0v0a2,2,0,0,1,2-2h30a2,2,0,0,1,2,2v7.57a2,2,0,0,1-2,2H210.79v7.85h20.37a2,2,0,0,1,2,2V151a2,2,0,0,1-2,2H210.79v7.86h20.37a2,2,0,0,1,2,2v7.56A2,2,0,0,1,231.16,172.49Z" />
                </svg>
                <span className="text-xs tracking-wider">LINE</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary pt-12 pb-32 lg:py-12 px-4 text-center mt-20">
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

        <div className="flex flex-col items-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/olulea.hair?igsh=N293emFtZTNnYmtl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-subtext hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
            <span className="text-sm tracking-wider">Instagram</span>
          </a>

          <a
            href="https://page.line.me/197hdesp?oat__id=6321973&openQrModal=true#~"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-subtext hover:text-accent transition-colors"
            aria-label="LINE"
          >
            {/* Official LINE Logo Shape */}
            <svg width="24" height="24" viewBox="53 58 214 176" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Speech Bubble */}
              <path fill="currentColor" d="M266.66,144.92c0-47.74-47.86-86.58-106.69-86.58S53.28,97.18,53.28,144.92c0,42.8,38,78.65,89.22,85.42,3.48.75,8.21,2.29,9.4,5.26,1.08,2.7.71,6.93.35,9.65,0,0-1.25,7.53-1.52,9.13-.47,2.7-2.15,10.55,9.24,5.76s61.44-36.18,83.82-61.95h0C259.25,181.24,266.66,164,266.66,144.92Z" />
              {/* Text L */}
              <path fill="#F4F2ED" d="M120.29,172.49a2,2,0,0,0,2-2v-7.56a2,2,0,0,0-2-2H99.92v-37a2,2,0,0,0-2-2H90.32a2,2,0,0,0-2,2v46.53h0v0a2,2,0,0,0,2,2h30Z" />
              {/* Text I */}
              <rect fill="#F4F2ED" x="128.73" y="121.85" width="11.64" height="50.64" rx="2.04" />
              {/* Text N */}
              <path fill="#F4F2ED" d="M189.84,121.85h-7.56a2,2,0,0,0-2,2v27.66l-21.3-28.77a1.2,1.2,0,0,0-.17-.21v0l-.12-.12,0,0-.11-.09-.06,0-.11-.08-.06,0-.11-.06-.07,0-.11,0-.07,0-.12,0-.08,0-.12,0h-.08l-.11,0h-7.71a2,2,0,0,0-2,2v46.56a2,2,0,0,0,2,2h7.57a2,2,0,0,0,2-2V142.81l21.33,28.8a2,2,0,0,0,.52.52h0l.12.08.06,0,.1.05.1,0,.07,0,.14,0h0a2.42,2.42,0,0,0,.54.07h7.52a2,2,0,0,0,2-2V123.89A2,2,0,0,0,189.84,121.85Z" />
              {/* Text E */}
              <path fill="#F4F2ED" d="M231.16,172.49h-30a2,2,0,0,1-2-2v0h0V123.94h0v0a2,2,0,0,1,2-2h30a2,2,0,0,1,2,2v7.57a2,2,0,0,1-2,2H210.79v7.85h20.37a2,2,0,0,1,2,2V151a2,2,0,0,1-2,2H210.79v7.86h20.37a2,2,0,0,1,2,2v7.56A2,2,0,0,1,231.16,172.49Z" />
            </svg>
            <span className="text-sm tracking-wider">友だち追加</span>
          </a>
        </div>

        <p className="text-[10px] text-gray-400 tracking-wider">
          Copyright &copy; OLU’LEA. All Rights Reserved.
        </p>
      </footer>

      {/* Sticky Call Button (Mobile Only) */}
      <div className="lg:hidden fixed bottom-[calc(32px+env(safe-area-inset-bottom,0px))] right-8 z-30 font-sans">
        <div className="relative flex items-center justify-center">
          <a
            href={`tel:${SHOP_INFO.phone}`}
            onClick={handlePhoneClick}
            className="relative z-10 flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:bg-opacity-90 transition-all"
            aria-label="Call Now"
          >
            <Phone size={24} />
          </a>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="textPath"
                d="M 12,50 A 38,38 0 0,0 88,50"
                fill="none"
              />
              <text fontSize="11" fontWeight="bold" fill="#A8B29E" letterSpacing="0.1em">
                <textPath href="#textPath" startOffset="50%" textAnchor="middle" side="left">
                  電話で予約する
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
