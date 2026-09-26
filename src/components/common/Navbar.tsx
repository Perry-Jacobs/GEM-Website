"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart, Church } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "New Here?", href: "/new" },
  { name: "About", href: "/about" },
  { name: "Sermons & Live", href: "/sermons" },
  { name: "Ministries", href: "/ministries" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-church-navy text-white shadow-md">
      {/* Top Banner */}
      <div className="bg-church-green/90 text-white text-xs sm:text-sm py-1.5 px-4 text-center font-medium tracking-wide">
        <span>Sunday Worship Services: 9:00 AM &amp; 11:30 AM • In-Person &amp; Online</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-church-gold flex items-center justify-center text-church-navy shadow-inner group-hover:scale-105 transition-transform">
              <Church className="w-6 h-6 text-church-navy" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-church-cream tracking-tight group-hover:text-church-gold transition-colors">
                Garden of Eden
              </span>
              <span className="text-[10px] sm:text-xs text-church-gold uppercase tracking-widest font-semibold">
                Ministries
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-church-cream/90 hover:text-church-gold transition-colors py-1 border-b-2 border-transparent hover:border-church-gold"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/give"
              className="inline-flex items-center space-x-2 bg-church-coral hover:bg-church-coral/90 text-white px-4 py-2 rounded-md font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Give</span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-church-cream hover:text-church-gold p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-church-navy border-t border-church-navy/50 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-church-cream hover:text-church-gold hover:bg-white/5 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/give"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 w-full bg-church-coral hover:bg-church-coral/90 text-white py-3 rounded-md font-semibold text-base"
            >
              <Heart className="w-5 h-5 fill-current" />
              <span>Give Online</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
