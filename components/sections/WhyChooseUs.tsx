import { FadeIn } from "@/components/ui/fade-in";
import { ShieldCheck, Zap, Users, Code2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Enterprise-Grade Security",
      description: "We build systems with security-first architecture, ensuring your data is protected at every layer.",
      icon: ShieldCheck,
    },
    {
      title: "Unmatched Performance",
      description: "Our solutions are optimized for speed and scalability, capable of handling millions of requests seamlessly.",
      icon: Zap,
    },
    {
      title: "Expert Team",
      description: "Our engineers and designers are industry veterans who have built products for Fortune 500 companies.",
      icon: Users,
    },
    {
      title: "Modern Tech Stack",
      description: "We use the latest technologies like Next.js, Go, and advanced AI models to keep you ahead of the curve.",
      icon: Code2,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Why Industry Leaders <span className="text-violet-600 dark:text-violet-500">Choose Us</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                At MYL-Tech, we don't just build software; we engineer robust, scalable solutions tailored to your unique business challenges. Our commitment to excellence is reflected in every line of code we write.
              </p>
            </FadeIn>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <FadeIn key={index} delay={0.1 * index} direction="right">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn direction="left" delay={0.2} className="relative hidden lg:block">
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-violet-100 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 flex items-center justify-center border relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 dark:opacity-40 mix-blend-overlay"></div>
              <div className="relative z-10 w-3/4 h-3/4 rounded-2xl bg-background/80 backdrop-blur border shadow-2xl flex items-center justify-center p-8">
                 <div className="text-center space-y-4">
                   <div className="w-16 h-16 mx-auto rounded-full bg-violet-600 flex items-center justify-center mb-4">
                     <ShieldCheck className="w-8 h-8 text-white" />
                   </div>
                   <h4 className="text-2xl font-bold">100% Reliable</h4>
                   <p className="text-muted-foreground">Trusted by over 200+ enterprise clients globally.</p>
                 </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
