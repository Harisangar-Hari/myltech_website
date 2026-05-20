import { FadeIn } from "@/components/ui/fade-in";
import { Monitor, Server, Database, Cloud, Globe, Cpu } from "lucide-react";

export function TechStack() {
  const technologies = [
    { name: "Next.js & React", category: "Frontend", icon: Monitor },
    { name: "Node.js & Go", category: "Backend", icon: Server },
    { name: "PostgreSQL & Redis", category: "Database", icon: Database },
    { name: "AWS & Vercel", category: "Cloud", icon: Cloud },
    { name: "TensorFlow & PyTorch", category: "AI / ML", icon: Cpu },
    { name: "GraphQL & REST", category: "API", icon: Globe },
  ];

  return (
    <section className="py-24 bg-background border-y">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <FadeIn direction="up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Powered by Modern Tech</h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            We leverage industry-leading technologies to ensure your applications are fast, secure, and scalable.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {technologies.map((tech, index) => (
            <FadeIn key={tech.name} delay={0.1 * index} direction="up">
              <div className="flex flex-col items-center p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors border hover:border-violet-500/30 group">
                <tech.icon className="w-10 h-10 mb-4 text-muted-foreground group-hover:text-violet-600 transition-colors" />
                <h3 className="font-semibold text-sm">{tech.name}</h3>
                <span className="text-xs text-muted-foreground mt-1">{tech.category}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
