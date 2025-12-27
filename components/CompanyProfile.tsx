import React from 'react';
import { COMPANY_PROFILE } from '../constants';
import { Icon } from './Icon';
import { ScrollReveal } from './ScrollReveal';

const CompanyProfile: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">会社概要</h2>
            <div className="mt-4 w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden">
            <dl>
              {COMPANY_PROFILE.map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
                >
                  <dt className="text-sm font-bold text-slate-500 flex items-center">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
                    {Array.isArray(item.value) ? (
                      <div className="flex flex-col gap-1">
                        {item.value.map((line, i) => (
                          <span key={i}>{line}</span>
                        ))}
                      </div>
                    ) : (
                      item.label === 'URL' ? (
                        <a href={item.value as string} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                          {item.value} <Icon name="ExternalLink" size={14} />
                        </a>
                      ) : (
                        item.value
                      )
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CompanyProfile;