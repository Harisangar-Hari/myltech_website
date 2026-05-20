import { FadeIn } from "@/components/ui/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import fs from "fs";
import path from "path";
import { SiteConfig } from "@/types";

function getSiteConfig(): SiteConfig {
  const filePath = path.join(process.cwd(), "data/site.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileData);
}

export function Hero() {
  const siteConfig = getSiteConfig();

  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-100 via-background to-background dark:from-violet-900/20 dark:via-background dark:to-background"></div>
      
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center">
        <FadeIn inView={false} delay={0} direction="up" className="max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
              Enterprise IT
            </span>
          </h1>
        </FadeIn>
        
        <FadeIn inView={false} delay={0.1} direction="up" className="max-w-2xl mt-6">
          <p className="text-lg md:text-xl text-muted-foreground">
            {siteConfig.description}
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link 
            href="/services" 
            className={cn(buttonVariants({ size: "lg", variant: "default" }), "bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8")}
          >
            Explore Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/projects" 
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-8")}
          >
            View Our Work
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
