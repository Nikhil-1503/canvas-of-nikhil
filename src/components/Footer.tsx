import { Instagram, Mail } from "lucide-react";
import { PaintSplatter } from "./PaintDecorations";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/30 py-12 px-6 overflow-hidden">
      <PaintSplatter color="hsl(340 82% 58%)" className="-left-10 -bottom-10" delay={0} size={120} />
      <PaintSplatter color="hsl(210 90% 56%)" className="-right-10 -bottom-10" delay={0} size={100} />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center relative z-10">
        <button onClick={() => scrollTo("#home")} className="font-display text-xl tracking-[0.15em] text-primary">
          NIKHIL SHANBHAG
        </button>

        <div className="flex flex-wrap justify-center gap-6">
          {["Home", "About", "Portfolio", "Services", "Contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(`#${link.toLowerCase()}`)}
              className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://instagram.com/nikhil.1503"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:paint-glow"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="mailto:nikhilshanbhag1503@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:paint-glow"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Color bar */}
        <div className="flex gap-1">
          <div className="h-1 w-4 rounded-full bg-paint-red" />
          <div className="h-1 w-4 rounded-full bg-paint-blue" />
          <div className="h-1 w-4 rounded-full bg-paint-yellow" />
          <div className="h-1 w-4 rounded-full bg-paint-cyan" />
          <div className="h-1 w-4 rounded-full bg-paint-purple" />
        </div>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nikhil Shanbhag. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
