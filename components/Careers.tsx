import React from 'react';
import { Icon } from './Icon';
import { ScrollReveal } from './ScrollReveal';

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Recruitment</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">採用情報</h2>
            <div className="mt-4 w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 text-slate-100 opacity-60">
                <Icon name="Briefcase" size={200} />
            </div>

            <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Icon name="Briefcase" className="text-blue-600" size={24} />
                    私たちと一緒に働きませんか？
                </h3>
                
                <div className="space-y-6 text-slate-700 leading-relaxed font-medium">
                    <p>
                      当社では、事業拡大に伴い、各分野において人材を募集しております。<br className="hidden md:block"/>
                      運転業務、オンライン業務、ならびに自動車整備関連業務など、幅広い職種での活躍の機会があります。
                    </p>

                    <p>
                      経験の有無を問わず、意欲のある方、責任感を持って業務に取り組める方を歓迎いたします。
                    </p>
                    <p className="font-bold text-blue-900">
                      詳細につきましては、お気軽にお問い合わせください。
                    </p>
                </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Careers;