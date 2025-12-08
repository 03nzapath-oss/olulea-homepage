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

      <p className="text-center text-xs text-subtext mt-12">
        当店の施術や使用するアイテムのイメージです。
      </p>
    </div>
  );
};

export default Gallery;
