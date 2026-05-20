import { FadeIn } from "@/components/ui/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* High-contrast violet background */}
      <div className="absolute inset-0 bg-violet-600 dark:bg-violet-700"></div>
      
      {/* Abstract decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-900 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.1}>
          <p className="text-violet-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join hundreds of enterprise companies that trust MYL-Tech to build, scale, and secure their most critical applications.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "rounded-full px-8 font-semibold text-violet-700 hover:text-violet-800 bg-white hover:bg-violet-50")}
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link 
            href="/about" 
            className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "rounded-full px-8 text-violet-700 hover:text-violet-800 border-white/30  hover:bg-violet-50")}
          >
            Learn More About Us
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
