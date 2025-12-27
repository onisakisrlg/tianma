import React from 'react';
import { SERVICES_DATA } from '../constants';
import { Icon } from './Icon';
import { ScrollReveal } from './ScrollReveal';

const Services: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Business</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
              事業内容
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
              お客様のニーズに応えるため、幅広い分野でプロフェッショナルなサービスを提供しています。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="h-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group overflow-hidden">
                <div className="p-10 flex justify-center items-center bg-gradient-to-br from-blue-50 to-slate-50 group-hover:from-blue-100 group-hover:to-blue-50 transition-colors duration-300">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-900 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300 transform">
                     <Icon name={service.iconName} size={40} />
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm flex-1">
                    {service.description}
                  </p>
                  <div className="mt-8 pt-4 border-t border-slate-50 w-full">
                    <span 
                      onClick={handleScrollToContact}
                      className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all gap-1 cursor-pointer hover:underline"
                    >
                      詳細を見る <Icon name="ChevronRight" size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;