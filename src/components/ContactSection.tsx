import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Instagram, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "", details: "" });
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl" ref={ref}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-body text-sm tracking-[0.25em] text-primary">GET IN TOUCH</p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Contact</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
              maxLength={100}
            />
            <input
              type="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
              maxLength={255}
            />
            <textarea
              placeholder="Your Message *"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="resize-none rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
              maxLength={1000}
            />
            <input
              type="text"
              placeholder="Commission Details (optional)"
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              className="rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
              maxLength={500}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 font-body text-sm font-medium tracking-[0.1em] text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(40_60%_55%_/_0.3)]"
            >
              <Send size={16} />
              SEND MESSAGE
            </button>
          </motion.form>

          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-xs tracking-wider text-muted-foreground">EMAIL</p>
                <p className="font-body text-sm text-foreground">nikhilshanbhag.art@gmail.com</p>
              </div>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5 transition-all group-hover:bg-primary/10">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-xs tracking-wider text-muted-foreground">INSTAGRAM</p>
                <p className="font-body text-sm text-foreground group-hover:text-primary transition-colors">@nikhilshanbhag.art</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
