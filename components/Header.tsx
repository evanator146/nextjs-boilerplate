"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Demo / placeholder notice */}
      <div
        className={`overflow-hidden bg-forest-950 text-center text-[0.72rem] font-medium tracking-wide text-lime-200/90 transition-all duration-500 ease-out-expo ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <p className="container-x py-2">
          <span className="mr-2 rounded-full bg-lime-300/15 px-2 py-0.5 text-[0.65rem] font-bold tracking-widest text-lime-300 uppercase">Demo</span>
          <span className="sm:hidden">Fictional business · placeholder content</span>
          <span className="hidden sm:inline">Template website — Myakka Green is a fictional business. All names, reviews &amp; contact details are placeholders.</span>
        </p>
      </div>

      <div
        className={`transition-all duration-500 ease-out-expo ${
          solid ? "border-b border-forest-900/5 bg-white/80 shadow-[0_10px_30px_-20px_rgb(7_26_16/0.35)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav aria-label="Main" className="container-x flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" aria-label="Myakka Green home" className="shrink-0 rounded-2xl">
            <Logo light={!solid} />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      solid
                        ? active
                          ? "text-forest-900"
                          : "text-ink/65 hover:text-forest-900"
                        : active
                          ? "text-white"
                          : "text-white/75 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full transition-transform duration-500 ease-out-expo ${
                        solid ? "bg-moss-500" : "bg-lime-300"
                      } ${active ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors md:flex ${
                solid ? "text-forest-900 hover:text-moss-600" : "text-white hover:text-lime-300"
              }`}
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone}
            </a>
            <Link href="/contact" className="btn btn-primary hidden !py-2.5 text-sm sm:inline-flex">
              Free Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`relative grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
                solid ? "bg-forest-900 text-white" : "bg-white/15 text-white backdrop-blur-md"
              }`}
            >
              <span className="relative block h-4 w-5">
                <span className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "top-[7px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-[14px] h-0.5 rounded bg-current transition-all duration-300 ${open ? "top-[7px] w-5 -rotate-45" : "w-3"}`} />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] origin-top bg-white/95 backdrop-blur-xl transition-all duration-500 ease-out-expo lg:hidden ${
          open ? "visible opacity-100" : "invisible -translate-y-3 opacity-0"
        } ${scrolled ? "" : "top-[6.75rem]"}`}
        aria-hidden={!open}
      >
        <div className="container-x flex h-full flex-col overflow-y-auto pb-8 pt-6">
          <ul className="space-y-1">
            {nav.map((item, i) => {
              const active = isActive(item.href);
              return (
                <li
                  key={item.href}
                  className="transition-all duration-500 ease-out-expo"
                  style={{
                    transitionDelay: open ? `${80 + i * 55}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(14px)",
                  }}
                >
                  <Link
                    href={item.href}
                    tabIndex={open ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-2xl px-4 py-4 font-display text-3xl transition-colors ${
                      active ? "bg-lime-200/60 text-forest-900" : "text-forest-900/80 hover:bg-cream"
                    }`}
                  >
                    {item.label}
                    <Icon name="arrow" className={`h-5 w-5 ${active ? "text-moss-600" : "text-forest-900/30"}`} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className="mt-auto space-y-3 pt-8 transition-all duration-500"
            style={{ transitionDelay: open ? "380ms" : "0ms", opacity: open ? 1 : 0 }}
          >
            <Link href="/contact" tabIndex={open ? 0 : -1} className="btn btn-dark w-full">
              Get a Free Quote <Icon name="arrow" className="btn-arrow h-4 w-4" />
            </Link>
            <a href={site.phoneHref} tabIndex={open ? 0 : -1} className="btn btn-outline w-full">
              <Icon name="phone" className="h-4 w-4" /> Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
