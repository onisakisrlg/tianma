import React from 'react';
import { BRANCH_ADDRESS } from '../constants';
import { Icon } from './Icon';
import { ScrollReveal } from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Main Contact Info */}
          <ScrollReveal direction="right">
            <div>
              <h2 className="text-3xl font-extrabold mb-8">お問い合わせ</h2>
              <p className="text-blue-100 mb-8 text-lg">
                業務のご依頼、パートナーシップのご相談など、お気軽にお問い合わせください。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300 font-semibold uppercase tracking-wider">電話番号</p>
                    <p className="text-2xl font-bold">048-212-8392</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300 font-semibold uppercase tracking-wider">メールアドレス</p>
                    <a href="mailto:tenma_corporation@yahoo.co.jp" className="text-xl font-bold hover:text-blue-200 transition-colors break-all">tenma_corporation@yahoo.co.jp</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300 font-semibold uppercase tracking-wider">本社所在地</p>
                    <p className="text-lg">〒332-0025</p>
                    <p className="text-lg">埼玉県川口市原町1-10 大熊ビル 1F</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=埼玉県川口市原町1-10" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-sm text-blue-300 hover:text-white transition-colors"
                    >
                      Googleマップで見る <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Branch/New Factory Info */}
          <ScrollReveal direction="left" delay={200}>
            <div className="bg-white text-slate-800 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Wrench" className="text-blue-600" size={32} />
                <h3 className="text-2xl font-bold text-slate-900">匠馬CARサポートサービス</h3>
              </div>
              <div className="space-y-4">
                 <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                   <p className="text-blue-800 font-semibold mb-2">2025年7月 オープン（支店）</p>
                   <p className="text-sm text-slate-600">
                     最新の設備を整えた自社工場にて、質の高い整備サービスを提供いたします。
                   </p>
                 </div>
                 
                 <dl className="space-y-4 mt-4">
                   <div>
                     <dt className="text-xs text-slate-500 uppercase font-bold">住所</dt>
                     <dd className="text-lg font-medium">{BRANCH_ADDRESS.address}</dd>
                     <dd className="text-sm text-slate-500">〒{BRANCH_ADDRESS.zip}</dd>
                   </div>
                   <div>
                     <dt className="text-xs text-slate-500 uppercase font-bold">TEL / FAX</dt>
                     <dd className="text-lg font-medium">{BRANCH_ADDRESS.phone}</dd>
                   </div>
                 </dl>

                 <div className="pt-6 mt-6 border-t border-slate-100">
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${BRANCH_ADDRESS.address}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      <Icon name="MapPin" size={18} />
                      工場の場所を確認する
                    </a>
                 </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;