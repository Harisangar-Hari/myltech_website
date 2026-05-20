import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { CareersData } from "@/types";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as Icons from "lucide-react";
import { CareersPositions } from "@/components/sections/CareersPositions";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the MYL-Tech team. We are hiring remote engineers, designers, and AI specialists passionate about building great products.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | MYL-Tech",
    description: "Join the MYL-Tech team. We are hiring remote engineers, designers, and AI specialists passionate about building great products.",
    url: "https://myltech.example.com/careers",
    images: [{ url: "/images/og-careers.jpg", width: 1200, height: 630 }],
  },
};

function getCareersData(): CareersData {
  const filePath = path.join(process.cwd(), "data/careers.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export default function CareersPage() {
  const { openPositions, perks } = getCareersData();

  return (
    <div className="flex flex-col min-h-screen pt-16">
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 to-transparent dark:from-violet-900/10 dark:to-transparent pointer-events-none" />
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Build the <span className="text-violet-600 dark:text-violet-500">Future</span> With Us
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              We're a remote-first AI company hiring exceptional people who love shipping great products.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 bg-violet-600 hover:bg-violet-700">
              <a href="#positions">View Open Roles</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Perks / Benefits Section */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perks & Benefits</h2>
              <p className="mt-4 text-lg text-muted-foreground">Everything you need to do your best work.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {perks.map((perk, index) => {
              // @ts-ignore
              const Icon = Icons[perk.icon] || Icons.CheckCircle;
              return (
                <FadeIn key={index} delay={0.1 * index} direction="up" className="h-full">
                  <div className="flex flex-col h-full p-8 bg-card/50 backdrop-blur-sm rounded-3xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {perk.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Open Roles</h2>
              <p className="text-lg text-muted-foreground">Join us in building the next generation of enterprise tools.</p>
            </FadeIn>
          </div>
          
          <CareersPositions positions={openPositions} />
        </div>
      </section>

      {/* Culture & Stats Section */}
      <section className="py-24 bg-violet-600 dark:bg-violet-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Why people love working at MYL-Tech
              </h2>
              <ul className="space-y-6 text-violet-100 text-lg">
                <li className="flex items-start">
                  <Icons.CheckCircle2 className="w-6 h-6 mr-3 text-violet-300 shrink-0 mt-0.5" />
                  <span><strong>Autonomy & Trust:</strong> We hire smart people and get out of their way. No micromanagement.</span>
                </li>
                <li className="flex items-start">
                  <Icons.CheckCircle2 className="w-6 h-6 mr-3 text-violet-300 shrink-0 mt-0.5" />
                  <span><strong>Impact Driven:</strong> Your code ships to real users fast. You'll see the direct result of your work.</span>
                </li>
                <li className="flex items-start">
                  <Icons.CheckCircle2 className="w-6 h-6 mr-3 text-violet-300 shrink-0 mt-0.5" />
                  <span><strong>Continuous Growth:</strong> Weekly technical deep-dives and a dedicated budget for your education.</span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <div className="text-5xl font-extrabold mb-2 text-white flex items-center justify-center">
                    <AnimatedCounter value={15} suffix="+" />
                  </div>
                  <div className="text-violet-200 font-medium">Team Members</div>
                </div>
                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <div className="text-5xl font-extrabold mb-2 text-white flex items-center justify-center">
                    <AnimatedCounter value={12} />
                  </div>
                  <div className="text-violet-200 font-medium">Countries</div>
                </div>
                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center sm:col-span-2">
                  <div className="text-5xl font-extrabold mb-2 text-white flex items-center justify-center">
                    <AnimatedCounter value={30} suffix="+" />
                  </div>
                  <div className="text-violet-200 font-medium">Products Shipped</div>
                </div>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

    </div>
  );
}
