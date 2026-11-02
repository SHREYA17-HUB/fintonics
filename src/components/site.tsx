import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/fintonics-logo.jpeg.asset.json";

export const CIN = "U85500KA2024PTC188634";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "CA Foundation" },
  { to: "/aboutfintech", label: "Fintech" },
  { to: "/landingpage-copy1", label: "US CMA" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="bg-brand py-1.5 text-center text-[11px] font-semibold tracking-[0.2em] text-primary-foreground">
        EMPOWERING FUTURE IN FINANCE AND TECHNOLOGY
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Fintonics home">
          <img src={logo.url} alt="Fintonics logo" className="h-14 w-14 object-cover" style={{ objectPosition: "50% 45%" }} />
          <span className="font-display text-xl font-bold tracking-[0.18em] text-primary">FINTONICS</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-accent text-royal" }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-navy/80 transition-colors hover:bg-accent hover:text-royal"
            >
              {n.label}
            </Link>
          ))}
          <a href="#contact" className="ml-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
            Contact
          </a>
        </nav>
        <button className="rounded-lg border px-3 py-2 text-sm font-semibold md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="border-t bg-background px-5 pb-4 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b py-3 font-semibold text-navy">
              {n.label}
            </Link>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-brand py-3 text-center font-semibold text-primary-foreground">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

const socials = [
  { href: "https://www.facebook.com/profile.php?id=61559135084335", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com/fintonicsai/", label: "Instagram", Icon: Instagram },
  { href: "https://twitter.com/fintonics/status/1789197551511486530", label: "Twitter", Icon: Twitter },
  { href: "https://www.youtube.com/@Fintonics", label: "Youtube", Icon: Youtube },
];

export function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy text-primary-foreground">
      <div className="absolute inset-x-0 top-0 h-1 bg-brand" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold">Connect</h4>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Go to ${label} page`}
                title={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground/90 transition-colors hover:border-cyan hover:bg-primary-foreground/10 hover:text-cyan"
              >
                <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-primary-foreground/70">Follow Us</p>
          <div className="mt-4 space-y-1 text-sm">
            <a className="block hover:text-cyan" href="mailto:sandeep@fintonics.com">sandeep@fintonics.com</a>
            <a className="block hover:text-cyan" href="mailto:info@fintonics.com">info@fintonics.com</a>
            <a className="block font-bold hover:text-cyan" href="tel:+919035651622">+91 9035651622</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Subscribe for regular updates</h4>
          {done ? (
            <p className="mt-4 rounded-xl bg-primary-foreground/10 p-4 text-sm">Thank you for subscribing.</p>
          ) : (
            <form className="mt-4 flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <label htmlFor="sub-email" className="text-sm text-primary-foreground/70">Email ID</label>
              <input id="sub-email" type="email" required placeholder="you@example.com" className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm outline-none placeholder:text-primary-foreground/40 focus:border-cyan" />
              <button className="rounded-xl bg-brand px-4 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5">Submit</button>
            </form>
          )}
        </div>
        <div>
          <h4 className="text-lg font-semibold">Grievance Contact</h4>
          <div className="mt-4 space-y-1 text-sm text-primary-foreground/85">
            <p className="font-semibold">Sandeep G</p>
            <a className="block hover:text-cyan" href="mailto:sandeep@fintonics.com">sandeep@fintonics.com</a>
            <a className="block hover:text-cyan" href="tel:+919035651622">+91 9035651622</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Fintonics Services Private Limited</h4>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85"># 20, Near GKW Layout, Shambavi Nagar, Bangalore North, Karnataka, PIN- 560058</p>
          <p className="mt-3 text-sm font-bold">CIN : {CIN}</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-sm font-semibold text-primary-foreground/80">
          AGM Meeting and Annual Filling done for 2025. Next AGM Meeting is on Sept 2026.
        </p>
      </div>
    </footer>
  );
}

/* ---------- Course detail building blocks ---------- */
export type Item = string | { t: string; b?: string; c?: Item[] };

export function List({ items, ordered = false, depth = 0 }: { items: Item[]; ordered?: boolean; depth?: number }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={depth === 0 ? "space-y-3" : "mt-2 space-y-1.5 border-l border-border pl-4"}>
      {items.map((it, i) => {
        const o = typeof it === "string" ? { t: it } : it;
        return (
          <li key={i} className="flex gap-3 text-muted-foreground">
            {depth === 0 ? (
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-primary-foreground">
                {ordered ? i + 1 : "✓"}
              </span>
            ) : (
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
            )}
            <div className="min-w-0">
              <span className={o.b !== undefined || o.c ? "font-semibold text-navy" : ""}>{o.t}</span>
              {o.b && <span> {o.b}</span>}
              {o.c && <List items={o.c} depth={depth + 1} />}
            </div>
          </li>
        );
      })}
    </Tag>
  );
}

export function PageHero({ eyebrow, title, children, image }: { eyebrow: string; title: ReactNode; children: ReactNode; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-soft bg-hero">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="inline-flex rounded-full border border-primary/20 bg-background px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-navy md:text-5xl">{title}</h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">{children}</div>
        </Reveal>
        {image && (
          <Reveal delay={150}>
            <div className="float-slow group overflow-hidden rounded-3xl bg-background p-3 shadow-glow">
              <img src={image} alt="" className="w-full rounded-2xl object-contain transition-transform duration-700 group-hover:scale-[1.04]" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Block({ title, children, soft = false }: { title: string; children: ReactNode; soft?: boolean }) {
  return (
    <section className={soft ? "bg-soft" : ""}>
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            <span className="mr-3 inline-block h-6 w-1.5 rounded-full bg-brand align-middle" />
            {title}
          </h2>
          <div className="mt-8">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border bg-card p-6 shadow-card ${className}`}>{children}</div>;
}
