"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

// Hook for counter animation
const useCounterAnimation = (target: string, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Extract numeric value from target string
            const numericValue = parseFloat(target.replace(/[^0-9.]/g, ""));
            const suffix = target.replace(/[0-9.]/g, "");

            let startTime: number;
            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min(
                (currentTime - startTime) / duration,
                1
              );

              // Easing function for smooth animation
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              const currentValue = numericValue * easeOutCubic;

              setCount(currentValue);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [target, duration, hasAnimated]);

  const formatCount = (value: number) => {
    const suffix = target.replace(/[0-9.]/g, "");
    if (suffix.includes("B")) {
      return `$${Math.round(value)}B+`;
    } else if (suffix.includes("%")) {
      return `${Math.round(value)}%`;
    }
    return `$${Math.round(value)}B+`;
  };

  return { count: formatCount(count), elementRef };
};

interface StatsSectionProps {
  title: string;
  stats: Array<{
    value: string;
    description: string;
  }>;
  backgroundImage?: string;
}

export default function StatsSection({
  title,
  stats,
  backgroundImage = "/Images/nonprofit/nonprofit-Section2_bg.svg",
}: StatsSectionProps) {
  const containerRef = useScrollAnimation({ threshold: 0.2 });

  // Counter animations for each stat
  const stat1Counter = useCounterAnimation(stats[0]?.value || "0", 2200);
  const stat2Counter = useCounterAnimation(stats[1]?.value || "0", 2500);
  const stat3Counter = useCounterAnimation(stats[2]?.value || "0", 2800);

  const counters = [stat1Counter, stat2Counter, stat3Counter];

  return (
    <section
      className="w-full py-12 px-2 md:px-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto flex flex-col items-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center transform transition-all duration-800 delay-200">
          {title}
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              ref={counters[idx].elementRef}
              className="flex-1 flex flex-col items-center text-center px-2 transform transition-all duration-700 ease-out"
              style={{
                animationDelay: `${400 + idx * 200}ms`,
                opacity: 0,
                transform: "translateY(30px) scale(0.9)",
                animation: `fadeInScale 0.8s ease-out ${
                  400 + idx * 200
                }ms forwards`,
              }}
            >
              {/* Animated line */}
              <div
                className="h-2 bg-white rounded-full mb-4 transition-all duration-500 ease-out"
                style={{
                  width: "12px",
                  animation: `expandLine 0.6s ease-out ${
                    600 + idx * 200
                  }ms forwards`,
                }}
              />

              {/* Animated counter */}
              <div className="text-white text-5xl md:text-6xl font-bold mb-2 transition-all duration-300 hover:scale-105 cursor-default">
                {counters[idx].count}
              </div>

              {/* Description with fade-in */}
              <div
                className="text-white text-lg md:text-xl font-normal opacity-80 transition-all duration-500 hover:opacity-100"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.6s ease-out ${
                    800 + idx * 200
                  }ms forwards`,
                }}
              >
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes expandLine {
          0% {
            width: 12px;
          }
          100% {
            width: 48px;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.8;
          }
        }

        /* Hover effects */
        .text-5xl:hover,
        .md\\:text-6xl:hover {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
}
