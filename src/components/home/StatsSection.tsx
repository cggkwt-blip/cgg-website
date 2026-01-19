import { useEffect, useRef, useState } from "react";
import { Clock, FolderCheck, ShieldCheck, Award } from "lucide-react";

const stats = [
  {
    icon: Clock,
    number: 19,
    suffix: "+",
    label: "Years of Experience",
    description: "Industry leadership since 2007",
  },
  {
    icon: FolderCheck,
    number: 2000,
    suffix: "+",
    label: "Projects Completed",
    description: "Delivered across all sectors",
  },
  {
    icon: ShieldCheck,
    number: 0,
    suffix: "",
    label: "Major Safety Incidents",
    description: "Zero harm commitment",
  },
  {
    icon: Award,
    number: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Excellence in every project",
  },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="stat-number">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="section-padding bg-cgg-blue-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(255,255,255,0.03) 100px, rgba(255,255,255,0.03) 101px)`
        }} />
      </div>
      
      {/* Top Accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cgg-orange via-cgg-red to-cgg-orange" />
      
      <div className="container-cgg relative z-10">
        <div className="text-center mb-16">
          <span className="badge-primary mb-6">Our Track Record</span>
          <h2 className="section-title-light">Proven Performance & Excellence</h2>
          <div className="divider-orange mx-auto mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 text-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cgg-orange/50 transition-all duration-400 group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-cgg-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="icon-box mb-6 mx-auto group-hover:scale-110 transition-transform">
                <stat.icon className="h-7 w-7 text-white" />
              </div>
              
              <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              
              <h3 className="text-xl font-bold text-white mt-3 mb-2">
                {stat.label}
              </h3>
              <p className="text-white/60 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}