const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/60 mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-white/50 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Kashish Yadav. All rights reserved.</p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-accent2/80">
          Press Start · Keep Learning · Ship Quality
        </p>
      </div>
    </footer>
  );
};

export default Footer;
