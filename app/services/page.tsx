import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { Service } from "@/types";
import { FadeIn } from "@/components/ui/fade-in";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive enterprise IT solutions including AI/ML, SaaS development, and Cloud infrastructure.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | MYL-Tech",
    description: "Explore our comprehensive enterprise IT solutions including AI/ML, SaaS development, and Cloud infrastructure.",
    url: "https://myltech.example.com/services",
    images: [
      {
        url: "/images/og-services.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

function getServices(): Service[] {
  const filePath = path.join(process.cwd(), "data/services.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export default function ServicesPage() {
  const services = getServices();

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 bg-muted/30 border-b">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Our <span className="text-violet-600 dark:text-violet-500">Services</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end technology solutions tailored for the modern enterprise, ensuring security, scalability, and exceptional user experiences.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto space-y-32">
          {services.map((service, index) => {
            // @ts-ignore
            const Icon = Icons[service.icon] || Icons.Code;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full">
                  <FadeIn direction={isEven ? "right" : "left"}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Icons.CheckCircle2 className="w-5 h-5 mr-3 text-violet-600 dark:text-violet-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10">
                      <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                        <Link href={`/contact?service=${service.id}`}>Consult With Us</Link>
                      </Button>
                    </div>
                  </FadeIn>
                </div>
                
                <div className="flex-1 w-full hidden lg:block">
                  <FadeIn direction={isEven ? "left" : "right"} delay={0.2} className="relative aspect-square w-full max-w-md mx-auto">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-100 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 border shadow-xl flex items-center justify-center overflow-hidden">
                       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 dark:opacity-20 mix-blend-overlay"></div>
                       <Icon className="w-48 h-48 text-violet-300 dark:text-violet-800 opacity-50 relative z-10" />
                    </div>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
