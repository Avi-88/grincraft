'use client'

import React, { useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  direction = 'none', 
  delay = 0,
  className = '' 
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            if (direction === 'up') {
              entry.target.classList.add('animate-fade-in-up');
            } else if (direction === 'down') {
              entry.target.classList.add('animate-fade-in-down');
            } else if (direction === 'left') {
              entry.target.classList.add('animate-fade-in-left');
            } else if (direction === 'right') {
              entry.target.classList.add('animate-fade-in-right');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [direction]);

  return (
    <div 
      ref={ref}
      className={`opacity-0 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
} 