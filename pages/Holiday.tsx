import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Calendar from '../components/Calendar';

const Holiday: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-5xl">
      <SectionTitle en="HOLIDAY" ja="定休日・営業時間" />

      {/* Business Information Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Holiday Rules */}
          <div>
            <h3 className="text-lg text-accent tracking-widest mb-6 border-b border-accent/30 pb-2">定休日について</h3>
            <ul className="space-y-4 text-text leading-relaxed">
              <li className="flex items-start">
                <span className="text-accent mr-3">●</span>
                毎週 月曜日
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">●</span>
                第1 月曜日 ＋ 翌 火曜日
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">●</span>
                第3 日曜日 ＋ 翌 月曜日
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg text-accent tracking-widest mb-6 border-b border-accent/30 pb-2">営業時間</h3>
            <ul className="space-y-4 text-text leading-relaxed">
              <li>
                <span className="font-medium block mb-1">通常営業</span>
                8:30 〜 19:00
              </li>
              <li>
                <span className="font-medium block mb-1">ナイター営業</span>
                19:00 〜 21:00<br />
                <span className="text-xs text-subtext">※完全予約制（当日18:30までにご予約ください）</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Calendar Section */}
      <div className="w-full">
        <h3 className="text-lg text-accent tracking-widest mb-8 text-center border-b border-accent/30 pb-2 max-w-3xl mx-auto">カレンダー</h3>
        <Calendar />
      </div>

    </div>
  );
};

export default Holiday;
