import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SHOP_INFO } from '../constants';
import { Phone } from 'lucide-react';

const Contact: React.FC = () => {
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

      <div className="text-left md:text-center inline-block">
        <h3 className="text-accent tracking-widest mb-4 border-b border-accent/30 pb-1 inline-block">受付時間</h3>
        <p className="text-text mb-2">8:30 〜 19:00</p>
        <p className="text-text">19:00 〜 21:00 <span className="text-xs text-subtext">（当日18:30までにご予約ください）</span></p>
      </div>
    </div>
  );
};

export default Contact;
