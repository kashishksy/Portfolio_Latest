import { motion } from "framer-motion";
import { Award, Zap, Code2, TestTube, Palette } from "lucide-react";
import profilePhoto from "../assets/profile-photo.jpeg";

const skills = [
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "SASS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Jest", category: "QA" },
  { name: "React Testing Library", category: "QA" },
  { name: "Selenium", category: "QA" },
  { name: "Cucumber", category: "QA" },
  { name: "Figma", category: "Design" },
  { name: "WCAG 2.1", category: "Design" },
  { name: "Git", category: "Tools" },
  { name: "Azure DevOps", category: "Tools" },
  { name: "Microsoft Azure", category: "Tools" },
  { name: "Power BI", category: "Tools" },
];

const timeline = [
{
  year: "2025",
  title: "Full stack Developer @ Community of Guardians",
  description: "Building accessible social platform UI, boosting UX metrics by 15-30%",
},
{ 
  year: "2025",
  title: "Front-end Developer @ Community Outreach Canada",
  description: "WCAG 2.1 accessibility audits and UX optimization, lifting engagement by 30%",
},
{
    year: "2025",
    title: "Post Graduate Certificate",
    description: "Mobile Application Development, Centennial College, Toronto",
  },
  {
    year: "2023",
    title: "Award-Winning Developer",
    description: "Global UX Design Awards 2022 for enterprise UI work at TCS",
  },
  {
    year: "2021",
    title: "Frontend Developer",
    description: "Joined Tata Consultancy Services, building 15+ React interfaces",
  },
  {
    year: "2020",
    title: "Full-Stack Training",
    description: "Full-stack developer trainee at Guvi Geeks, Mumbai",
  },
  {
    year: "2017",
    title: "QA Engineer",
    description: "Started career at Accenture with automated testing expertise",
  },
];

const About = () => {
  return (
    <section className="mx-auto max-w-4xl space-y-12 py-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Me</span>
        </h1>
        <p className="mt-2 text-sm text-white/60">My story, skills, and journey</p>
      </motion.div>

      {/* Photo and Story Section */}
      <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-full max-w-[280px] lg:max-w-[320px] aspect-[3/4]">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-accent2 opacity-20 blur-xl"></div>
            <div className="relative h-full w-full rounded-2xl border border-white/10 bg-black/60 p-2 backdrop-blur-sm overflow-hidden">
              <img
                src={profilePhoto}
                alt="Kashish Yadav"
                className="h-full w-full rounded-xl object-cover shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              />
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="space-y-4 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm"
        >
        <p className="leading-relaxed text-white/80">
          I&apos;m a <strong className="text-accent2">full-stack developer</strong> who started out in quality assurance — a beginning that taught me to think in edge cases, user paths, and real-world reliability. Working in the financial sector early in my career, I built automated test suites for some of the world&apos;s most established banking and asset-management organizations. That foundation still shapes how I build today: with care, clarity, and an obsession for user experience.
        </p>
        <p className="leading-relaxed text-white/80">
          I later moved into large-scale public-sector work in Europe, helping modernize digital platforms used by millions. At TCS, I engineered accessible, responsive interfaces, integrated complex REST APIs, and contributed to award-winning UX initiatives.
        </p>
        <p className="leading-relaxed text-white/80">
          Now, I&apos;m part of a mission-driven team building a new kind of social platform — one where people can showcase real-world action toward global sustainability goals. It&apos;s a space where engineering meets impact, and where I get to bring thoughtful, user-centered design to life.
        </p>
        <p className="leading-relaxed text-white/80">
          In every role, my focus stays the same: build interfaces that feel intuitive, perform beautifully, and genuinely make someone&apos;s day easier.
        </p>
        </motion.div>
      </div>

      {/* Superpower Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative overflow-hidden rounded-xl border border-accent/50 bg-gradient-to-br from-accent/20 to-accent2/20 p-6 shadow-neon"
      >
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 opacity-20">
          <Zap className="h-24 w-24 text-accent2" />
        </div>
        <div className="relative flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/30">
            <Zap className="h-6 w-6 text-accent2" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-accent2">My Superpower</h2>
            <p className="mt-1 text-sm text-white/80">
              <strong className="text-white">Applied learner:</strong> I don&apos;t just learn technologies—I immediately apply them to real projects. This means I can quickly adapt to new stacks, frameworks, and challenges, turning knowledge into working solutions faster than most.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Award Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="rounded-xl border border-accent2/50 bg-black/60 p-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent2/20">
            <Award className="h-5 w-5 text-accent2" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Awards & Recognition</h3>
            <p className="text-sm text-white/70 mb-2">
              <strong>Global UX Design Awards 2022</strong> — Recognized for excellence in enterprise UI modernization at Tata Consultancy Services, delivering 15+ responsive interfaces that connected to 25+ RESTful APIs.
            </p>
            <p className="text-sm text-white/70 mb-2">
              <strong>Samsung Electronics Canada Inc. Scholarship</strong> — Recipient at Centennial College for academic excellence in Mobile Application Development.
            </p>
            <p className="text-sm text-white/70">
              <strong>Research Publication</strong> — Co-author of &quot;Vein Detection Using IR for Venipuncture&quot; published in IJTSRD.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => {
            const icon =
              skill.category === "Frontend" ? (
                <Code2 className="h-4 w-4" />
              ) : skill.category === "QA" ? (
                <TestTube className="h-4 w-4" />
              ) : skill.category === "Design" ? (
                <Palette className="h-4 w-4" />
              ) : (
                <Code2 className="h-4 w-4" />
              );
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 p-3 text-sm text-white/80 transition hover:border-accent/50 hover:bg-accent/10"
              >
                {icon}
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Mini Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="mb-6 text-2xl font-semibold">Journey</h2>
        <div className="relative space-y-6 pl-6">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-0 h-full w-0.5 bg-gradient-to-b from-accent via-accent2 to-transparent" />
          
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[23px] top-1 h-3 w-3 rounded-full border-2 border-bg bg-accent2 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              
              <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs font-semibold text-accent2">{item.year}</span>
                  <span className="text-xs text-white/40">·</span>
                  <span className="text-sm font-medium text-white">{item.title}</span>
                </div>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
