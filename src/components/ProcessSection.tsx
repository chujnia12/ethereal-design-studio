import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discovery", desc: "Poznajemy Twój biznes, cele i użytkowników. Definiujemy strategię." },
  { num: "02", title: "Design", desc: "Wireframe'y, prototypy, testy użyteczności. Iterujemy do perfekcji." },
  { num: "03", title: "Development", desc: "Czyste, wydajne kodowanie z CI/CD i code review na każdym kroku." },
  { num: "04", title: "Launch", desc: "Wdrożenie, monitoring, optymalizacja. Nie kończymy na deploy'u." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proces" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-primary tracking-widest uppercase font-medium">Proces</span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-4 text-gradient-light">
            Jak pracujemy
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary gold-glow z-10" />

                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="font-display text-5xl font-bold text-primary/20">{step.num}</span>
                  <h3 className="font-display text-2xl font-bold mt-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
