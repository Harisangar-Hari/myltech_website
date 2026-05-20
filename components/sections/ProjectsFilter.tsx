"use client";

import { useState } from "react";
import { Project } from "@/types";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/icons";
import Link from "next/link";

interface ProjectsFilterProps {
  initialProjects: Project[];
}

export function ProjectsFilter({ initialProjects }: ProjectsFilterProps) {
  const [filter, setFilter] = useState<string>("All");

  // Extract all unique tags
  const allTags = Array.from(
    new Set(initialProjects.flatMap((project) => project.tags))
  ).sort();
  
  const categories = ["All", ...allTags];

  const filteredProjects =
    filter === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.tags.includes(filter));

  return (
    <div className="w-full">
      {/* Filter Bar */}
      <FadeIn direction="up" delay={0.1} className="flex flex-wrap gap-3 justify-center mb-16">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            className={filter === category ? "bg-violet-600 hover:bg-violet-700" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </FadeIn>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.id} delay={0.05 * index} direction="up">
            <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border transition-all hover:shadow-xl hover:-translate-y-1 h-full">
              <div className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/40 dark:to-indigo-900/40">
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
                    <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
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
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No projects found for this category.
        </div>
      )}
    </div>
  );
}
