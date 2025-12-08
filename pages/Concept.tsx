import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Concept: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-3xl">
      <SectionTitle en="CONCEPT" ja="コンセプト" />

      <div className="space-y-16 text-left leading-loose tracking-wide text-text">
        <section>
          <h3 className="text-xl md:text-2xl text-accent mb-6 font-light">OLU’LEAに込めた想い</h3>
          <div className="mb-6">
            <span className="text-accent font-medium">OLUOLU</span> ＝ 心地よい<br />
            <span className="text-accent font-medium">LEA</span> ＝ 喜び・幸せ
          </div>
          <div className="text-subtext text-sm md:text-base">
            <p>
              ハワイ語で「心地よい」を意味するOLUOLUと、<br className="md:hidden" />
              「喜び・幸せ」を意味するLEA。<br className="md:hidden" />
              この二つの言葉を合わせて<br className="md:hidden" />
              <span className="font-bold">「OLU’LEA（オルレア）」</span><br className="md:hidden" />
              と名付けました。
              <br className="md:hidden" /><br className="md:hidden" />
              ただ髪を切る場所ではなく、<br className="md:hidden" />
              訪れるたびに心が安らぎ、<br className="md:hidden" />
              新しい自分に出会う喜びを感じていただける。<br className="md:hidden" />
              そんな「お客様に喜ばれる優しいサロン」を目指しています。
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl text-accent mb-6 font-light">心身のケアと寄り添う技術</h3>
          <div className="aspect-video w-full bg-secondary mb-8 overflow-hidden rounded-sm">
            <img src={`${import.meta.env.BASE_URL}images/concept/main.jpg`} alt="Relaxing atmosphere" className="w-full h-full object-cover" />
          </div>
          <div className="text-subtext text-sm md:text-base">
            <p>
              頭皮と髪のケアはもちろん、<br className="md:hidden" />
              心のケアも大切にしています。<br className="md:hidden" />
              カット、カラー、パーマに加え、<br className="md:hidden" />
              頭皮と髪に合わせて選べるヘッドスパや、<br className="md:hidden" />
              エステなどのリラクゼーションメニューも<br className="md:hidden" />
              用意しております。
              <br className="md:hidden" />
              また、個室も完備しており、<br className="md:hidden" />
              プライベートな空間でゆったりとお過ごしいただけます。
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl text-accent mb-6 font-light">どなたでも安心して通える場所に</h3>
          <div className="text-subtext text-sm md:text-base">
            <p>
              当店ではケア理容師の資格を取得しております。<br />
              （平成17年2月24日認定）
              <br className="md:hidden" /><br className="md:hidden" />
              ご高齢の方やお体が不自由な方にも、<br className="md:hidden" />
              安心してご利用いただける環境と技術を提供いたします。
              <br className="md:hidden" /><br className="md:hidden" />
              どんな些細なことでも、<br className="md:hidden" />
              お気軽にご相談ください。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Concept;
