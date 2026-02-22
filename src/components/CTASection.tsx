import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="kontakt" className="relative py-40 px-6" ref={containerRef}>
      <motion.div style={{ y: yParallax }} className="max-w-5xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-5xl sm:text-7xl lg:text-[8rem] font-bold tracking-tighter leading-[0.85]">
            <span className="text-gradient-white block">Masz wizję?</span>
            <span className="text-gradient-subtle block">Porozmawiajmy.</span>
          </h2>

          <p className="text-base text-muted-foreground mt-10 max-w-md mx-auto leading-relaxed tracking-wide">
            Bezpłatna konsultacja. Zero zobowiązań.
            <br />
            Tylko konkrety.
          </p>

          <div className="mt-12">
            <a
              href="mailto:hello@nexusstudio.pl"
              className="inline-flex px-10 py-4 rounded-full text-sm font-medium tracking-wider uppercase bg-foreground text-background hover:opacity-80 transition-all duration-500 glow-white"
            >
              Rozpocznij projekt
            </a>
          </div>

          {/* Stats */}
          <div className="mt-24 pt-16 border-t border-border">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { value: "120+", label: "Projektów" },
                { value: "98%", label: "Retencja" },
                { value: "8+", label: "Lat" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-white tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-2 tracking-[0.3em] uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
