import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Concept: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-3xl">
      <SectionTitle en="CONCEPT" ja="コンセプト" />

      <div className="space-y-16 text-center md:text-left leading-loose tracking-wide text-text">
        <section>
          <h3 className="text-xl md:text-2xl text-accent mb-6 font-light">OLU’LEAに込めた想い</h3>
          <p className="mb-6">
            <span className="text-accent font-medium">OLUOLU</span> ＝ 心地よい<br />
            <span className="text-accent font-medium">LEA</span> ＝ 喜び・幸せ
          </p>
          <p className="text-subtext text-sm md:text-base">
            ハワイ語で「心地よい」を意味するOLUOLUと、<br />「喜び・幸せ」を意味するLEA。<br />
            この二つの言葉を合わせて<br />「OLU’LEA（オルレア）」<br />と名付けました。<br /><br />
            ただ髪を切る場所ではなく、<br />訪れるたびに心が安らぎ、<br />
            新しい自分に出会う喜びを感じていただける。<br />
            そんな「お客様に喜ばれる優しいサロン」を目指しています。
          </p>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl text-accent mb-6 font-light">心身のケアと寄り添う技術</h3>
          <div className="aspect-video w-full bg-secondary mb-8 overflow-hidden rounded-sm">
            <img src="https://picsum.photos/seed/olulea_concept/1200/800" alt="Relaxing atmosphere" className="w-full h-full object-cover" />
          </div>
          <p className="text-subtext text-sm md:text-base">
            頭皮と髪のケアはもちろん、<br />心のケアも大切にしています。<br />
            カット、カラー、パーマに加え、<br />
            頭皮と髪に合わせて選べるヘッドスパや、<br />
            エステなどのリラクゼーションメニューも用意しております。<br />
            <br />
            また、個室も完備しており、プライベートな空間でゆったりとお過ごしいただけます。
          </p>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl text-accent mb-6 font-light">どなたでも安心して通える場所に</h3>
          <p className="text-subtext text-sm md:text-base">
            当店ではケア理容師の資格を取得しております。<br />（平成17年2月24日認定）<br /><br />
            ご高齢の方やお体が不自由な方にも、<br />
            安心してご利用いただける環境と技術を提供いたします。<br />
            <br />
            どんな些細なことでも、お気軽にご相談ください。
          </p>
        </section>
      </div>
    </div>
  );
};

export default Concept;
