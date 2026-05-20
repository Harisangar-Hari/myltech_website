import Link from "next/link";
import { Github, Twitter, Linkedin } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl tracking-tight text-violet-600 dark:text-violet-500">
                MYL-Tech
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Production-grade IT solutions for the modern enterprise.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-violet-600" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-violet-600" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-violet-600" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#ai-ml" className="text-sm text-muted-foreground hover:text-foreground">AI & ML</Link></li>
              <li><Link href="/services#web-saas" className="text-sm text-muted-foreground hover:text-foreground">Web & SaaS</Link></li>
              <li><Link href="/services#cloud-devops" className="text-sm text-muted-foreground hover:text-foreground">Cloud & DevOps</Link></li>
              <li><Link href="/services#ui-ux" className="text-sm text-muted-foreground hover:text-foreground">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MYL-Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
