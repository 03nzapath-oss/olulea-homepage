import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
import { IMAGES, FALLBACK_IMAGES } from '../config/images';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[80vh] w-full bg-secondary flex items-center justify-center overflow-hidden">
        <Image
          src={IMAGES.hero.main}
          fallbackSrc={FALLBACK_IMAGES.hero}
          alt="Salon Interior"
          className="absolute inset-0 w-full h-full object-cover blur-[2.5px] scale-105"
        />
        {/* 極薄い白いオーバーレイ */}
        <div className="absolute inset-0 bg-white/[0.35]"></div>
        <div className="relative z-10 text-center bg-white/80 p-8 md:p-12 backdrop-blur-sm max-w-lg mx-4">
          <p className="text-xs md:text-sm tracking-[0.3em] text-accent/80 mb-2">
            hair relaxation salon
          </p>
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-accent mb-1">
            OLU’LEA
          </h1>
          <p className="text-xs md:text-sm tracking-widest text-accent mb-6">
            オル’レア
          </p>
          <p className="text-sm md:text-base text-subtext tracking-widest leading-loose">
            心地よい空間で、<br />
            喜びと幸せを。<br />
            <br />
            髪と心の休息所
          </p>
        </div>
      </section>

      {/* Intro Message */}
      <section className="py-12 md:py-20 px-6 container mx-auto text-center">
        <p className="text-base md:text-lg leading-loose tracking-wider text-text mb-12">
          群馬みどり市にある、ヘアサロン。<br />
          髪と心のリラックス空間。<br />
          <br />
          どなたでも安心して通える<br />
          「ケア理容師」がいるお店です。
        </p>

        <Button to="/concept" subtitle="コンセプト">CONCEPT</Button>

        <div className="mt-16 max-w-3xl mx-auto">
          <Image
            src={IMAGES.concept.intro}
            fallbackSrc={FALLBACK_IMAGES.concept}
            alt="Salon Interior"
            className="w-full h-auto rounded-sm shadow-sm"
          />
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionTitle en="MENU" ja="メニュー" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/menu" className="group block bg-white p-8 hover:shadow-sm transition-shadow duration-300">
              <h3 className="text-lg tracking-widest text-accent mb-2 group-hover:opacity-80">HAIR MENU</h3>
              <p className="text-xs text-subtext mb-4">ヘアメニュー</p>
              <p className="text-sm leading-relaxed text-subtext">
                カット・カラー・パーマなど、<br />あなたに似合うスタイルをご提案いたします。
              </p>
            </Link>
            <Link to="/headspa" className="group block bg-white p-8 hover:shadow-sm transition-shadow duration-300">
              <h3 className="text-lg tracking-widest text-accent mb-2 group-hover:opacity-80">HEAD SPA</h3>
              <p className="text-xs text-subtext mb-4">ヘッドスパ</p>
              <p className="text-sm leading-relaxed text-subtext">
                頭皮と髪に合わせて選べるスパで、<br />心身ともにリラックス。
              </p>
            </Link>
            <Link to="/esthe" className="group block bg-white p-8 hover:shadow-sm transition-shadow duration-300">
              <h3 className="text-lg tracking-widest text-accent mb-2 group-hover:opacity-80">ESTHE</h3>
              <p className="text-xs text-subtext mb-4">エステ</p>
              <p className="text-sm leading-relaxed text-subtext">
                お肌のトーンアップやリフレッシュに。<br />メンズエステもご用意しております。
              </p>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Button to="/menu" subtitle="全メニュー">VIEW ALL MENU</Button>
          </div>
        </div>
      </section>

      {/* Info / Access Preview */}
      <section className="py-20 container mx-auto px-6">
        <SectionTitle en="INFORMATION" ja="ご案内" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
          <div className="aspect-[4/3] bg-gray-100 overflow-hidden rounded-sm">
            <Image
              src={IMAGES.hero.store}
              fallbackSrc={FALLBACK_IMAGES.store}
              alt="Store Front"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h4 className="text-accent tracking-widest mb-2">OPEN</h4>
              <p className="text-sm text-subtext">9:00〜19:00</p>
            </div>
            <div>
              <h4 className="text-accent tracking-widest mb-2">CLOSE</h4>
              <p className="text-sm text-subtext">毎週月曜 / 第1月・火 / 第3日・月</p>
            </div>
            <div>
              <h4 className="text-accent tracking-widest mb-2">ADDRESS</h4>
              <p className="text-sm text-subtext">群馬県みどり市笠懸町鹿 3469-6</p>
            </div>
            <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button to="/access" subtitle="アクセス">ACCESS</Button>
              <Button to="/contact" subtitle="ご予約">RESERVE</Button>
            </div>
            <p className="text-xs text-subtext mt-3 text-center md:text-left">ご予約はお気軽にお電話ください</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
