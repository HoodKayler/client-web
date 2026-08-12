"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { BrandMark } from "@/components/ui/brand-mark";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container navbar">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} className={active ? "nav-link active" : "nav-link"} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link className="header-cta" href="/contact">
          Start a conversation
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div id="mobile-menu" className={open ? "mobile-menu open" : "mobile-menu"} aria-hidden={!open}>
        <nav className="container mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link className="mobile-contact" href="/contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            Start a conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
