import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number; // 延迟毫秒数，用于错峰展示
  direction?: 'up' | 'left' | 'right'; // 动画方向
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  width = '100%', 
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 当元素进入视口 10% 时触发
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          // 触发一次后取消观察，避免反复闪烁
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // 稍微提前一点触发
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  const getTransformStyle = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    
    switch (direction) {
      case 'left': return '-translate-x-10 opacity-0';
      case 'right': return 'translate-x-10 opacity-0';
      case 'up': 
      default: return 'translate-y-10 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{ width }}
      className={`transition-all duration-1000 ease-out transform ${getTransformStyle()}`}
    >
      {children}
    </div>
  );
};