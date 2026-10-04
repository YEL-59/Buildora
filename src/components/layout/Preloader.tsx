"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if preloader has already been shown in this session
    const hasLoaded = sessionStorage.getItem("buildora_has_loaded");

    if (!hasLoaded) {
      setLoading(true);
      setShouldRender(true);

      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("buildora_has_loaded", "true");

        // Remove from DOM after fade-out transition completes
        setTimeout(() => {
          setShouldRender(false);
        }, 500);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-[#12223B] transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-24 h-24">
        {/* Spinner ring */}
        <div className="absolute inset-0 rounded-full border border-transparent border-t-[#FFDB5A] border-b-[#FFDB5A] animate-spin" />
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/loader.svg"
            alt="Buildora Loader"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
