import React from 'react';
import { Icon } from './Icon';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-blue-900 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Business Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900/60 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          <span className="block">物流・自動車・広告の力で</span>
          <span className="block text-blue-300 mt-2">未来を駆け抜ける</span>
        </h1>
        <p className="mt-6 text-xl text-blue-100 max-w-3xl">
          株式会社天馬は、運送事業から自動車整備、広告工事、Eコマースまで、<br className="hidden sm:block"/>
          多角的な事業展開で社会のインフラと人々の生活を支えます。
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
          <a
            href="#services"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-900 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all"
          >
            事業案内を見る
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-800 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all"
          >
            お問い合わせ
          </a>
        </div>
      </div>
      
      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;