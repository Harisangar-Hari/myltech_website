import { Metadata } from "next";
import { getPostBySlug, getPostSlugs, markdownToHtml, getReadingTime } from "@/lib/blog";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug);
    const url = `https://myltech.example.com/blog/${post.slug}`;
    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `/blog/${post.slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url,
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
        images: [
          {
            url: post.coverImage || "/images/og-blog.jpg",
            width: 1200,
            height: 630,
          },
        ],
      },
      keywords: post.tags,
    };
  } catch (e) {
    return {
      title: "Blog Post Not Found | MYL-Tech",
    };
  }
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch (e) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content || "");
  const readingTimeText = post.content ? getReadingTime(post.content) : "5 min read";
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <article className="py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <Button variant="ghost"  className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
            <Link href="/blog">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <header className="mb-12">
            <FadeIn direction="up">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-violet-100 dark:bg-violet-900/30 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6 leading-tight">
                {post.title}
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1}>
              <div className="flex items-center gap-x-6 text-sm text-muted-foreground pt-6 border-t">
                <div className="font-semibold text-foreground">
                  By {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={post.date}>{formattedDate}</time>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {readingTimeText}
                </div>
              </div>
            </FadeIn>
          </header>

          <FadeIn direction="up" delay={0.2}>
            {/* Custom styled HTML container to replace @tailwindcss/typography */}
            <div 
              className="[&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-lg [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>strong]:font-semibold [&>strong]:text-foreground text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </FadeIn>
        </div>
      </article>
    </div>
  );
}
