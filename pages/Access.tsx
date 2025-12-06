import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { SHOP_INFO } from '../constants';
import { MapPin } from 'lucide-react';

const Access: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-3xl">
      <SectionTitle en="ACCESS" ja="アクセス" />

      <div className="text-center mb-8">
        <p className="text-lg text-text mb-2">{SHOP_INFO.address}</p>
        <p className="text-subtext text-sm">駐車場完備</p>
      </div>

      {/* Google Maps */}
      <div className="w-full aspect-video bg-secondary relative mb-12 rounded-sm overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.5881873527883!2d139.27445989999998!3d36.3949621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ee47cb129af61%3A0x5cd99d1f4c672bb5!2z44Kq44Or44Os44Ki77yI772P772M772VJ--9jO-9he-9ge-8iQ!5e0!3m2!1sja!2sjp!4v1764994777657!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="オルレア 地図"
        >
        </iframe>
      </div>

      <div className="bg-secondary/30 p-8 rounded-sm text-center md:text-left">
        <h3 className="text-accent tracking-widest mb-4 flex items-center justify-center md:justify-start gap-2">
          <MapPin size={18} />
          <span>ROUTE GUIDE</span>
        </h3>
        <ul className="space-y-3 text-text text-sm leading-relaxed">
          {SHOP_INFO.access.map((line, i) => (
            <li key={i}>・ {line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12 text-center">
        <Button
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP_INFO.address)}`}
          subtitle="地図アプリで開く"
        >
          Google Maps
        </Button>
      </div>
    </div>
  );
};

export default Access;
