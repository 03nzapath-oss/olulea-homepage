import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Image from '../components/Image';
import { IMAGES, FALLBACK_IMAGES } from '../config/images';

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <SectionTitle en="GALLERY" ja="ギャラリー" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {IMAGES.gallery.map((img) => (
          <div key={img.id} className="aspect-square bg-secondary overflow-hidden">
            <Image
              src={img.path}
              fallbackSrc={FALLBACK_IMAGES.gallery(img.id)}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out opacity-90 hover:opacity-100"
            />
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-subtext mt-12 mb-10">
        当店の施術や使用するアイテムのイメージです。
      </p>
      <p className="text-center text-sm text-subtext leading-loose max-w-2xl mx-auto">
        当店のヘッドスパでは、<br className="md:hidden" />
        髪と頭皮の一体ケアを目的とした<br />
        サロン専用シャンプー&amp;トリートメント<br className="md:hidden" />
        「エステシモ」を使用しています。<br />
        続けるほどに頭皮が健やかに整い、<br className="md:hidden" />
        髪そのものが美しく育ちます。<br />
        施術でもホームケアでも、<br className="md:hidden" />
        長く安心してお使いいただけます。
      </p>
    </div >
  );
};

export default Gallery;
