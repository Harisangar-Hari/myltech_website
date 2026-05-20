import fs from "fs";
import path from "path";
import { Service } from "@/types";
import { FadeIn } from "@/components/ui/fade-in";
import * as Icons from "lucide-react";

function getServices(): Service[] {
  const filePath = path.join(process.cwd(), "data/services.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileData);
}

export function ServicesPreview() {
  const services = getServices();

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive IT solutions designed to propel your business forward. From AI integration to robust cloud architecture.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            // @ts-ignore - dynamic icon resolution
            const Icon = Icons[service.icon] || Icons.Code;
            
            return (
              <FadeIn key={service.id} delay={0.1 * index} direction="up" className="h-full">
                <div className="group relative flex flex-col h-full p-6 bg-card rounded-2xl border transition-all hover:shadow-lg hover:border-violet-500/50">
                  <div className="w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-6 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Icons.CheckCircle2 className="w-4 h-4 mr-2 text-violet-600 dark:text-violet-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
