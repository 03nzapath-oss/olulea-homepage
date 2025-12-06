import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { ESTHE_MENU, ESTHE_NOTE } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { HeadSpaCourse } from '../types';

type EstheItemProps = {
  item: NonNullable<HeadSpaCourse['items']>[number];
};

const EstheItem: React.FC<EstheItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
      <div
        className="cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <h5 className="bg-accent/10 text-accent px-3 py-1 text-sm font-medium rounded-sm group-hover:bg-accent/20 transition-colors">
                  {item.name}
                </h5>
                {item.note && (
                  <span className="text-xs text-subtext bg-gray-100 px-2 py-1 rounded">
                    {item.note}
                  </span>
                )}
              </div>
              <div className="text-accent/50 group-hover:text-accent transition-colors">
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            {/* Variations or Single Price */}
            {item.variations ? (
              <div className="ml-4 space-y-2 mt-2">
                {item.variations.map((v, k) => (
                  <div key={k} className="flex justify-between items-baseline border-b border-gray-50 pb-1 last:border-0">
                    <span className="text-sm text-subtext">{v.note}</span>
                    <div className="flex items-baseline gap-3 text-subtext">
                      <span className="text-sm">{v.duration}</span>
                      <span className="text-lg font-medium text-text">{v.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-between items-baseline w-full pl-4 mt-1">
                <div className="flex-1"></div>
                <div className="flex items-baseline gap-3 text-subtext">
                  {item.duration && <span className="text-sm">{item.duration}</span>}
                  {item.price && <span className="text-lg font-medium text-text">{item.price}</span>}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Click to open hint if closed and has description */}
        {!isOpen && item.description && (
          <p className="text-xs text-accent/60 text-right mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            詳細を見る
          </p>
        )}
      </div>

      {isOpen && (
        <div className="bg-secondary/10 p-5 rounded-sm mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {item.processFlow ? (
            <div className="space-y-8">
              {/* Description if exists */}
              {item.description && (
                <p className="text-sm text-subtext leading-loose whitespace-pre-line text-center mb-2">
                  {item.description}
                </p>
              )}

              {item.processFlow.branches.map((branch, branchIndex) => {
                // Construct full sequence for this branch
                const fullSteps = [
                  ...(item.processFlow?.preSteps || []),
                  ...branch.steps,
                  ...(item.processFlow?.postSteps || [])
                ];

                return (
                  <div key={branchIndex} className="mb-8 last:mb-0">
                    <h6 className="text-center text-sm font-medium text-accent mb-6">
                      {branch.name}
                    </h6>
                    <div className="space-y-0">
                      {fullSteps.map((step, i) => (
                        <div key={i} className="relative flex gap-4">
                          {/* Connector Line */}
                          {i !== fullSteps.length - 1 && (
                            <div className="absolute left-[11px] top-7 bottom-[-8px] w-[1px] bg-accent/20"></div>
                          )}

                          {/* Number */}
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-accent/20 text-accent text-xs flex items-center justify-center font-medium mt-0.5 z-10">
                            {i + 1}
                          </div>

                          {/* Text */}
                          <div className="text-sm text-subtext leading-relaxed pb-6 pt-0.5">
                            <span className="font-medium text-text block mb-1">{step.name}</span>
                            {step.description && (
                              <span className="text-xs text-subtext/80 block leading-relaxed">
                                {step.description}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : item.description?.includes('↓') ? (
            <div className="space-y-0">
              {item.description.split('↓').map((step, index, array) => {
                const trimmedStep = step.trim();
                const match = trimmedStep.match(/^(.+?)[（(](.+)[）)]$/);
                const mainText = match ? match[1] : trimmedStep;
                const subText = match ? match[2] : null;

                return (
                  <div key={index} className="relative flex gap-4">
                    {/* Connector Line */}
                    {index !== array.length - 1 && (
                      <div className="absolute left-[11px] top-7 bottom-[-8px] w-[1px] bg-accent/20"></div>
                    )}

                    {/* Number */}
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-accent/20 text-accent text-xs flex items-center justify-center font-medium mt-0.5 z-10">
                      {index + 1}
                    </div>

                    {/* Text */}
                    <div className="text-sm text-subtext leading-relaxed pb-6 pt-0.5">
                      <span className="font-medium text-text block mb-1">{mainText}</span>
                      {subText && (
                        <span className="text-xs text-subtext/80 block leading-relaxed">
                          {subText}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-subtext leading-loose whitespace-pre-line">
              {item.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const Esthe: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl">
      <SectionTitle en="ESTHE" ja="エステ" />

      <div className="space-y-12">
        {ESTHE_MENU.map((course, i) => (
          <div key={i} className="bg-white rounded-sm overflow-hidden shadow-sm border border-gray-100">
            {/* Course Header */}
            <div className="bg-accent/90 text-white px-6 py-3 flex justify-between items-center flex-wrap gap-2">
              <h4 className="text-lg font-medium tracking-wider">{course.name}</h4>
            </div>

            <div className="p-6 md:p-8">
              {/* Features */}
              {course.features && (
                <p className="text-sm text-accent font-medium mb-6">
                  {course.features}
                </p>
              )}

              {/* Description for main course */}
              {course.description && (
                <p className="text-sm text-subtext leading-loose whitespace-pre-line mb-8">
                  {course.description}
                </p>
              )}

              {/* Sub Items */}
              {course.items && (
                <div className="space-y-8">
                  {course.items.map((item, j) => (
                    <EstheItem key={j} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block bg-accent/5 border border-accent/20 p-6 rounded-sm max-w-2xl">
          <p className="text-sm text-subtext leading-loose whitespace-pre-line">
            {ESTHE_NOTE}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Esthe;
