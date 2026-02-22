import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="kontakt" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-gradient-light leading-tight">
            Masz wizję?
            <br />
            <span className="text-gradient-gold">My ją zrealizujemy.</span>
          </h2>

          <p className="text-lg text-muted-foreground mt-8 max-w-xl mx-auto leading-relaxed">
            Porozmawiajmy o Twoim projekcie. Bezpłatna konsultacja, zero zobowiązań.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@nexusstudio.pl"
              className="px-10 py-4 rounded-full font-medium text-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 gold-glow"
            >
              Napisz do nas
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { label: "Zrealizowanych projektów", value: "120+" },
                { label: "Zadowolonych klientów", value: "98%" },
                { label: "Lat doświadczenia", value: "8+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-gradient-gold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
