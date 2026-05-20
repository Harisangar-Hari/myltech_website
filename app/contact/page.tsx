import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { SiteConfig } from "@/types";
import { FadeIn } from "@/components/ui/fade-in";
import { Mail, Phone, MapPin } from "lucide-react";
import * as Icons from "@/components/ui/icons";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with MYL-Tech. We respond within 24 hours to all project inquiries, partnerships, and general questions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | MYL-Tech",
    description: "Get in touch with MYL-Tech. We respond within 24 hours to all project inquiries, partnerships, and general questions.",
    url: "https://myltech.example.com/contact",
    images: [{ url: "/images/og-contact.jpg", width: 1200, height: 630 }],
  },
};

function getSiteConfig(): SiteConfig {
  const filePath = path.join(process.cwd(), "data/site.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export default function ContactPage() {
  const siteConfig = getSiteConfig();

  return (
    <div className="flex flex-col min-h-screen pt-16">
      
      {/* Hero Section */}
      <section className="py-24 bg-muted/20 border-b">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Let's Build Something <span className="text-violet-600 dark:text-violet-500">Great</span> Together
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you have a project in mind or just want to say hello — we'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <div className="space-y-12">
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                        <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-violet-600 transition-colors">
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                        <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-muted-foreground hover:text-violet-600 transition-colors">
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                        <p className="text-muted-foreground">
                          {siteConfig.contact.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/50 rounded-2xl border">
                    <p className="font-medium">
                      ⏱️ {siteConfig.contact.responseTime}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                      {siteConfig.contact.socials.map((social) => {
                        // @ts-ignore
                        const Icon = Icons[social.icon];
                        return (
                          <a 
                            key={social.platform} 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={social.platform}
                            className="w-12 h-12 rounded-full border bg-card flex items-center justify-center hover:bg-violet-50 hover:text-violet-600 hover:border-violet-200 dark:hover:bg-violet-900/20 dark:hover:border-violet-800 transition-all shadow-sm"
                          >
                            {Icon && <Icon className="w-5 h-5" />}
                          </a>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </FadeIn>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20 border-t">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full bg-card rounded-2xl border px-6 py-2 shadow-sm">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-violet-600">How quickly do you respond?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We aim to respond to all inquiries within 24 hours on business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-violet-600">Do you work with international clients?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, we work with clients globally. We're a remote-first company comfortable across time zones.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-violet-600">What is your typical project timeline?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Most projects range from 4 to 16 weeks depending on scope. We'll give you a clear timeline after our discovery call.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b-0">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-violet-600">Do you offer ongoing support after launch?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely. We offer flexible retainer and support packages post-launch.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
