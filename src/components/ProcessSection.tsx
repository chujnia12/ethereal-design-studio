import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discovery", desc: "Zrozumienie biznesu, celów i użytkowników. Audyt, strategia, plan." },
  { num: "02", title: "Design", desc: "Wireframe'y, prototypy high-fidelity, testy z użytkownikami. Iteracja." },
  { num: "03", title: "Build", desc: "Clean code, CI/CD, code review. Pixel-perfect implementacja." },
  { num: "04", title: "Launch & Scale", desc: "Wdrożenie, monitoring, A/B testy. Ciągła optymalizacja." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="proces" className="relative py-40 px-6 noise" ref={containerRef}>
      <motion.div style={{ y: yParallax }} className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-24"
        >
          <span className="text-[11px] text-muted-foreground tracking-[0.4em] uppercase font-medium block mb-4">
            Proces
          </span>
          <h2 className="font-display text-5xl sm:text-7xl font-bold tracking-tighter text-gradient-white">
            Jak pracujemy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative p-10 sm:p-12 rounded-2xl glass glass-hover transition-all duration-700"
            >
              <span className="font-display text-7xl font-bold text-foreground/[0.03] absolute top-6 right-8 select-none">
                {step.num}
              </span>
              <div className="relative z-10">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[11px] text-muted-foreground tracking-[0.3em] font-medium">{step.num}</span>
                  <div className="h-px flex-1 bg-border group-hover:bg-foreground/20 transition-colors duration-700" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground tracking-tight mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
