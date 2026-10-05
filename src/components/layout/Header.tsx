"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about" || pathname === "/about-us";
  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");
  const isProjectsActive =
    pathname === "/projects" || pathname.startsWith("/projects/");
  const isBlogActive = pathname === "/blog" || pathname.startsWith("/blog/");
  const isContactActive = pathname === "/contact" || pathname === "/contact-us";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-[#12223B]/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border-b border-white/15 py-3.5 z-50"
            : "relative bg-[#12223B]/35 backdrop-blur-md border-b border-white/10 py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="inline-block flex-shrink-0">
            <Image
              src="/images/logo.gif"
              alt="Buildora Logo"
              width={210}
              height={48}
              unoptimized
              priority
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Home */}
            <Link
              href="/"
              className={`relative px-3.5 py-2 text-[15px] font-semibold transition-all duration-200 ${
                isHomeActive
                  ? "text-[#FFDB5A]"
                  : "text-white hover:text-[#FFDB5A]"
              }`}
            >
              Home
              {isHomeActive && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#FFDB5A] rounded-full shadow-[0_0_8px_#FFDB5A]" />
              )}
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`relative px-3.5 py-2 text-[15px] font-semibold transition-all duration-200 ${
                isAboutActive
                  ? "text-[#FFDB5A]"
                  : "text-white hover:text-[#FFDB5A]"
              }`}
            >
              About Us
              {isAboutActive && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#FFDB5A] rounded-full shadow-[0_0_8px_#FFDB5A]" />
              )}
            </Link>

            {/* Services */}
            <Link
              href="/services"
              className={`relative px-3.5 py-2 text-[15px] font-semibold transition-all duration-200 ${
                isServicesActive
                  ? "text-[#FFDB5A]"
                  : "text-white hover:text-[#FFDB5A]"
              }`}
            >
              Services
              {isServicesActive && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#FFDB5A] rounded-full shadow-[0_0_8px_#FFDB5A]" />
              )}
            </Link>

            {/* Projects */}
            <Link
              href="/projects"
              className={`relative px-3.5 py-2 text-[15px] font-semibold transition-all duration-200 ${
                isProjectsActive
                  ? "text-[#FFDB5A]"
                  : "text-white hover:text-[#FFDB5A]"
              }`}
            >
              Projects
              {isProjectsActive && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#FFDB5A] rounded-full shadow-[0_0_8px_#FFDB5A]" />
              )}
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={`relative px-3.5 py-2 text-[15px] font-semibold transition-all duration-200 ${
                isBlogActive
                  ? "text-[#FFDB5A]"
                  : "text-white hover:text-[#FFDB5A]"
              }`}
            >
              Blog
              {isBlogActive && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#FFDB5A] rounded-full shadow-[0_0_8px_#FFDB5A]" />
              )}
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              className={`relative px-3.5 py-2 text-[15px] font-semibold transition-all duration-200 ${
                isContactActive
                  ? "text-[#FFDB5A]"
                  : "text-white hover:text-[#FFDB5A]"
              }`}
            >
              Contact Us
              {isContactActive && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#FFDB5A] rounded-full shadow-[0_0_8px_#FFDB5A]" />
              )}
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#FFDB5A] hover:bg-white text-[#12223B] font-semibold text-[15px] px-6 py-3 rounded-lg transition-all duration-300 shadow-sm group"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md bg-[#FFDB5A] text-[#12223B] hover:bg-[#ffe37a] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#12223B]/95 backdrop-blur-xl border-t border-white/15 px-4 py-6 mt-4 transition-all shadow-2xl">
            <nav className="flex flex-col space-y-3">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 font-semibold transition-colors flex items-center justify-between ${
                  isHomeActive
                    ? "text-[#FFDB5A] border-l-2 border-[#FFDB5A] pl-3"
                    : "text-white hover:text-[#FFDB5A]"
                }`}
              >
                Home
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 font-semibold transition-colors flex items-center justify-between ${
                  isAboutActive
                    ? "text-[#FFDB5A] border-l-2 border-[#FFDB5A] pl-3"
                    : "text-white hover:text-[#FFDB5A]"
                }`}
              >
                About Us
              </Link>

              {/* Services */}
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 font-semibold transition-colors flex items-center justify-between ${
                  isServicesActive
                    ? "text-[#FFDB5A] border-l-2 border-[#FFDB5A] pl-3"
                    : "text-white hover:text-[#FFDB5A]"
                }`}
              >
                Services
              </Link>

              {/* Projects */}
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 font-semibold transition-colors flex items-center justify-between ${
                  isProjectsActive
                    ? "text-[#FFDB5A] border-l-2 border-[#FFDB5A] pl-3"
                    : "text-white hover:text-[#FFDB5A]"
                }`}
              >
                Projects
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 font-semibold transition-colors flex items-center justify-between ${
                  isBlogActive
                    ? "text-[#FFDB5A] border-l-2 border-[#FFDB5A] pl-3"
                    : "text-white hover:text-[#FFDB5A]"
                }`}
              >
                Blog
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 font-semibold transition-colors flex items-center justify-between ${
                  isContactActive
                    ? "text-[#FFDB5A] border-l-2 border-[#FFDB5A] pl-3"
                    : "text-white hover:text-[#FFDB5A]"
                }`}
              >
                Contact Us
              </Link>

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-builtex-highlighted w-full text-center justify-center inline-flex items-center gap-2"
                >
                  <span>Book Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
