"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface ColorPreset {
  name: string;
  hex: string;
  isDefault?: boolean;
}

export const DEFAULT_ACCENT_COLOR = "#FFDB5A";

export const THEME_COLOR_PRESETS: ColorPreset[] = [
  { name: "Buildora Gold", hex: "#FFDB5A", isDefault: true },
  { name: "Forest Sage", hex: "#5C7057" },
  { name: "Tiffany Aqua", hex: "#8AD0D1" },
  { name: "Terracotta Coral", hex: "#D46556" },
  { name: "Orchid Magenta", hex: "#C654C3" },
  { name: "Sandstone Linen", hex: "#E5D3AF" },
  { name: "Olive Moss", hex: "#7D9C65" },
  { name: "Crimson Rose", hex: "#E11A45" },
  { name: "Lime Neon", hex: "#BAEF26" },
  { name: "Electric Blue", hex: "#007EFF" },
  { name: "Sky Cyan", hex: "#76C8EC" },
  { name: "Fresh Emerald", hex: "#66B86A" },
];

export function getContrastTextColor(hex: string): string {
  // Convert hex to RGB
  const cleanHex = hex.replace("#", "");
  if (cleanHex.length !== 6) return "#12223B";

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  // Perceived brightness formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155 ? "#12223B" : "#FFFFFF";
}

interface ThemeContextType {
  accentColor: string;
  contrastColor: string;
  setAccentColor: (hex: string) => void;
  resetDefault: () => void;
  presets: ColorPreset[];
}

const ThemeContext = createContext<ThemeContextType>({
  accentColor: DEFAULT_ACCENT_COLOR,
  contrastColor: "#12223B",
  setAccentColor: () => {},
  resetDefault: () => {},
  presets: THEME_COLOR_PRESETS,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [accentColor, setAccentState] = useState<string>(DEFAULT_ACCENT_COLOR);
  const [contrastColor, setContrastState] = useState<string>("#12223B");

  const applyColor = (hex: string) => {
    if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return;

    const contrast = getContrastTextColor(hex);
    setAccentState(hex);
    setContrastState(contrast);

    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty("--accent", hex);
      document.documentElement.style.setProperty("--accent-contrast", contrast);
      localStorage.setItem("buildora_theme_accent_color", hex);
      localStorage.setItem("builtex_cms_accent_color", hex);

      // Update dynamic favicon
      try {
        const svg = `<svg width="64" height="64" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="${encodeURIComponent(
          hex
        )}"/><path d="M16.9386 23.9994L25.0002 15.9391L33.0614 23.9994H39L25.0002 10L11 23.9994H16.9386Z" fill="#12223B"/><path d="M33.7221 26.9009V35.068H16.1095V26.9009H11.9102V39.2673H37.9215V26.9009H33.7221Z" fill="#12223B"/><path d="M18.7378 16.3078H14.499V20.8571H18.7378V16.3078Z" fill="#12223B"/><path d="M28.5492 28.0062C28.9643 26.2541 27.8804 24.4974 26.1283 24.0824C24.3763 23.6674 22.6196 24.7512 22.2046 26.5033C21.7896 28.2553 22.8734 30.0121 24.6255 30.4271C26.3775 30.8421 28.1342 29.7582 28.5492 28.0062Z" fill="#12223B"/><path d="M37.9226 26.3913H25.9834V28.3845H37.9226V26.3913Z" fill="#12223B"/></svg>`;
        const uri = "data:image/svg+xml;utf8," + encodeURIComponent(svg);
        let existing = document.getElementById("buildora-dynamic-favicon") as HTMLLinkElement;
        if (!existing) {
          existing = document.createElement("link");
          existing.id = "buildora-dynamic-favicon";
          existing.rel = "icon";
          existing.type = "image/svg+xml";
          document.head.appendChild(existing);
        }
        existing.href = uri;
      } catch (e) {
        // silently catch in non-browser env
      }
    }
  };

  useEffect(() => {
    // Read from localStorage on initial client mount
    if (typeof window !== "undefined") {
      const saved =
        localStorage.getItem("buildora_theme_accent_color") ||
        localStorage.getItem("builtex_cms_accent_color") ||
        DEFAULT_ACCENT_COLOR;
      if (/^#[0-9A-Fa-f]{6}$/.test(saved)) {
        applyColor(saved);
      }
    }
  }, []);

  const resetDefault = () => {
    applyColor(DEFAULT_ACCENT_COLOR);
  };

  return (
    <ThemeContext.Provider
      value={{
        accentColor,
        contrastColor,
        setAccentColor: applyColor,
        resetDefault,
        presets: THEME_COLOR_PRESETS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
