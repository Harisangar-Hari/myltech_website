import { FadeIn } from "@/components/ui/fade-in";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "MYL-Tech completely transformed our legacy infrastructure. Their AI models improved our processing speed by over 400%. The team's expertise is simply unmatched.",
      author: "Sarah Jenkins",
      title: "CTO at FinServe Global",
    },
    {
      quote: "Working with MYL-Tech felt like having an in-house engineering team. They delivered our new SaaS platform ahead of schedule and with zero critical bugs.",
      author: "David Chen",
      title: "Founder of CloudScale",
    },
    {
      quote: "The UI/UX redesign they executed for our e-commerce platform led to a 35% increase in conversion rate within the first month. Incredible attention to detail.",
      author: "Emily Ross",
      title: "VP of Product at RetailPro",
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Client Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground">Don't just take our word for it.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={0.1 * index} direction="up" className="h-full">
              <div className="flex flex-col h-full p-8 bg-card rounded-2xl border shadow-sm relative">
                <Quote className="absolute top-6 right-8 w-10 h-10 text-violet-100 dark:text-violet-900/40" />
                <p className="text-lg italic text-muted-foreground mb-8 relative z-10 flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-violet-600 dark:text-violet-400">{testimonial.title}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
