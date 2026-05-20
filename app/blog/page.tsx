import { Metadata } from "next";
import { getAllPosts, getReadingTime } from "@/lib/blog";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest insights on enterprise IT, AI, Cloud, and SaaS from the MYL-Tech team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | MYL-Tech",
    description: "Read the latest insights on enterprise IT, AI, Cloud, and SaaS from the MYL-Tech team.",
    url: "https://myltech.example.com/blog",
    images: [
      {
        url: "/images/og-blog.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="py-24 bg-muted/20 border-b">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Insights & <span className="text-violet-600 dark:text-violet-500">News</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our thoughts on the future of enterprise software, artificial intelligence, and modern engineering practices.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12">
            {posts.map((post, index) => {
              const readingTimeText = post.content ? getReadingTime(post.content) : "5 min read";
              const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              });

              return (
                <FadeIn key={post.slug} delay={0.1 * index} direction="up">
                  <article className="group flex flex-col items-start justify-between p-8 rounded-3xl bg-card border hover:shadow-xl transition-all hover:border-violet-500/30">
                    <div className="flex items-center gap-x-4 text-xs text-muted-foreground mb-4">
                      <time dateTime={post.date} className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formattedDate}
                      </time>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {readingTimeText}
                      </div>
                    </div>

                    <div className="group relative">
                      <h3 className="mt-3 text-2xl font-bold text-foreground group-hover:text-violet-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-4 line-clamp-3 text-muted-foreground leading-relaxed">
                        {post.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 mb-8">
                      {post.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center rounded-full bg-violet-100 dark:bg-violet-900/30 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-x-4 w-full justify-between mt-auto pt-6 border-t">
                      <div className="text-sm font-semibold text-foreground">
                        By {post.author}
                      </div>
                      <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-violet-600 flex items-center hover:underline">
                        Read Article <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No blog posts available at the moment. Check back soon!
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
