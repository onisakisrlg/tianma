import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants';
import { Icon } from './Icon';
import { ScrollReveal } from './ScrollReveal';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  const openModal = (service: ServiceItem) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const openImageViewer = (imgSrc: string) => {
    setViewingImage(imgSrc);
  };

  const closeImageViewer = () => {
    setViewingImage(null);
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
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
              <div 
                className="h-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group overflow-hidden cursor-pointer"
                onClick={() => openModal(service)}
              >
                <div className="p-10 flex justify-center items-center bg-gradient-to-br from-blue-50 to-slate-50 group-hover:from-blue-100 group-hover:to-blue-50 transition-colors duration-300">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-900 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300 transform">
                     <Icon name={service.iconName} size={40} />
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm flex-1 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-8 pt-4 border-t border-slate-50 w-full">
                    <span 
                      className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all gap-1 hover:underline"
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

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={closeModal}
          ></div>
          
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col relative z-10 animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                  <Icon name={selectedService.iconName} size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{selectedService.title}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                aria-label="閉じる"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="space-y-8">
                {selectedService.details.map((section, i) => (
                  <div key={i} className="animate-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                    {/* Section Heading */}
                    {section.heading && (
                      <h4 className="text-lg font-bold text-blue-900 border-l-4 border-blue-500 pl-3 mb-3 flex items-center">
                        {section.heading}
                      </h4>
                    )}
                    
                    {/* Main Paragraph Text */}
                    {section.text && (
                      <p className="text-slate-600 leading-relaxed mb-4 text-base">
                        {section.text}
                      </p>
                    )}

                    {/* Bullet Points */}
                    {section.points && section.points.length > 0 && (
                      <ul className="bg-slate-50 rounded-lg p-5 space-y-3 border border-slate-100 mb-4">
                        {section.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0 text-blue-500">
                              <Icon name="Check" size={18} />
                            </div>
                            <span className="text-slate-700 font-medium text-sm md:text-base">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Image Grid */}
                    {section.images && section.images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6">
                        {section.images.map((imgSrc, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            className="relative aspect-video overflow-hidden rounded-lg bg-slate-200 shadow-sm group cursor-zoom-in"
                            onClick={(e) => {
                              e.stopPropagation();
                              openImageViewer(imgSrc);
                            }}
                          >
                            <img 
                              src={imgSrc} 
                              alt={`Service detail ${imgIndex + 1}`} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            {/* Simple overlay effect */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white rounded-full p-2">
                                    <Icon name="ExternalLink" size={20} />
                                </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end sticky bottom-0 z-20">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox / Image Viewer */}
      {viewingImage && (
        <div 
            className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={closeImageViewer}
        >
            <button 
                onClick={closeImageViewer}
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            >
                <Icon name="X" size={32} />
            </button>
            
            <img 
                src={viewingImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}
    </section>
  );
};

export default Services;