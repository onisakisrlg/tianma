import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-bold tracking-wider">株式会社 天馬</h2>
          <p className="mt-1 text-sm">物流・自動車・広告のトータルパートナー</p>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Tenma Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;