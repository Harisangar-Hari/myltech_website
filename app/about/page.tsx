import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { SiteConfig, TeamMember } from "@/types";
import { FadeIn } from "@/components/ui/fade-in";
import { Github, Linkedin, Twitter } from "@/components/ui/icons";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about MYL-Tech, our mission, and the team behind our enterprise IT solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | MYL-Tech",
    description: "Learn more about MYL-Tech, our mission, and the team behind our enterprise IT solutions.",
    url: "https://myltech.example.com/about",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

function getSiteConfig(): SiteConfig {
  const filePath = path.join(process.cwd(), "data/site.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function getTeamMembers(): TeamMember[] {
  const filePath = path.join(process.cwd(), "data/team.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export default function AboutPage() {
  const siteConfig = getSiteConfig();
  const team = getTeamMembers();

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              About <span className="text-violet-600 dark:text-violet-500">{siteConfig.name}</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {siteConfig.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that enterprise software doesn't have to be slow, outdated, or difficult to use. 
                Our mission is to bring consumer-grade user experiences and cutting-edge performance to 
                enterprise tools. Through rigorous engineering and a deep understanding of AI, Cloud, and SaaS 
                architectures, we empower businesses to operate faster and smarter.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/20 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet the Leadership</h2>
              <p className="text-lg text-muted-foreground">The experts driving our vision forward.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <FadeIn key={member.id} delay={0.1 * index} direction="up" className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-background shadow-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-300 dark:text-violet-700 font-bold text-5xl">
                   {/* In a real scenario with actual images, this would be uncommented:
                   <Image 
                     src={member.avatar} 
                     alt={member.name}
                     fill
                     className="object-cover"
                   /> */}
                   {member.name.substring(0, 1)}
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-violet-600 dark:text-violet-400 font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-6 flex-1">
                  {member.bio}
                </p>
                <div className="flex gap-4 text-muted-foreground">
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
