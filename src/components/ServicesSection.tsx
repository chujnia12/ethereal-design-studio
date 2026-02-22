import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Globe, Layers, Shield } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Development",
    desc: "React, Next.js, TypeScript. Skalowalne aplikacje z clean architecture.",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Interfejsy, które zachwycają. Figma, prototypy, testy użyteczności.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Core Web Vitals na zielono. Każda milisekunda ma znaczenie.",
  },
  {
    icon: Globe,
    title: "SEO",
    desc: "Widoczność w wyszukiwarkach. Strategie, które przynoszą ruch.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Spójne systemy komponentów dla skalowalnych produktów.",
  },
  {
    icon: Shield,
    title: "Security",
    desc: "Audyty bezpieczeństwa, OWASP, GDPR. Od pierwszego dnia.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="usługi" className="relative py-40 px-6 noise" ref={containerRef}>
      <motion.div style={{ y: yParallax }} ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-24"
        >
          <span className="text-[11px] text-muted-foreground tracking-[0.4em] uppercase font-medium block mb-4">
            Co robimy
          </span>
          <h2 className="font-display text-5xl sm:text-7xl font-bold tracking-tighter text-gradient-white">
            Usługi
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative p-10 rounded-2xl glass glass-hover transition-all duration-700 cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 glow-sm" />
              
              <div className="relative z-10">
                <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-500 mb-8" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold mb-3 text-foreground tracking-tight">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
