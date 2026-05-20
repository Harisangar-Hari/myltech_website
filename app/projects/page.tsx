import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { Project } from "@/types";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectsFilter } from "@/components/sections/ProjectsFilter";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse our portfolio of enterprise IT projects, from custom SaaS platforms to AI integrations.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | MYL-Tech",
    description: "Browse our portfolio of enterprise IT projects, from custom SaaS platforms to AI integrations.",
    url: "https://myltech.example.com/projects",
    images: [
      {
        url: "/images/og-projects.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

function getProjects(): Project[] {
  const filePath = path.join(process.cwd(), "data/projects.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Our <span className="text-violet-600 dark:text-violet-500">Work</span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore a selection of our most impactful enterprise projects. Use the filters below to narrow down by technology or domain.
              </p>
            </FadeIn>
          </div>

          <ProjectsFilter initialProjects={projects} />
        </div>
      </section>
    </div>
  );
}
