"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeInUp, TextAnime } from "@/components/animations";

export default function CtaSection() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
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
      setFormData({ fname: "", lname: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#ECEEF2] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header: Form on Left + Engineer on Right */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-6 mb-8 lg:mb-0">
          {/* Left Form Area */}
          <div className="w-full lg:w-[68%] xl:w-[70%] pb-0 lg:pb-12">
            <div className="mb-6 lg:mb-8">
              <FadeInUp delay={0.1} direction="down">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-xs sm:text-sm font-medium text-[#12223B] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFDB5A]"></span>
                  Get a Free Estimate
                </div>
              </FadeInUp>
              <TextAnime
                as="h2"
                className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#12223B] tracking-[-0.03em] leading-[1.15]"
                delay={0.2}
              >
                Request your construction quote today
              </TextAnime>
            </div>

            {submitted ? (
              <div className="bg-white text-green-800 p-6 rounded-[4px] flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-[#12223B]">Thank You!</h4>
                  <p className="text-sm text-[#5E6573]">
                    Your estimate request has been received. Our team will contact you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <FadeInUp delay={0.35}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: 3 Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <input
                        type="text"
                        name="fname"
                        required
                        value={formData.fname}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full h-[54px] px-5 rounded-[4px] bg-white border-0 text-[#12223B] placeholder-[#8C95A6] text-[15px] focus:outline-none focus:ring-1 focus:ring-[#12223B]/20 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lname"
                        required
                        value={formData.lname}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full h-[54px] px-5 rounded-[4px] bg-white border-0 text-[#12223B] placeholder-[#8C95A6] text-[15px] focus:outline-none focus:ring-1 focus:ring-[#12223B]/20 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail Address"
                        className="w-full h-[54px] px-5 rounded-[4px] bg-white border-0 text-[#12223B] placeholder-[#8C95A6] text-[15px] focus:outline-none focus:ring-1 focus:ring-[#12223B]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: 2 Inputs + Submit Button */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone No."
                        className="w-full h-[54px] px-5 rounded-[4px] bg-white border-0 text-[#12223B] placeholder-[#8C95A6] text-[15px] focus:outline-none focus:ring-1 focus:ring-[#12223B]/20 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write Message Here......."
                        className="w-full h-[54px] px-5 rounded-[4px] bg-white border-0 text-[#12223B] placeholder-[#8C95A6] text-[15px] focus:outline-none focus:ring-1 focus:ring-[#12223B]/20 transition-all"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full h-[54px] rounded-[4px] bg-[#FFDB5A] hover:bg-[#12223B] text-[#12223B] hover:text-white font-semibold text-[15px] transition-colors duration-300 flex items-center justify-center cursor-pointer"
                      >
                        Submit Request
                      </button>
                    </div>
                  </div>
                </form>
              </FadeInUp>
            )}
          </div>

          {/* Right Standing Engineer Image */}
          <div className="w-full lg:w-[32%] xl:w-[30%] flex items-end justify-center lg:justify-end -mb-1">
            <FadeInUp direction="up" delay={0.25} duration={0.9} distance={40} className="w-full max-w-[340px] lg:max-w-none">
              <div className="relative w-full">
                <Image
                  src="/images/cta-box-header-image.png"
                  alt="Construction Engineer"
                  width={380}
                  height={480}
                  priority
                  className="w-full h-auto object-contain object-bottom block"
                />
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Bottom Feature Card Bar (No shadows, no borders) */}
        <FadeInUp delay={0.3} className="rounded-[6px] overflow-hidden flex flex-col lg:flex-row items-stretch">
          {/* Left Yellow Block */}
          <div className="w-full lg:w-[28%] xl:w-[26%] bg-[#FFDB5A] p-8 sm:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-xs sm:text-[13px] font-medium text-[#12223B] mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12223B]"></span>
              People trust
            </div>
            <h3 className="text-2xl sm:text-[28px] font-semibold text-[#12223B] leading-[1.22] mb-3">
              Driven by Quality and Reliability
            </h3>
            <p className="text-[13px] sm:text-[14px] text-[#12223B]/80 leading-relaxed font-normal">
              We deliver reliable construction solution skilled professionals and to excellence.
            </p>
          </div>

          {/* Right White Feature Columns */}
          <div className="w-full lg:w-[72%] xl:w-[74%] bg-white p-8 sm:p-10 lg:p-12 flex items-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Feature 1 */}
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/icon-cta-box-item-1.svg"
                    alt="Premium Workmanship"
                    width={56}
                    height={56}
                    className="w-auto h-auto max-h-12 object-contain"
                  />
                </div>
                <h4 className="text-[18px] sm:text-[19px] font-semibold text-[#12223B] mb-2">
                  Premium Workmanship
                </h4>
                <p className="text-[13px] sm:text-[14px] text-[#5E6573] leading-relaxed">
                  Quality craftsmanship that ensures durable, lasting structures built to stand the test of time
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/icon-cta-box-item-2.svg"
                    alt="Transparent Pricing"
                    width={56}
                    height={56}
                    className="w-auto h-auto max-h-12 object-contain"
                  />
                </div>
                <h4 className="text-[18px] sm:text-[19px] font-semibold text-[#12223B] mb-2">
                  Transparent Pricing
                </h4>
                <p className="text-[13px] sm:text-[14px] text-[#5E6573] leading-relaxed">
                  Quality craftsmanship that ensures durable, lasting structures built to stand the test of time
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/icon-cta-box-item-3.svg"
                    alt="Customer Satisfaction"
                    width={56}
                    height={56}
                    className="w-auto h-auto max-h-12 object-contain"
                  />
                </div>
                <h4 className="text-[18px] sm:text-[19px] font-semibold text-[#12223B] mb-2">
                  Customer Satisfaction
                </h4>
                <p className="text-[13px] sm:text-[14px] text-[#5E6573] leading-relaxed">
                  Quality craftsmanship that ensures durable, lasting structures built to stand the test of time
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
