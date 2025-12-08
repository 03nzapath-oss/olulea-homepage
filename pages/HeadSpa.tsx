import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { HEADSPA_PRICE, HEADSPA_NOTE } from '../constants';

const HeadSpa: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-3xl">
      <SectionTitle en="HEAD SPA" ja="ヘッドスパ" />

      <div className="text-center mb-12">
        <p className="text-subtext leading-loose">
          頭皮の汚れをすっきり落とし、<br />
          心地よいマッサージで血行を促進。<br />
          9通りのシャンプーとトリートメントから、<br />頭皮と髪の状態に合わせてお選びいただけます。
        </p>
      </div>



      <div className="max-w-4xl mx-auto">


        <div className="space-y-12">
          {HEADSPA_PRICE.map((course, i) => (
            <div key={i} className="bg-white rounded-sm overflow-hidden shadow-sm border border-gray-100">
              {/* Course Header */}
              <div className="bg-accent/90 text-white px-6 py-3 flex justify-between items-center flex-wrap gap-2">
                <h4 className="text-lg font-medium tracking-wider">{course.name}</h4>
                {course.tag && (
                  <span className="text-xs bg-white text-accent px-2 py-1 rounded font-medium">
                    {course.tag}
                  </span>
                )}
              </div>

              <div className="p-6 md:p-8">
                {/* Features */}
                {course.features && (
                  <p className="text-xs text-accent font-medium mb-2">
                    {course.features}
                  </p>
                )}

                {/* Price/Duration for single item course */}
                {!course.items && course.duration && course.price && (
                  <div className="flex justify-end items-baseline gap-3 text-subtext mb-6">
                    <span className="text-sm">{course.duration}</span>
                    <span className="text-xl font-medium text-text">{course.price}</span>
                  </div>
                )}

                {/* Description for single item course (like Perfect Spa) */}
                {course.description && (
                  <p className="text-sm text-subtext leading-loose whitespace-pre-line mb-4">
                    {course.description}
                  </p>
                )}

                {/* Sub Items */}
                {course.items && (
                  <div className="space-y-8 mt-4">
                    {course.items.map((item, j) => (
                      <div key={j} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                          <h5 className="bg-accent/10 text-accent px-3 py-1 text-sm font-medium rounded-sm">
                            {item.name}
                          </h5>
                          <div className="flex items-baseline gap-3 text-subtext">
                            {item.duration && <span className="text-sm">{item.duration}</span>}
                            <span className="text-lg font-medium text-text">{item.price}</span>
                          </div>
                        </div>
                        {item.description && (
                          <p className="text-sm text-subtext leading-relaxed pl-1 whitespace-pre-line">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-accent font-medium bg-accent/10 inline-block px-6 py-3 rounded-full whitespace-pre-line">
            {HEADSPA_NOTE}
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button to="/gallery" subtitle="ギャラリー">GALLERY</Button>
        <p className="text-xs text-subtext mt-4">
          施術のイメージ画像はこちら
        </p>
      </div>
    </div>
  );
};

export default HeadSpa;
