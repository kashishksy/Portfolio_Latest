import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Send, CheckCircle2, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // TODO: Integrate EmailJS or Resend here
    // Example with EmailJS:
    // try {
    //   await emailjs.send(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     {
    //       from_name: formData.name,
    //       from_email: formData.email,
    //       message: formData.message,
    //     },
    //     "YOUR_PUBLIC_KEY"
    //   );
    //   setStatus("success");
    // } catch (err) {
    //   setStatus("error");
    // }

    // Simulate API call for now
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
    }
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/kashish-yadav-codesitall", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", href: "mailto:kashishksyyadav@gmail.com", color: "hover:text-accent2" },
  ];

  return (
    <section className="mx-auto max-w-4xl space-y-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Get In <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="mt-2 text-sm text-white/60">Let&apos;s build something amazing together</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
        {/* Left: Contact Info & Social */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-lg font-semibold text-white">Contact Information</h2>
            <p className="text-sm leading-relaxed text-white/70 mb-4">
              Whether you&apos;re looking for a developer to join your team, want to collaborate on a project, or just have a question—I&apos;d love to hear from you.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:kashishksyyadav@gmail.com" className="text-accent2 hover:text-accent transition">
                  kashishksyyadav@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{" "}
                <a href="tel:+16476840982" className="text-accent2 hover:text-accent transition">
                  +1-647-684-0982
                </a>
              </p>
              <p>
                <strong className="text-white">Location:</strong> Toronto, Canada
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Social Links
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 rounded-lg border border-white/10 bg-black/60 p-3 text-sm text-white/70 transition hover:border-accent/50 hover:bg-accent/10 ${social.color}`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/70">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/70">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/70">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                placeholder="Tell me about your project or just say hi!"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="w-full rounded-lg bg-gradient-to-r from-accent to-accent2 px-5 py-2.5 text-sm font-semibold text-black shadow-neon transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(139,92,246,0.8)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="h-4 w-4 rounded-full border-2 border-black/20 border-t-black"
                  />
                  Sending...
                </span>
              ) : status === "success" ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Sent!
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </span>
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg border border-accent2/50 bg-accent2/10 p-3 text-xs text-accent2"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Thanks! Your message has entered the queue. 🎮</span>
                  </div>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-xs text-red-400"
                >
                  Something went wrong. Please try again or reach out via email.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
