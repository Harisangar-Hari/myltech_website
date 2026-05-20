"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import siteConfig from "@/data/site.json";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close mobile menu when route changes or clicked
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight text-violet-600 dark:text-violet-500">
              MYL-Tech-Solutions
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {siteConfig.nav.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Link href="/contact" className={cn(buttonVariants({ variant: "default" }), "hidden md:inline-flex bg-violet-600 hover:bg-violet-700 text-white")}>
            Contact Us
          </Link>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {siteConfig.nav.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={closeMobileMenu}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <Link 
                href="/contact" 
                onClick={closeMobileMenu}
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full bg-violet-600 hover:bg-violet-700 text-white")}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
