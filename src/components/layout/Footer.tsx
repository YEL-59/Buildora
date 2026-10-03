"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  PinterestIcon,
} from "./SocialIcons";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#12223B] text-white pt-20 pb-10 border-t border-white/10 dark-section">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Footer Top: Logo & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.svg"
              alt="Builtex Logo"
              width={160}
              height={45}
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Pinterest"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFDB5A] text-white hover:text-[#12223B] flex items-center justify-center transition-colors shadow"
            >
              <PinterestIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFDB5A] text-white hover:text-[#12223B] flex items-center justify-center transition-colors shadow"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFDB5A] text-white hover:text-[#12223B] flex items-center justify-center transition-colors shadow"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFDB5A] text-white hover:text-[#12223B] flex items-center justify-center transition-colors shadow"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16">
          {/* Column 1: Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFDB5A]">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+1213465789"
                  className="hover:text-[#FFDB5A] transition-colors font-medium text-base text-white"
                >
                  +1(213) 465 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFDB5A]">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:info@domain.com"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  info@domain.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFDB5A] mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>245 Business Avenue, Central New York, USA</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  Industrial Construction
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  Building Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#FFDB5A] transition-colors"
                >
                  Home Remodeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-wide">
              Newsletter
            </h3>
            {subscribed ? (
              <div className="bg-white/10 p-4 rounded-xl flex items-center gap-3 text-sm text-[#FFDB5A]">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter Email Address*"
                    className="w-full px-4 py-3.5 pr-14 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFDB5A] transition-colors text-sm"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#FFDB5A] text-[#12223B] hover:bg-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  *Subscribe to get the latest updates, tips, and project
                  insights.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>Copyright © 2026 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
