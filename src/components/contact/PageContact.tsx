"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FadeInUp, TextAnime } from "@/components/animations";

export default function PageContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="bg-[#EFEFEF] py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-20 lg:space-y-28">
        {/* Top Section: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Heading, Description & Image with CTA */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Badge */}
              <FadeInUp delay={0.1} direction="up" distance={20}>
                <div className="inline-flex items-center gap-2 border border-[#28374D]/20 rounded-full px-3.5 py-1 text-xs uppercase font-semibold text-[#12223B] mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFDB5A]"></span>
                  Contact Us
                </div>
              </FadeInUp>

              {/* Title */}
              <TextAnime
                as="h2"
                className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#12223B] tracking-[-0.02em] leading-[1.18] mb-4"
              >
                Let&apos;s build your next project together
              </TextAnime>

              {/* Subtext */}
              <FadeInUp delay={0.2} direction="up" distance={20}>
                <p className="text-[#28374D]/80 text-[15px] sm:text-[16px] leading-[1.65] mb-8 max-w-xl">
                  Whether you&apos;re planning a new build, renovation, or commercial development, our experienced team is here to help.
                </p>
              </FadeInUp>
            </div>

            {/* Engineer Image Box with CTA Info Overlay */}
            <FadeInUp delay={0.25} direction="up" distance={30}>
              <div className="relative w-full aspect-[16/10] min-h-[340px] sm:min-h-[380px] rounded-[8px] overflow-hidden shadow-sm flex flex-col justify-end p-6 sm:p-8 bg-[#12223B]">
                <Image
                  src="/images/contact-us-image.jpg"
                  alt="Buildora Site Engineer"
                  fill
                  priority
                  className="object-cover object-center"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 z-[1]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(18, 34, 59, 0) 35%, rgba(18, 34, 59, 0.95) 100%)",
                  }}
                />

                {/* Bottom CTA Box */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-6">
                  {/* Phone Call Item */}
                  <div className="flex items-center gap-3.5 group">
                    <div className="w-12 h-12 rounded-full bg-[#FFDB5A] flex items-center justify-center flex-shrink-0 text-[#12223B] shadow-md group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5 text-[#12223B] fill-current" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/80 text-[13px] leading-tight mb-1">
                        Contact Us
                      </p>
                      <a
                        href="tel:+123765432"
                        className="text-white font-bold text-[16px] sm:text-[17px] hover:text-[#FFDB5A] transition-colors truncate block"
                      >
                        +123 765 432
                      </a>
                    </div>
                  </div>

                  {/* Email Address Item */}
                  <div className="flex items-center gap-3.5 group">
                    <div className="w-12 h-12 rounded-full bg-[#FFDB5A] flex items-center justify-center flex-shrink-0 text-[#12223B] shadow-md group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5 text-[#12223B]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/80 text-[13px] leading-tight mb-1">
                        Email Address
                      </p>
                      <a
                        href="mailto:info@domain.com"
                        className="text-white font-bold text-[16px] sm:text-[17px] hover:text-[#FFDB5A] transition-colors truncate block"
                      >
                        info@domain.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column: Form Card */}
          <FadeInUp delay={0.2} direction="up" distance={30} className="h-full">
            <div className="bg-white rounded-[8px] p-7 sm:p-10 lg:p-12 shadow-sm border border-gray-100 flex flex-col justify-center h-full">
              <div className="border-b border-[#12223B]/10 pb-5 mb-7">
                <h3 className="text-2xl sm:text-[28px] font-semibold text-[#12223B]">
                  Get in touch
                </h3>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-6 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold">Thank You!</h4>
                  <p className="text-sm">
                    Your message has been sent successfully. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full bg-[#F4F5F7] border-0 rounded-[4px] px-5 py-4 text-[#12223B] placeholder-[#28374D]/60 focus:outline-none focus:ring-2 focus:ring-[#FFDB5A] text-[15px] transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full bg-[#F4F5F7] border-0 rounded-[4px] px-5 py-4 text-[#12223B] placeholder-[#28374D]/60 focus:outline-none focus:ring-2 focus:ring-[#FFDB5A] text-[15px] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="E-mail Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#F4F5F7] border-0 rounded-[4px] px-5 py-4 text-[#12223B] placeholder-[#28374D]/60 focus:outline-none focus:ring-2 focus:ring-[#FFDB5A] text-[15px] transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone No."
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#F4F5F7] border-0 rounded-[4px] px-5 py-4 text-[#12223B] placeholder-[#28374D]/60 focus:outline-none focus:ring-2 focus:ring-[#FFDB5A] text-[15px] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write Message Here......"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#F4F5F7] border-0 rounded-[4px] px-5 py-4 text-[#12223B] placeholder-[#28374D]/60 focus:outline-none focus:ring-2 focus:ring-[#FFDB5A] text-[15px] resize-none transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#FFDB5A] hover:bg-[#12223B] text-[#12223B] hover:text-white font-semibold text-[15px] px-8 py-3.5 rounded-[6px] transition-all duration-300 shadow-sm cursor-pointer group"
                    >
                      <span>Send Message</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeInUp>
        </div>

        {/* Bottom Section: Location & Map */}
        <div className="pt-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <FadeInUp delay={0.1} direction="up" distance={20}>
              <div className="inline-flex items-center gap-2 border border-[#28374D]/20 rounded-full px-3.5 py-1 text-xs uppercase font-semibold text-[#12223B] mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFDB5A]"></span>
                Visit Our Location
              </div>
            </FadeInUp>
            <TextAnime
              as="h2"
              className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#12223B] tracking-[-0.02em] leading-tight mb-4"
            >
              Visit our office for consultation
            </TextAnime>
            <FadeInUp delay={0.2} direction="up" distance={20}>
              <p className="text-[#28374D]/80 text-[15px] sm:text-[16px] leading-[1.65]">
                Whether you&apos;re planning a residential build, commercial development, or renovation, we&apos;re here to provide expert advice and personalized solutions.
              </p>
            </FadeInUp>
          </div>

          {/* Google Map */}
          <FadeInUp delay={0.25} direction="up" distance={30}>
            <div className="w-full h-[450px] sm:h-[520px] lg:h-[580px] rounded-[8px] overflow-hidden border border-[#12223B]/10 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001223!2d-74.14448729227586!3d40.69763123330691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Buildora Office Location Map"
              />
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
