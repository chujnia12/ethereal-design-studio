import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Meridian Finance",
    category: "Fintech • Aplikacja SaaS",
    description: "Platforma do zarządzania inwestycjami z real-time dashboardem i AI-powered insights.",
    gradient: "from-amber-900/40 to-orange-900/20",
  },
  {
    title: "Verdant Health",
    category: "Healthcare • E-commerce",
    description: "Sklep z suplementami z personalizowanymi rekomendacjami i subskrypcjami.",
    gradient: "from-emerald-900/40 to-teal-900/20",
  },
  {
    title: "Archon Studios",
    category: "Kreacja • Portfolio",
    description: "Immersyjne portfolio studia architektonicznego z 3D wizualizacjami projektów.",
    gradient: "from-blue-900/40 to-indigo-900/20",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="realizacje" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-primary tracking-widest uppercase font-medium">Portfolio</span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-4 text-gradient-light">
            Wybrane realizacje
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} border border-border p-10 sm:p-14 hover:border-primary/30 transition-all duration-700 cursor-pointer`}
            >
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs text-primary tracking-widest uppercase font-medium">
                  {project.category}
                </span>
                <h3 className="font-display text-3xl sm:text-5xl font-bold mt-3 mb-4 text-foreground group-hover:text-gradient-gold transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary font-medium">
                  <span>Zobacz case study</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
