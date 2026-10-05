"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Send, CheckCircle2, Phone } from "lucide-react";

export default function ClientMessagesPage() {
  const [messages, setMessages] = useState([
    {
      sender: "Alex Rivera, PE (Lead Engineer)",
      time: "Today, 09:30 AM",
      text: "Good morning Mr. Vance! The Level 2 concrete slab cure tests just came back from the lab at 4,200 PSI, exceeding the 4,000 PSI engineering spec. Window frames will start going up this afternoon.",
      isMe: false,
    },
    {
      sender: "You (Property Client)",
      time: "Today, 10:15 AM",
      text: "Fantastic news Alex! Also wanted to check if the sample for the Italian Calacatta Gold marble arrived?",
      isMe: true,
    },
    {
      sender: "Alex Rivera, PE (Lead Engineer)",
      time: "Today, 10:45 AM",
      text: "Yes, the stone supplier delivered 2 full-size samples. I uploaded photos to your Change Orders tab under CO-901-04 for your official digital sign-off whenever you are ready.",
      isMe: false,
    },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "You (Property Client)",
          time: "Just now",
          text: inputText.trim(),
          isMe: true,
        },
      ]);
      setInputText("");
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/dashboard/client" className="hover:text-white">Client Portal</Link>
            <span>/</span>
            <span className="text-[#00C975] font-semibold">Engineer Messages</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            Direct Jobsite Communications
          </h1>
        </div>

        <a
          href="tel:+1213465789"
          className="px-4 py-2 rounded-xl bg-[#00C975] hover:bg-emerald-400 text-[#091524] text-xs font-bold transition-all shadow-md flex items-center gap-1.5 self-start"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Jobsite Office</span>
        </a>
      </div>

      <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xl space-y-4">
        {/* Chat History */}
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl max-w-lg ${
                m.isMe
                  ? "ml-auto bg-[#00C975]/15 border border-[#00C975]/30 text-white"
                  : "mr-auto bg-white/5 border border-white/10 text-white"
              }`}
            >
              <div className="flex items-center justify-between gap-4 text-[10px] text-gray-400 mb-1">
                <span className="font-bold">{m.sender}</span>
                <span>{m.time}</span>
              </div>
              <p className="text-xs leading-relaxed text-gray-200">{m.text}</p>
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="flex gap-2 pt-4 border-t border-white/10">
          <input
            type="text"
            required
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message to the lead site engineer..."
            className="flex-1 p-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs placeholder-gray-400 focus:outline-none focus:border-[#00C975]"
          />
          <button
            type="submit"
            className="px-5 rounded-xl bg-[#00C975] hover:bg-emerald-400 text-[#091524] font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
