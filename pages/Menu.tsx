import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import Button from '../components/Button';

const Menu: React.FC = () => {
  // メニューアイテムを再帰的にレンダリングする関数
  const renderMenuItem = (item: MenuItem, depth: number = 0): React.ReactNode => {
    // サブカテゴリの場合
    if (item.subcategory && item.items) {
      return (
        <div key={item.subcategory} className="mb-6">
          <h5 className="text-xs text-accent/80 mb-3 font-medium">
            {item.subcategory}
          </h5>
          <ul className="space-y-2 ml-4">
            {item.items.map((subItem, i) => (
              <li
                key={i}
                className={`flex justify-between items-baseline group ${subItem.name === '高校生' ? 'mt-6' : ''
                  }`}
              >
                <span className="text-text text-sm tracking-wide group-hover:text-accent transition-colors">
                  {subItem.name}
                </span>
                <span className="text-sm text-subtext shrink-0 ml-4">
                  {subItem.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // メインアイテム（カット、カラー、パーマなど）でネストされたアイテムがある場合
    if (item.name && item.items) {
      return (
        <div key={item.name} className="mb-10">
          <h4 className="text-base md:text-lg text-text font-bold mb-4 pb-2 border-b border-secondary">
            {item.name}
          </h4>
          <div className="space-y-4">
            {item.items.map((subItem, i) => renderMenuItem(subItem, depth + 1))}
          </div>
        </div>
      );
    }

    // シンプルなアイテム（価格のみ）
    return (
      <li key={item.name} className="flex justify-between items-baseline group">
        <span className="text-text font-medium tracking-wide group-hover:text-accent transition-colors">
          {item.name}
        </span>
        <span className="text-sm text-subtext shrink-0 ml-4">
          {item.price}
        </span>
      </li>
    );
  };

  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-3xl">
      <SectionTitle en="MENU" ja="メニュー" />

      <div className="space-y-16">
        {MENU_ITEMS.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-lg md:text-xl text-accent tracking-widest border-b border-accent/30 pb-2 mb-8">
              {category.category}
            </h3>

            {/* Basicカテゴリは階層構造、Relaxationはシンプルなリスト */}
            {category.category === "Basic" ? (
              <div className="space-y-8">
                {category.items.map((item, i) => renderMenuItem(item))}
              </div>
            ) : (
              <ul className="space-y-6">
                {category.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-baseline group">
                    <span className="text-text font-medium tracking-wide group-hover:text-accent transition-colors">
                      {item.name}
                    </span>
                    <span className="text-sm text-subtext shrink-0 ml-4">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 bg-secondary/30 rounded text-center">
        <p className="text-sm text-subtext mb-4">
          詳しいリラクゼーションメニューはこちら
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button to="/headspa" subtitle="ヘッドスパ">HEAD SPA</Button>
          <Button to="/esthe" subtitle="エステ">ESTHE</Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
