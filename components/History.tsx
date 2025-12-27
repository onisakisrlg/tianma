import React from 'react';
import { HISTORY_DATA } from '../constants';
import { ScrollReveal } from './ScrollReveal';

const History: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">会社沿革</h2>
            <p className="mt-4 text-slate-500">
              2017年の設立から現在までの歩み
            </p>
          </div>
        </ScrollReveal>

        <div className="relative border-l-4 border-blue-200 ml-3 sm:ml-6">
          {HISTORY_DATA.map((item, index) => (
            <div key={index} className="mb-10 ml-6 sm:ml-10 group">
              <ScrollReveal delay={index * 100} direction="right">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-[1.2rem] ring-8 ring-slate-50 group-hover:bg-blue-600 transition-colors mt-1">
                   <div className="w-3 h-3 bg-blue-600 rounded-full group-hover:bg-white transition-colors"></div>
                </span>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <time className="block mb-2 text-sm font-bold leading-none text-blue-600 uppercase">
                    {item.date}
                  </time>
                  <h3 className="flex items-center mb-1 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mb-4 text-base font-normal text-slate-500">
                      {item.description}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;