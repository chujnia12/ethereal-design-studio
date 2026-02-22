import { Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={ref} className="relative h-[120vh] flex items-center justify-center overflow-hidden">
      {/* 3D Background with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-6 text-center -mt-[10vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 rounded-full text-[11px] font-medium tracking-[0.3em] uppercase glass text-muted-foreground">
            Digital Craftmanship
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl sm:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85]"
          >
            <span className="text-gradient-white block">Tworzymy</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl sm:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85]"
          >
            <span className="text-gradient-subtle block">przyszłość</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mt-10 font-light leading-relaxed tracking-wide"
        >
          Strony internetowe, które definiują standardy.
          <br />
          Bez kompromisów.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="#realizacje"
            className="px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase bg-foreground text-background hover:opacity-80 transition-all duration-500"
          >
            Portfolio
          </a>
          <a
            href="#proces"
            className="px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase glass glass-hover text-foreground transition-all duration-500"
          >
            Nasz proces
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
