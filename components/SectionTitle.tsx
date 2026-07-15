import React from 'react';

interface SectionTitleProps {
  en: string;
  ja: string;
  as?: 'h1' | 'h2';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ en, ja, as: Heading = 'h2' }) => {
  return (
    <div className="mb-12 text-center">
      <Heading className="text-2xl md:text-3xl font-light tracking-[0.2em] text-accent mb-2 uppercase">
        {en}
      </Heading>
      <span className="text-xs md:text-sm text-subtext tracking-wider block">
        {ja}
      </span>
      <div className="w-8 h-[1px] bg-accent mx-auto mt-6"></div>
    </div>
  );
};

export default SectionTitle;
