"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Calendar, Quote } from "lucide-react";
import {
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/layout";
import { BlogPost, blogPosts } from "@/data/blogData";
import { FadeInUp, TextAnime } from "@/components/animations";

interface BlogDetailsProps {
  post: BlogPost;
}

export default function BlogDetails({ post }: BlogDetailsProps) {
  const content = post.content || blogPosts[0].content!;

  return (
    <>
      {/* Page Header Banner */}
      <div className="relative pt-44 pb-20 sm:pt-48 sm:pb-24 lg:pt-56 lg:pb-28 bg-[#12223B] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/page-header-bg.jpg"
            alt="Page Header"
            fill
            priority
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(18, 34, 59, 0.92) 0%, rgba(18, 34, 59, 0.82) 50%, rgba(18, 34, 59, 0.6) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <TextAnime
              as="h1"
              className="text-3xl sm:text-4xl lg:text-[50px] font-semibold text-white tracking-[-0.03em] leading-[1.15] mb-4"
            >
              {post.title}
            </TextAnime>

            {/* Meta Info (Author & Date) */}
            <FadeInUp delay={0.2} direction="up" distance={20}>
              <div className="flex items-center gap-6 text-[15px] sm:text-[16px] text-white/90">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#FFDB5A]" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FFDB5A]" />
                  <span>{post.date}</span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Main Single Blog Content */}
      <section className="py-20 lg:py-28 bg-[#EFEFEF]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          {/* Featured Post Image */}
          <FadeInUp delay={0.1} direction="up" distance={30}>
            <div className="relative w-full aspect-[1/0.52] rounded-[6px] overflow-hidden mb-10 bg-gray-200">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover rounded-[6px]"
              />
            </div>
          </FadeInUp>

          {/* Post Article Body */}
          <article className="prose prose-lg max-w-none text-[#28374D]">
            <FadeInUp delay={0.15} direction="up" distance={20}>
              <p className="text-[#28374D] text-[16px] sm:text-[17px] leading-[1.7] mb-6">
                {content.intro1}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2} direction="up" distance={20}>
              <p className="text-[#28374D] text-[16px] sm:text-[17px] leading-[1.7] mb-8">
                {content.intro2}
              </p>
            </FadeInUp>

            {/* Quote Block Card in Solid Yellow (#FFDB5A) */}
            <FadeInUp delay={0.25} direction="up" distance={30}>
              <blockquote className="not-italic bg-[#FFDB5A] rounded-[12px] p-7 sm:p-10 my-10 flex items-start gap-5 border-0">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-[#12223B] mt-1">
                  <Quote className="w-8 h-8 fill-[#12223B] stroke-none" />
                </div>
                <p className="text-lg sm:text-[20px] font-semibold text-[#12223B] leading-[1.5] m-0">
                  &ldquo;{content.quote}&rdquo;
                </p>
              </blockquote>
            </FadeInUp>

            <FadeInUp delay={0.15} direction="up" distance={20}>
              <p className="text-[#28374D] text-[16px] sm:text-[17px] leading-[1.7] mb-8">
                {content.sustainability}
              </p>
            </FadeInUp>

            <TextAnime
              as="h2"
              className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#12223B] tracking-tight mt-10 mb-4"
            >
              {content.subheading}
            </TextAnime>

            <FadeInUp delay={0.15} direction="up" distance={20}>
              <p className="text-[#28374D] text-[16px] sm:text-[17px] leading-[1.7] mb-6">
                {content.subheadingText}
              </p>
            </FadeInUp>

            {/* Bullet Points */}
            <FadeInUp delay={0.2} direction="up" distance={20}>
              <ul className="space-y-3 mb-8 pl-5 list-disc text-[#28374D] text-[16px] sm:text-[17px] leading-[1.7]">
                {content.bulletPoints.map((point, index) => (
                  <li key={index} className="pl-1">
                    {point}
                  </li>
                ))}
              </ul>
            </FadeInUp>

            <FadeInUp delay={0.25} direction="up" distance={20}>
              <p className="text-[#28374D] text-[16px] sm:text-[17px] leading-[1.7] mb-12">
                {content.closing}
              </p>
            </FadeInUp>
          </article>

          {/* Tags and Social Sharing Row */}
          <FadeInUp delay={0.2} direction="up" distance={20}>
            <div className="border-t border-[#12223B]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Tags */}
              <div className="flex items-center flex-wrap gap-2.5">
                <span className="font-semibold text-[#12223B] text-[17px] mr-1">
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href="/blog"
                    className="px-4 py-2 rounded-[6px] bg-[#FFDB5A] hover:bg-[#12223B] text-[#12223B] hover:text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              {/* Social Sharing Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="w-10 h-10 rounded-[6px] border border-[#12223B]/15 flex items-center justify-center text-[#12223B] hover:bg-[#FFDB5A] hover:border-[#FFDB5A] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="w-10 h-10 rounded-[6px] border border-[#12223B]/15 flex items-center justify-center text-[#12223B] hover:bg-[#FFDB5A] hover:border-[#FFDB5A] transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Instagram"
                  className="w-10 h-10 rounded-[6px] border border-[#12223B]/15 flex items-center justify-center text-[#12223B] hover:bg-[#FFDB5A] hover:border-[#FFDB5A] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="w-10 h-10 rounded-[6px] border border-[#12223B]/15 flex items-center justify-center text-[#12223B] hover:bg-[#FFDB5A] hover:border-[#FFDB5A] transition-colors"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
