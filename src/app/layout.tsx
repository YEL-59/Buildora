import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll, Preloader } from "@/components/layout";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buildora - Construction & Architectural Solutions",
  description:
    "Buildora is a premier Construction and Building Solutions company delivering modern architectural design, commercial builds, and residential projects with precision and quality.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem("buildora_theme_accent_color") || localStorage.getItem("builtex_cms_accent_color") || "#FFDB5A";
                  if (/^#[0-9A-Fa-f]{6}$/.test(saved)) {
                    document.documentElement.style.setProperty("--accent", saved);
                    var cleanHex = saved.replace("#", "");
                    var r = parseInt(cleanHex.substring(0, 2), 16);
                    var g = parseInt(cleanHex.substring(2, 4), 16);
                    var b = parseInt(cleanHex.substring(4, 6), 16);
                    var brightness = (r * 299 + g * 587 + b * 114) / 1000;
                    var contrast = brightness > 155 ? "#12223B" : "#FFFFFF";
                    document.documentElement.style.setProperty("--accent-contrast", contrast);

                    var svg = '<svg width="64" height="64" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="' + encodeURIComponent(saved) + '"/><path d="M16.9386 23.9994L25.0002 15.9391L33.0614 23.9994H39L25.0002 10L11 23.9994H16.9386Z" fill="#12223B"/><path d="M33.7221 26.9009V35.068H16.1095V26.9009H11.9102V39.2673H37.9215V26.9009H33.7221Z" fill="#12223B"/><path d="M18.7378 16.3078H14.499V20.8571H18.7378V16.3078Z" fill="#12223B"/><path d="M28.5492 28.0062C28.9643 26.2541 27.8804 24.4974 26.1283 24.0824C24.3763 23.6674 22.6196 24.7512 22.2046 26.5033C21.7896 28.2553 22.8734 30.0121 24.6255 30.4271C26.3775 30.8421 28.1342 29.7582 28.5492 28.0062Z" fill="#12223B"/><path d="M37.9226 26.3913H25.9834V28.3845H37.9226V26.3913Z" fill="#12223B"/></svg>';
                    var uri = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
                    var existing = document.getElementById("buildora-dynamic-favicon");
                    if (!existing) {
                      existing = document.createElement("link");
                      existing.id = "buildora-dynamic-favicon";
                      existing.rel = "icon";
                      existing.type = "image/svg+xml";
                      document.head.appendChild(existing);
                    }
                    existing.href = uri;
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-[#28374D] bg-[#EFEFEF]">
        <ThemeProvider>
          <Preloader />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
