import { Link, NavLink, useLocation } from "react-router-dom";
import { Gamepad2, Mail } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent2 shadow-neon transition-transform group-hover:scale-110">
            <Gamepad2 className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-[0.18em] text-accent2 uppercase">
              Kashish Yadav
            </div>
            <p className="text-xs text-white/60">
              Frontend-Focused Full-Stack · QA
            </p>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "relative pb-1 transition",
                  isActive
                    ? "text-accent2"
                    : "hover:text-accent2 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]",
                ].join(" ")
              }
            >
              {item.label}
              {location.pathname === item.to && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent2" />
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/20 px-4 py-1.5 text-xs font-medium text-accent2 shadow-[0_0_14px_rgba(139,92,246,0.6)] transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent/30"
        >
          <Mail className="h-4 w-4" />
          <span className="hidden sm:inline">Contact</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
