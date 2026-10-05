"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import { FadeInUp, TextAnime } from "@/components/animations";

export default function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#EFEFEF]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeInUp delay={0.1} direction="down">
            <div className="section-sub-title">Latest News</div>
          </FadeInUp>
          <TextAnime
            as="h2"
            className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#12223B] tracking-[-0.03em] leading-[1.12] mb-4"
            delay={0.2}
          >
            Latest construction updates
          </TextAnime>
          <FadeInUp delay={0.35}>
            <p className="text-[#28374D] text-base leading-relaxed">
              Stay updated with expert tips, industry trends, and practical guides
              to help you make informed construction and design decisions.
            </p>
          </FadeInUp>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <FadeInUp
              key={post.id}
              delay={index * 0.15}
              duration={0.7}
              className="h-full"
            >
              <div className="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5">
                {/* Featured Image */}
                <div className="image-anime relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FFDB5A] text-[#12223B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Post Body */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <h3 className="text-xl font-bold text-[#12223B] group-hover:text-[#12223B] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <div>
                    <Link href={`/blog/${post.slug}`} className="readmore-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
