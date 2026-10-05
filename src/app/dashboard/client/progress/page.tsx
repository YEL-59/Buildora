"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Camera,
  Video,
  Eye,
  Maximize2,
  Sun,
  Shield,
  Clock,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function ClientProgressPage() {
  const [selectedCam, setSelectedCam] = useState(0);
  const [isThermal, setIsThermal] = useState(false);
  const [captured, setCaptured] = useState(false);
  const [time, setTime] = useState("12:28:45");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const cams = [
    {
      id: "CAM-01",
      name: "North Facade & Main Entrance Framing",
      view: "Exterior Architectural Elevation",
      details: "Framing inspection passed. Scaffolding level 3 active.",
      status: "1080p HD • 60 FPS",
      angle: "Wide Angle 120°",
    },
    {
      id: "CAM-02",
      name: "Upper Deck Terrace & Master Cantilever",
      view: "Level 2 Structural Deck",
      details: "Curtain wall glazing clips installed. Thermal barrier active.",
      status: "1080p HD • 60 FPS",
      angle: "Telephoto 70mm",
    },
    {
      id: "CAM-03",
      name: "Rear Infinity Pool & Spa Gunite Shell",
      view: "Rear Yard Excavation & Hydraulics",
      details: "Hydraulics rough-in pressure tested at 50 PSI.",
      status: "1080p HD • 30 FPS",
      angle: "Ultra-Wide 140°",
    },
    {
      id: "CAM-04",
      name: "Double-Height Great Room & Grand Staircase",
      view: "Interior Architectural Core",
      details: "HVAC spiral ductwork and smart LED raceways placed.",
      status: "1080p HD • 60 FPS",
      angle: "Interior Pan-Tilt 360°",
    },
  ];

  const currentCam = cams[selectedCam];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Title & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/dashboard/client" className="hover:text-white">Client Portal</Link>
            <span>/</span>
            <span className="text-[#00C975] font-semibold">Live Site Stream</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Villa Horizon (PRJ-901) Live Jobsite Cameras
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#00C975]/15 border border-[#00C975]/30 text-[#00C975] text-xs font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00C975] animate-ping" />
            <span>4 Cameras Online • 78% Milestone</span>
          </span>
        </div>
      </div>

      {/* Main Big Camera Theater */}
      <div className="rounded-3xl bg-[#070F1E] border border-white/10 overflow-hidden shadow-2xl">
        {/* Stream Top Control Bar */}
        <div className="p-4 bg-[#0A162C] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#FFDB5A] bg-white/5 px-2 py-0.5 rounded">
              {currentCam.id}
            </span>
            <span className="font-bold text-white text-sm">{currentCam.name}</span>
          </div>

          {/* Controls: Thermal Mode, Snapshot */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsThermal(!isThermal)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                isThermal
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-white/10 hover:bg-white/15 text-gray-300 hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{isThermal ? "Infrared Thermal: ON" : "Thermal Mode"}</span>
            </button>

            <button
              onClick={() => {
                setCaptured(true);
                setTimeout(() => setCaptured(false), 2500);
              }}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5 text-[#FFDB5A]" />
              <span>{captured ? "Snapshot Saved!" : "Snapshot"}</span>
            </button>
          </div>
        </div>

        {/* Video Canvas Simulator */}
        <div
          className={`relative aspect-[16/9] max-h-[520px] w-full flex items-center justify-center overflow-hidden transition-colors ${
            isThermal
              ? "bg-gradient-to-b from-[#2E0854] via-[#100326] to-[#050014]"
              : "bg-gradient-to-b from-[#0F1E38] via-[#0A1526] to-[#040810]"
          }`}
        >
          {/* Subtle Grid Scanlines Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80 pointer-events-none" />

          {/* Jobsite Blueprint/Construction Watermark */}
          <div className="text-center z-10 p-6 space-y-3">
            <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center shadow-xl ${
              isThermal ? "bg-purple-500/20 text-purple-300" : "bg-[#FFDB5A]/20 text-[#FFDB5A]"
            }`}>
              <Video className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">{currentCam.view}</h2>
              <p className="text-xs text-gray-300 max-w-md mx-auto mt-1">
                {currentCam.details}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400 font-mono">
              <span>FOV: {currentCam.angle}</span>
              <span>•</span>
              <span className="text-[#00C975]">{currentCam.status}</span>
              <span>•</span>
              <span>CCTV REC OK</span>
            </div>
          </div>

          {/* Live Overlay HUD info */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-xs font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-red-400 font-bold">● REC LIVE</span>
            <span className="text-white ml-2">2026-10-05 {time} PST</span>
          </div>

          <div className="absolute top-4 right-4 z-20 font-mono text-[11px] text-gray-300 bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md">
            WIND: 6 MPH • TEMP: 74°F • HUMIDITY: 48%
          </div>

          <div className="absolute bottom-4 left-4 z-20 text-[11px] text-gray-300 bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md font-mono">
            JOB SITE: PRJ-901 • BEVERLY HILLS, CA
          </div>
        </div>

        {/* 4 Camera Selectors Tabs at the bottom */}
        <div className="p-4 bg-[#0A162C] border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {cams.map((cam, idx) => (
            <button
              key={cam.id}
              onClick={() => setSelectedCam(idx)}
              className={`p-3 rounded-2xl text-left transition-all cursor-pointer border ${
                selectedCam === idx
                  ? "bg-[#00C975]/15 border-[#00C975] text-white shadow-lg"
                  : "bg-white/[0.04] border-white/5 hover:border-white/20 text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10px] font-bold text-[#FFDB5A]">{cam.id}</span>
                <span className={`w-2 h-2 rounded-full ${selectedCam === idx ? "bg-[#00C975]" : "bg-gray-600"}`} />
              </div>
              <div className="text-xs font-bold truncate text-white">{cam.name}</div>
              <div className="text-[10px] text-gray-400 truncate mt-0.5">{cam.view}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
