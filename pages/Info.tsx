import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SHOP_INFO } from '../constants';

const Info: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-3xl">
      <SectionTitle en="INFORMATION" ja="店舗情報" />

      <div className="bg-white">
        <dl className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 border-b border-secondary pb-6">
            <dt className="text-accent tracking-widest text-sm md:text-right">SALON NAME</dt>
            <dd className="md:col-span-3 text-text">
              {SHOP_INFO.name}<br />
              <span className="text-xs text-subtext">{SHOP_INFO.kana}</span>
            </dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 border-b border-secondary pb-6">
            <dt className="text-accent tracking-widest text-sm md:text-right">ADDRESS</dt>
            <dd className="md:col-span-3 text-text">{SHOP_INFO.address}</dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 border-b border-secondary pb-6">
            <dt className="text-accent tracking-widest text-sm md:text-right">TEL</dt>
            <dd className="md:col-span-3 text-text text-lg tracking-wider">{SHOP_INFO.phone}</dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 border-b border-secondary pb-6">
            <dt className="text-accent tracking-widest text-sm md:text-right">HOURS</dt>
            <dd className="md:col-span-3 text-text space-y-1">
              {SHOP_INFO.hours.map((h, i) => (
                <p key={i} className={i === 1 ? "text-xs text-subtext mt-1" : ""}>{h}</p>
              ))}
            </dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 border-b border-secondary pb-6">
            <dt className="text-accent tracking-widest text-sm md:text-right">FEATURES</dt>
            <dd className="md:col-span-3 text-text space-y-1">
              {SHOP_INFO.features.map((f, i) => (
                <div key={i}>
                  <p className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {f}
                  </p>
                  {(f.includes("ケア理容師") || i === 1) && (
                    <div className="mt-2 ml-4">
                      <img
                        src={`${import.meta.env.BASE_URL}images/care_barber.jpg`}
                        alt="ケア理容師マーク"
                        className="w-24 md:w-32 h-auto"
                      />
                    </div>
                  )}
                </div>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Info;
