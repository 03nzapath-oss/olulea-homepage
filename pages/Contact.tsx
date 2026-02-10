import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SHOP_INFO } from '../constants';
import { Phone } from 'lucide-react';

const Contact: React.FC = () => {
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
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-2xl text-center">
      <SectionTitle en="CONTACT" ja="ご予約・お問い合わせ" />

      <p className="mb-12 text-text leading-loose">
        当店は電話予約優先となっております。<br />
        ご予約、ご質問はお気軽にお電話ください。
      </p>

      <div className="bg-secondary/20 p-12 rounded-sm mb-12">
        <a
          href={`tel:${SHOP_INFO.phone}`}
          onClick={handlePhoneClick}
          className="inline-flex flex-col items-center group"
        >
          <div className="flex items-center gap-3 text-accent mb-2">
            <Phone size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-xl md:text-4xl tracking-widest font-medium border-b border-transparent group-hover:border-accent transition-all">
              {SHOP_INFO.phone}
            </span>
          </div>
          <span className="text-xs text-subtext">タップして発信</span>
        </a>
      </div>
      <div className="text-center mb-12">
        <h3 className="text-accent tracking-widest mb-4 border-b border-accent/30 pb-1 inline-block">受付時間</h3>
        <p className="text-text mb-2">9:00 〜 19:00</p>
        <p className="text-xs text-subtext">19:00以降のご予約は事前のお電話にて相談可</p>
      </div>


      <div className="bg-secondary/20 p-8 md:p-12 rounded-sm mb-12">
        <h3 className="text-lg md:text-xl font-medium tracking-widest mb-6 text-accent">LINEでのご予約</h3>

        <div className="text-center text-sm md:text-base space-y-4 mb-8 leading-relaxed">
          <p>営業時間外でも簡単に予約できます。</p>
          <p>チャットでのやり取りになります。<br />ご希望の時間までにゆとりがある方はLINEで承ります。</p>
        </div>

        <a
          href="https://page.line.me/197hdesp?oat__id=6321973&openQrModal=true#~"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#06C755] text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-md group w-full md:w-auto"
        >
          <svg width="24" height="24" viewBox="53 58 214 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path fill="white" d="M266.66,144.92c0-47.74-47.86-86.58-106.69-86.58S53.28,97.18,53.28,144.92c0,42.8,38,78.65,89.22,85.42,3.48.75,8.21,2.29,9.4,5.26,1.08,2.7.71,6.93.35,9.65,0,0-1.25,7.53-1.52,9.13-.47,2.7-2.15,10.55,9.24,5.76s61.44-36.18,83.82-61.95h0C259.25,181.24,266.66,164,266.66,144.92Z" />
            <path fill="#06C755" d="M120.29,172.49a2,2,0,0,0,2-2v-7.56a2,2,0,0,0-2-2H99.92v-37a2,2,0,0,0-2-2H90.32a2,2,0,0,0-2-2v46.53h0v0a2,2,0,0,0,2,2h30Z" />
            <rect fill="#06C755" x="128.73" y="121.85" width="11.64" height="50.64" rx="2.04" />
            <path fill="#06C755" d="M189.84,121.85h-7.56a2,2,0,0,0-2,2v27.66l-21.3-28.77a1.2,1.2,0,0,0-.17-.21v0l-.12-.12,0,0-.11-.09-.06,0-.11-.08-.06,0-.11-.06-.07,0-.11,0-.07,0-.12,0-.08,0-.12,0h-.08l-.11,0h-7.71a2,2,0,0,0-2,2v46.56a2,2,0,0,0,2,2h7.57a2,2,0,0,0,2-2V142.81l21.33,28.8a2,2,0,0,0,.52.52h0l.12.08.06,0,.1.05.1,0,.07,0,.14,0h0a2.42,2.42,0,0,0,.54.07h7.52a2,2,0,0,0,2-2V123.89A2,2,0,0,0,189.84,121.85Z" />
            <path fill="#06C755" d="M231.16,172.49h-30a2,2,0,0,1-2-2v0h0V123.94h0v0a2,2,0,0,1,2-2h30a2,2,0,0,1,2-2v7.57a2,2,0,0,1-2,2H210.79v7.85h20.37a2,2,0,0,1,2,2V151a2,2,0,0,1-2,2H210.79v7.86h20.37a2,2,0,0,1,2,2v7.56A2,2,0,0,1,231.16,172.49Z" />
          </svg>
          <span className="text-lg font-bold tracking-widest">LINEで予約</span>
        </a>

        <p className="mt-8 text-xs text-subtext">
          ※なお、当日中やお急ぎの方の予約はお電話でお願い致します。
        </p>
      </div>


    </div>
  );
};

export default Contact;
