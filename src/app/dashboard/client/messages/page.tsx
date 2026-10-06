"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  Video,
  CheckCheck,
  Sparkles,
  Image as ImageIcon,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";

interface MessageItem {
  id: string;
  sender: string;
  avatar: string;
  role: string;
  timestamp: string;
  text: string;
  image?: string;
  isMe: boolean;
}

const INITIAL_MESSAGES: MessageItem[] = [
  {
    id: "msg-1",
    sender: "Sophia Bennett",
    avatar: "/images/author-2.jpg",
    role: "Lead Site Engineer",
    timestamp: "Yesterday at 11:20 AM",
    text: "Hello David & Sarah! Just wanted to share that the panoramic sliding glass doors have been installed and tested for water resistance. Everything came out pristine!",
    image: "/images/project-1.jpg",
    isMe: false,
  },
  {
    id: "msg-2",
    sender: "David Miller",
    avatar: "/images/author-3.jpg",
    role: "Villa Owner",
    timestamp: "Yesterday at 11:45 AM",
    text: "Wow, that looks stunning, Sophia! The natural light coming through into the living room is incredible. When do the kitchen island slabs arrive?",
    isMe: true,
  },
  {
    id: "msg-3",
    sender: "Sophia Bennett",
    avatar: "/images/author-2.jpg",
    role: "Lead Site Engineer",
    timestamp: "Yesterday at 01:15 PM",
    text: "The Calacatta marble slabs are scheduled for delivery tomorrow morning at 8:00 AM. Our master stonemason will begin miter cutting on-site on Thursday.",
    isMe: false,
  },
  {
    id: "msg-4",
    sender: "Marcus Vance",
    avatar: "/images/author-1.jpg",
    role: "Project Executive",
    timestamp: "Today at 09:30 AM",
    text: "Good morning David! I uploaded the revised Solar + Powerwall Change Order (CO-02) for your review. It will keep the project right on track for our Nov 25 handover.",
    isMe: false,
  },
];

export default function ClientCommunicationsHubPage() {
  const [messages, setMessages] = useState<MessageItem[]>(INITIAL_MESSAGES);
  const [activeContact, setActiveContact] = useState<"sophia" | "marcus">("sophia");
  const [inputText, setInputText] = useState("");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedPhotoPreview, setSelectedPhotoPreview] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: MessageItem = {
      id: `msg-${Date.now()}`,
      sender: "David Miller",
      avatar: "/images/author-3.jpg",
      role: "Villa Owner",
      timestamp: "Just now",
      text: inputText.trim(),
      isMe: true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText("");

    // Optional simulated smart reply from Sophia after 1.5 seconds
    if (activeContact === "sophia") {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `msg-${Date.now() + 1}`,
            sender: "Sophia Bennett",
            avatar: "/images/author-2.jpg",
            role: "Lead Site Engineer",
            timestamp: "Just now",
            text: "Got it, David! I'll take notes on that during our afternoon site walk and make sure the trade foreman is briefed.",
            isMe: false,
          },
        ]);
      }, 1400);
    }
  };

  const handleQuickReply = (text: string) => {
    setInputText(text);
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-[1600px] w-full mx-auto">
      <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden h-[calc(100vh-210px)] min-h-[580px] max-h-[820px] flex flex-col md:flex-row shadow-sm">
        {/* Left Column: Contacts Sidebar */}
        <div className="w-full md:w-80 lg:w-96 border-r border-gray-200 bg-[#F9F9F9] flex flex-col justify-between flex-shrink-0">
          <div className="p-4 sm:p-5 border-b border-gray-200 bg-white">
            <h3 className="font-semibold text-base sm:text-lg text-[#12223B]">
              Project Communications
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Dedicated channel for PRJ-901
            </p>
          </div>

          {/* Contact list */}
          <div className="p-3 space-y-2 flex-1 overflow-y-auto">
            {/* Contact 1: Sophia Bennett */}
            <div
              onClick={() => setActiveContact("sophia")}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                activeContact === "sophia"
                  ? "bg-white border-[#FFDB5A] ring-1 ring-[#FFDB5A] shadow-xs"
                  : "bg-white/70 border-transparent hover:bg-white"
              }`}
            >
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
                <Image
                  src="/images/author-2.jpg"
                  alt="Sophia Bennett"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-xs sm:text-sm text-[#12223B] truncate">
                    Sophia Bennett
                  </h5>
                  <span className="text-[10px] text-gray-400">1:15 PM</span>
                </div>
                <p className="text-xs font-semibold text-[#007EFF]">
                  Lead Site Engineer
                </p>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  The Calacatta marble slabs are scheduled...
                </p>
              </div>
            </div>

            {/* Contact 2: Marcus Vance */}
            <div
              onClick={() => setActiveContact("marcus")}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                activeContact === "marcus"
                  ? "bg-white border-[#FFDB5A] ring-1 ring-[#FFDB5A] shadow-xs"
                  : "bg-white/70 border-transparent hover:bg-white"
              }`}
            >
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
                <Image
                  src="/images/author-1.jpg"
                  alt="Marcus Vance"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-xs sm:text-sm text-[#12223B] truncate">
                    Marcus Vance
                  </h5>
                  <span className="text-[10px] text-gray-400">9:30 AM</span>
                </div>
                <p className="text-xs font-semibold text-gray-600">
                  Project Executive
                </p>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  I uploaded the revised Solar + Powerwall...
                </p>
              </div>
            </div>
          </div>

          {/* Audit Note */}
          <div className="p-3.5 bg-white border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>All messages logged to official project audit record.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Chat Window */}
        <div className="flex-1 flex flex-col bg-white min-w-0">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src={
                    activeContact === "sophia"
                      ? "/images/author-2.jpg"
                      : "/images/author-1.jpg"
                  }
                  alt={activeContact === "sophia" ? "Sophia Bennett" : "Marcus Vance"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-[#12223B]">
                  {activeContact === "sophia" ? "Sophia Bennett" : "Marcus Vance"}
                </h4>
                <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {activeContact === "sophia"
                      ? "Active on Jobsite (PRJ-901)"
                      : "Online • Regional HQ"}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:+1 (555) 349-8120"
                className="p-2 rounded-lg bg-[#F6F6F6] hover:bg-gray-200 text-[#12223B] transition-colors cursor-pointer"
                title="Direct Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="p-2 rounded-lg bg-[#F6F6F6] hover:bg-gray-200 text-[#12223B] transition-colors cursor-pointer"
                title="Request Live Site Video Call"
              >
                <Video className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-[#FBFBFB]">
            {messages.map((m) => {
              if (m.isMe) {
                return (
                  <div key={m.id} className="flex items-end gap-2.5 justify-end">
                    <div className="max-w-md sm:max-w-lg space-y-1 items-end text-right">
                      <div className="flex items-center justify-end gap-2 px-1 text-[11px] text-gray-400">
                        <span className="font-semibold text-gray-700">
                          {m.sender}
                        </span>
                        <span>{m.timestamp}</span>
                      </div>
                      <div className="p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed bg-[#12223B] text-white rounded-br-xs text-left shadow-xs">
                        <p className="whitespace-pre-wrap">{m.text}</p>
                      </div>
                      <div className="flex items-center justify-end gap-1 text-[10px] text-gray-400 pr-1">
                        <span>Delivered</span>
                        <CheckCheck className="w-3.5 h-3.5 text-[#007EFF]" />
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={m.id} className="flex items-end gap-2.5 justify-start">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={m.avatar}
                      alt={m.sender}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-md sm:max-w-lg space-y-1 items-start">
                    <div className="flex items-center gap-2 px-1 text-[11px] text-gray-400">
                      <span className="font-semibold text-gray-700">{m.sender}</span>
                      <span>{m.timestamp}</span>
                    </div>
                    <div className="p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed bg-white text-[#12223B] border border-gray-200/80 rounded-bl-xs shadow-xs">
                      <p className="whitespace-pre-wrap">{m.text}</p>

                      {m.image && (
                        <div
                          onClick={() => setSelectedPhotoPreview(m.image!)}
                          className="mt-2.5 relative h-48 w-full rounded-lg overflow-hidden border border-white/20 cursor-pointer group"
                        >
                          <Image
                            src={m.image}
                            alt="Site Attachment"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                            Click to expand
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies Bar */}
          <div className="px-4 py-2 bg-[#F9F9F9] border-t border-gray-200/70 flex items-center gap-2 overflow-x-auto text-xs flex-shrink-0">
            <span className="text-gray-400 flex items-center gap-1 flex-shrink-0 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#FFDB5A]" />
              Quick:
            </span>
            <button
              type="button"
              onClick={() => handleQuickReply("Latest inspection photos?")}
              className="px-2.5 py-1 rounded-full bg-white border border-gray-200 hover:border-[#FFDB5A] hover:bg-[#FFDB5A]/10 text-gray-700 whitespace-nowrap transition-colors cursor-pointer"
            >
              Latest inspection photos?
            </button>
            <button
              type="button"
              onClick={() => handleQuickReply("Confirm Thursday delivery")}
              className="px-2.5 py-1 rounded-full bg-white border border-gray-200 hover:border-[#FFDB5A] hover:bg-[#FFDB5A]/10 text-gray-700 whitespace-nowrap transition-colors cursor-pointer"
            >
              Confirm Thursday delivery
            </button>
            <button
              type="button"
              onClick={() => handleQuickReply("Approved CO-02")}
              className="px-2.5 py-1 rounded-full bg-white border border-gray-200 hover:border-[#FFDB5A] hover:bg-[#FFDB5A]/10 text-gray-700 whitespace-nowrap transition-colors cursor-pointer"
            >
              Approved CO-02
            </button>
          </div>

          {/* Bottom Send Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-3.5 border-t border-gray-200 bg-white flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  alert("Photo attachment: select a photo from your jobsite camera roll.")
                }
                className="p-2.5 rounded-lg text-gray-500 hover:text-[#12223B] hover:bg-gray-100 transition-colors cursor-pointer"
                title="Attach photo from jobsite/device"
              >
                <ImageIcon className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Type your message to ${
                  activeContact === "sophia" ? "Sophia Bennett" : "Marcus Vance"
                }...`}
                className="flex-1 h-11 px-3.5 rounded-lg bg-[#F6F6F6] border border-transparent focus:border-[#FFDB5A] focus:bg-white text-xs sm:text-sm text-[#12223B] focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="h-11 px-4 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-40"
              >
                <span>Send</span>
                <Send className="w-4 h-4 text-[#FFDB5A]" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Video Call Request Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 border border-gray-200 shadow-2xl relative">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-xl bg-[#12223B] text-[#FFDB5A] flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#12223B]">
                Request Jobsite Video Walkthrough
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Sophia Bennett will receive a priority request on her jobsite tablet. She will connect to live camera feed once safety gear check is cleared.
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg text-xs text-gray-600 space-y-1">
              <p>• Estimated response time: <strong>under 5 minutes</strong></p>
              <p>• Certified engineer audio &amp; video link</p>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setVideoModalOpen(false);
                  alert("Live video walk request transmitted to Sophia's tablet.");
                }}
                className="px-4 py-2 rounded-lg bg-[#12223B] text-white text-xs font-semibold"
              >
                Transmit Video Call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Photo Enlarge Modal */}
      {selectedPhotoPreview && (
        <div
          onClick={() => setSelectedPhotoPreview(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs cursor-pointer"
        >
          <div className="relative max-w-3xl w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white/20">
            <Image
              src={selectedPhotoPreview}
              alt="Expanded preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
