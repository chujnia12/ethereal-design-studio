import { Suspense } from "react";
import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase glass-surface text-muted-foreground">
            Digital Craftmanship
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
        >
          <span className="text-gradient-light">Tworzymy</span>
          <br />
          <span className="text-gradient-gold">doświadczenia</span>
          <br />
          <span className="text-gradient-light">cyfrowe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Łączymy wizjonerski design z najnowszą technologią.
          Każdy piksel ma znaczenie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#realizacje"
            className="px-8 py-3.5 rounded-full font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 gold-glow"
          >
            Zobacz realizacje
          </a>
          <a
            href="#proces"
            className="px-8 py-3.5 rounded-full font-medium glass-surface text-foreground hover:bg-secondary transition-all duration-300"
          >
            Poznaj nasz proces
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
