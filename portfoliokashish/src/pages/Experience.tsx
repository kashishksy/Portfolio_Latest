import { motion } from "framer-motion";
import { Briefcase, TestTube } from "lucide-react";

interface Role {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  type: "Developer" | "QA";
  location?: string;
}

const roles: Role[] = [
  {
    title: "Full stack Developer",
    company: "Community of Guardians",
    period: "Jun 2025 – Present",
    type: "Developer",
    location: "Toronto, Canada",
    bullets: [
      "Modular social platform UI: Delivered high-performance, accessible interfaces for a new social media product, boosting UX metrics by 15-30%",
      "Pixel-perfect delivery: Partnered with backend and QA to ship responsive, cross-browser UI flows with seamless REST integrations",
      "UX bottleneck removal: Drove in-depth audits that flagged and resolved key performance gaps for the main marketing website",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Community Outreach Canada",
    period: "Jan 2025 – Apr 2025",
    type: "Developer",
    location: "Toronto, Canada (Contractual)",
    bullets: [
      "WCAG-first audits: Ran WCAG 2.1 accessibility reviews on WordPress/Joomla sites and prioritized fixes that lifted engagement by 30%",
      "Optimization initiatives: Packaged UX enhancement plans and partnered with dev teams to lower bounce rates by 20% in three months",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Tata Consultancy Services",
    period: "Jun 2021 – Nov 2023",
    type: "Developer",
    location: "Mumbai, India",
    bullets: [
      "Enterprise UI modernization: Delivered 15+ responsive interfaces built with React and JavaScript, connected to 25+ RESTful APIs, helping the product win Global UX Design Awards for the year 2022",
      "Reusable UI systems: Delivered 3 plug-and-play UI libraries and led framework upgrades, cutting feature delivery time by 25%",
      "Analytics & reliability: Implemented Google Charts features and Power BI dashboards while resolving 50+ defects with 95% SLA adherence",
    ],
  },
  {
    title: "Full-stack Developer Trainee",
    company: "Guvi Geeks Pvt. Ltd.",
    period: "Oct 2020 – Apr 2021",
    type: "Developer",
    location: "Mumbai, India",
    bullets: [
      "Full-stack foundations: Built responsive front-end projects with HTML, CSS, JavaScript, and React while gaining hands-on Node.js, MongoDB, and REST API experience",
      "Agile collaboration: Led group coding challenges and sprint ceremonies that accelerated delivery in an Agile environment",
    ],
  },
  {
    title: "Application Development Analyst",
    company: "Accenture",
    period: "Sep 2017 – Aug 2020",
    type: "QA",
    location: "Mumbai, India",
    bullets: [
      "Quality automation: Authored 200+ automated QA scripts and end-to-end plans, cutting manual testing by 40% and raising coverage by 60%",
      "Risk mitigation: Documented critical defects in large-scale financial systems, improving stability by 30% and mentoring junior QA engineers",
    ],
  },
];

const Experience = () => {
  return (
    <section className="mx-auto max-w-5xl space-y-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Experience & <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Roles</span>
        </h1>
        <p className="mt-2 text-sm text-white/60">Professional journey with measurable impact</p>
      </motion.div>

      {/* Roles List */}
      <div className="space-y-6">
        {roles.map((role, index) => (
          <motion.article
            key={role.title + role.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:shadow-neon"
          >
            {/* Header */}
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    role.type === "Developer"
                      ? "bg-accent/30 text-accent"
                      : "bg-accent2/30 text-accent2"
                  }`}
                >
                  {role.type === "Developer" ? (
                    <Briefcase className="h-5 w-5" />
                  ) : (
                    <TestTube className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent2 transition">
                    {role.title}
                  </h3>
                  <p className="text-sm text-white/70">{role.company}</p>
                  {role.location && (
                    <p className="text-xs text-white/50">{role.location}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  {role.type}
                </span>
                <span className="text-xs text-white/60">{role.period}</span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2">
              {role.bullets.map((bullet, bulletIndex) => (
                <motion.li
                  key={bulletIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1 + bulletIndex * 0.05,
                    duration: 0.4,
                  }}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                  <span className="leading-relaxed">{bullet}</span>
                </motion.li>
              ))}
            </ul>

            {/* Achievement badge for award-related roles */}
            {role.company === "Tata Consultancy Services" && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent2/50 bg-accent2/10 px-3 py-1 text-xs font-semibold text-accent2">
                <span>🏆</span>
                <span>Global UX Design Awards 2022 Winner</span>
              </div>
            )}
          </motion.article>
        ))}
      </div>

      {/* Stats / Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid gap-4 rounded-xl border border-white/10 bg-black/60 p-6 sm:grid-cols-3"
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-accent2">5+</div>
          <div className="text-xs text-white/60 uppercase tracking-wider">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent2">
            {roles.filter((r) => r.type === "Developer").length}
          </div>
          <div className="text-xs text-white/60 uppercase tracking-wider">Developer Roles</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent2">🏆</div>
          <div className="text-xs text-white/60 uppercase tracking-wider">Awards Won</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
