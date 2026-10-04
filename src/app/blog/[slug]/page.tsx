import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { BlogDetails } from "@/components/blog";
import { blogPosts } from "@/data/blogData";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  return {
    title: `${post.title} - Builtex Construction`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const content = post.content || blogPosts[0].content!;

  return (
    <main className="relative min-h-screen bg-[#EFEFEF]">
      <Header />
      <BlogDetails post={post} />
      <Footer />
    </main>
  );
}
