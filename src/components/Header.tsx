
import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">Brand</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#faq" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            FAQ
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
