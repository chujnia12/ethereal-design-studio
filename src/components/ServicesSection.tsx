import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Globe, Layers, Shield } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Rozwój Web",
    desc: "React, Next.js, TypeScript – budujemy skalowalne aplikacje z najlepszymi technologiami.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Projektujemy interfejsy, które zachwycają estetyką i intuicyjnością.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optymalizacja do perfekcji. Core Web Vitals na zielono, zawsze.",
  },
  {
    icon: Globe,
    title: "SEO & Analytics",
    desc: "Widoczność w wyszukiwarkach i dane, które napędzają decyzje biznesowe.",
  },
  {
    icon: Layers,
    title: "Systemy Design",
    desc: "Spójne systemy komponentów, które skalują się z Twoim produktem.",
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    desc: "Audyty, OWASP, GDPR – bezpieczeństwo wbudowane od pierwszego dnia.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="usługi" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-primary tracking-widest uppercase font-medium">Usługi</span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-4 text-gradient-light">
            Czym się zajmujemy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 rounded-2xl glass-surface hover:bg-secondary/50 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
