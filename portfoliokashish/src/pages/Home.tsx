import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 py-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      {/* Left: text */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs text-accent2"
        >
          <Sparkles className="h-3 w-3" />
          <span>5+ Years Experience · Frontend-focused Full-Stack · Accessibility Expert</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
         Carefully built interfaces, {" "}
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
           crafted for real users.
          </span>
         
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-xl text-sm text-white/70 sm:text-base"
        >
          Full-stack developer specializing in high-quality React interfaces, accessibility, and performance. I build scalable, pixel-perfect UI systems and modernize enterprise applications with a focus on user experience and reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-2 text-sm font-semibold text-black shadow-neon transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(139,92,246,0.8)]"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-accent2 hover:text-accent transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Right: "radar" / HUD card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="relative rounded-2xl border border-white/10 bg-black/60 p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)]"
      >
        <div className="mb-4 flex items-center justify-between text-xs text-white/60">
          <span className="tracking-[0.2em] uppercase">Status: Online</span>
          <span className="text-accent2/80">v1.0 · Portfolio</span>
        </div>
        <div className="aspect-square rounded-xl border border-accent/40 bg-gradient-to-br from-accent/10 via-bg to-accent2/5 p-4">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-lg border border-white/10" />
            <div className="absolute inset-6 rounded-full border border-accent/40" />
            <motion.div
              className="absolute inset-0 rounded-full border border-accent2/40"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent2 shadow-[0_0_18px_rgba(34,211,238,1)]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] text-white/60">
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
              Stack
            </p>
            <p>React · TS · Tailwind · Framer Motion</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
              Focus
            </p>
            <p>UI polish · Accessibility · QA quality</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
              Mode
            </p>
            <p>Learning · Shipping · Iterating</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
