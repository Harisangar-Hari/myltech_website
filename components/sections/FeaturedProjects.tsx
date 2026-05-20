import fs from "fs";
import path from "path";
import { Project } from "@/types";
import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function getProjects(): Project[] {
  const filePath = path.join(process.cwd(), "data/projects.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileData);
}

export function FeaturedProjects() {
  const projects = getProjects();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="max-w-2xl">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Work</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-lg text-muted-foreground">
                Explore some of our most impactful projects. We deliver scalable solutions across various industries.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.2}>
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index} direction="up">
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border transition-all hover:shadow-xl hover:-translate-y-1 h-full">
                {/* Fallback gradient background in case image is missing */}
                <div className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/40 dark:to-indigo-900/40">
                   {/* In a real scenario with actual images, this would be uncommented:
                   <Image 
                     src={project.image} 
                     alt={project.title}
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-overlay"
                   /> */}
                   <div className="absolute inset-0 flex items-center justify-center text-violet-300 dark:text-violet-700 font-bold text-4xl opacity-50">
                     {project.title.substring(0, 2).toUpperCase()}
                   </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-violet-600 transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t">
                    {project.link && (
                      <Link href={project.link} className="inline-flex items-center text-sm font-medium hover:text-violet-600 transition-colors">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    )}
                    {project.github && (
                      <Link href={project.github} className="inline-flex items-center text-sm font-medium hover:text-violet-600 transition-colors">
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
