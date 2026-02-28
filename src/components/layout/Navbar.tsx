"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { SITE } from "@/lib/constants";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-saffron">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-foreground">
            {SITE.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-saffron hover:bg-saffron-hover text-white"
          >
            <a href={SITE.telegramBot} target="_blank" rel="noopener noreferrer">
              Start Free
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="text-lg font-bold">{SITE.name}</SheetTitle>
            <div className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-saffron hover:bg-saffron-hover text-white"
              >
                <a href={SITE.telegramBot} target="_blank" rel="noopener noreferrer">
                  Start Free
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
