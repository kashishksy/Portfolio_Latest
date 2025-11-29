import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  role: string;
  blurb: string;
  tech: string[];
  link?: string;
  repo?: string;
  tag: string;
  image?: string;
  videoId?: string;
}

const projects: Project[] = [
  {
    title: "Social Platform UI - Community of Guardians",
    role: "Frontend Developer",
    blurb: "Delivered high-performance, accessible interfaces for a new social media product, boosting UX metrics by 15-30%. Built responsive, cross-browser UI flows with seamless REST integrations.",
    tech: ["React", "TypeScript", "JavaScript", "CSS3", "REST APIs"],
    link: "#",
    repo: "#",
    tag: "Current Work",
  },
  {
    title: "Enterprise UI Modernization",
    role: "Frontend Developer @ TCS",
    blurb: "Delivered 15+ responsive interfaces built with React and JavaScript, connected to 25+ RESTful APIs. This work helped the product win Global UX Design Awards for 2022.",
    tech: ["React", "JavaScript", "Redux", "REST APIs", "Power BI"],
    link: "#",
    repo: "#",
    tag: "Award Winner",
    videoId: "vcrcgDxHI08",
  },
  {
    title: "Reusable UI Component Library",
    role: "Frontend Developer @ TCS",
    blurb: "Built 3 plug-and-play UI libraries and led framework upgrades, cutting feature delivery time by 25%. Implemented Google Charts features and Power BI dashboards for analytics.",
    tech: ["React", "JavaScript", "TypeScript", "SASS", "Google Charts"],
    link: "#",
    repo: "#",
    tag: "Framework",
  },
  {
    title: "WCAG 2.1 Accessibility Audits",
    role: "Frontend Developer @ Community Outreach Canada",
    blurb: "Ran WCAG 2.1 accessibility reviews on WordPress/Joomla sites and prioritized fixes that lifted engagement by 30%. Packaged UX enhancement plans that lowered bounce rates by 20%.",
    tech: ["WordPress", "Joomla", "WCAG 2.1", "AODA Compliance", "HTML5"],
    link: "#",
    repo: "#",
    tag: "Accessibility",
  },
  {
    title: "Full-Stack Training Projects",
    role: "Full-Stack Developer Trainee @ Guvi Geeks",
    blurb: "Built responsive front-end projects with HTML, CSS, JavaScript, and React. Gained hands-on experience with Node.js, MongoDB, and REST API integration in an Agile environment.",
    tech: ["React", "Node.js", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    link: "#",
    repo: "#",
    tag: "Learning",
  },
];

const Projects = () => {
  return (
    <section className="mx-auto max-w-6xl space-y-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          My <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="mt-2 text-sm text-white/60">A collection of my work and experiments</p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all hover:border-accent/50 hover:shadow-neon"
          >
            {/* Video/Image display area */}
            <div className="relative h-48 w-full bg-gradient-to-br from-accent/20 via-accent2/10 to-bg overflow-hidden">
              {project.videoId ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${project.videoId}?modestbranding=1&rel=0`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Code2 className="h-16 w-16 text-accent2" />
                </div>
              )}
              {/* Tag */}
              <div className="absolute right-3 top-3 rounded-full border border-accent2/50 bg-black/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent2 backdrop-blur-sm z-10">
                {project.tag}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-accent2 transition">
                  {project.title}
                </h3>
                <p className="text-xs text-white/60 mt-0.5">{project.role}</p>
              </div>

              <p className="text-sm leading-relaxed text-white/70 line-clamp-3">
                {project.blurb}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent2 hover:text-accent transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm text-white/60 mb-4">
          Want to see more? <Link to="/contact" className="text-accent2 hover:text-accent transition">Get in touch</Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Projects;
