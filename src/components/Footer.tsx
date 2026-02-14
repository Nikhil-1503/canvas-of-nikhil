import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/30 py-12 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
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
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="mailto:nikhilshanbhag.art@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nikhil Shanbhag. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
