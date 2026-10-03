"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogData";

export default function PageBlog() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="py-20 lg:py-28 bg-[#EFEFEF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* 6 Blog Posts Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-[6px] p-5 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Featured Image */}
                <div className="image-anime relative w-full aspect-[1/0.78] rounded-[4px] overflow-hidden mb-5 bg-gray-200">
                  <Link href={`/blog/${post.slug}`} className="block w-full h-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-[4px] transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Post Title */}
                <div className="px-1 mb-4">
                  <h2 className="text-[20px] font-semibold text-[#12223B] leading-[1.38]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#FFDB5A] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                </div>
              </div>

              {/* Read More Button with Yellow Arrow Circle */}
              <div className="pt-4 border-t border-[#12223B]/10 px-1 flex items-center justify-between">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#12223B] group/btn hover:text-[#FFDB5A] transition-colors"
                >
                  <span>Read More</span>
                  <span className="w-7 h-7 rounded-full bg-[#FFDB5A] flex items-center justify-center text-[#12223B] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Bar */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="w-10 h-10 rounded-[4px] bg-white text-[#12223B] hover:bg-[#FFDB5A] flex items-center justify-center transition-colors disabled:opacity-50 disabled:hover:bg-white cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-[4px] font-semibold text-sm flex items-center justify-center transition-colors cursor-pointer ${
                currentPage === page
                  ? "bg-[#FFDB5A] text-[#12223B]"
                  : "bg-white text-[#12223B] hover:bg-[#FFDB5A]"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
            disabled={currentPage === 3}
            aria-label="Next page"
            className="w-10 h-10 rounded-[4px] bg-white text-[#12223B] hover:bg-[#FFDB5A] flex items-center justify-center transition-colors disabled:opacity-50 disabled:hover:bg-white cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
