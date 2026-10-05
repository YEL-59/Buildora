"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeInUp, TextAnime } from "@/components/animations";
import ArchitecturalShapesBg from "@/components/common/ArchitecturalShapesBg";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/layout/SocialIcons";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  link: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Michael Anderson",
    role: "Founder & Director",
    image: "/images/team-1.jpg",
    link: "#team",
  },
  {
    id: 2,
    name: "Emily Roberts",
    role: "Lead Architect",
    image: "/images/team-2.jpg",
    link: "#team",
  },
  {
    id: 3,
    name: "Alexander Thomas",
    role: "Project Director",
    image: "/images/team-3.jpg",
    link: "#team",
  },
  {
    id: 4,
    name: "Sophia Bennett",
    role: "Site Supervisor",
    image: "/images/team-4.jpg",
    link: "#team",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[#EFEFEF] relative overflow-hidden">
      {/* Background Building & Tower Crane Architectural Shapes */}
      <ArchitecturalShapesBg variant="general" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6">
            <FadeInUp delay={0.1} direction="down">
              <div className="section-sub-title">Our Team</div>
            </FadeInUp>
            <TextAnime
              as="h2"
              className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#12223B] tracking-[-0.03em] leading-[1.12]"
              delay={0.2}
            >
              Professionals committed to building better spaces
            </TextAnime>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <FadeInUp delay={0.35}>
              <p className="text-[#28374D] text-base leading-relaxed mb-4">
                Our team of skilled professionals brings experience, precision,
                and dedication to every project we undertake, ensuring quality
                results and client satisfaction.
              </p>
              <div>
                <Link href="#contact" className="readmore-btn">
                  View Our Team
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <FadeInUp
              key={member.id}
              delay={index * 0.12}
              duration={0.7}
              className="h-full"
            >
              <div className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5">
                {/* Member Image with Social Overlay */}
                <div className="relative h-80 w-full overflow-hidden image-shine bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Social icons overlay on hover */}
                  <div className="absolute inset-0 bg-[#12223B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full bg-white text-[#12223B] hover:bg-[#FFDB5A] flex items-center justify-center transition-colors shadow"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="w-10 h-10 rounded-full bg-white text-[#12223B] hover:bg-[#FFDB5A] flex items-center justify-center transition-colors shadow"
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full bg-white text-[#12223B] hover:bg-[#FFDB5A] flex items-center justify-center transition-colors shadow"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full bg-white text-[#12223B] hover:bg-[#FFDB5A] flex items-center justify-center transition-colors shadow"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FFDB5A] text-[#12223B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Member Content */}
                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-semibold text-[#12223B] group-hover:text-[#FFDB5A] transition-colors">
                    <Link href={member.link}>{member.name}</Link>
                  </h3>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Section Footer Banner */}
        <FadeInUp delay={0.3} className="mt-14 p-4 sm:p-6 bg-white rounded-2xl border border-black/5 shadow-sm text-center">
          <p className="text-[#28374D] text-base sm:text-lg">
            <span className="inline-block bg-[#FFDB5A] text-[#12223B] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded mr-3">
              Free
            </span>
            Strong, Stylish, and Durable Roofing Solutions —{" "}
            <Link
              href="#contact"
              className="text-[#12223B] font-semibold underline underline-offset-4 hover:text-[#FFDB5A] transition-colors ml-1"
            >
              View all Members.
            </Link>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
