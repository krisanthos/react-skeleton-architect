
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/4d555dd4-330b-4976-a46a-3ca9aa05815c.png" 
              alt="Codewave Logo" 
              className="h-8" 
            />
            <span className="text-xl font-bold">Codewave</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Home
          </Link>
          <a href="#features" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#faq" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            FAQ
          </a>
          <Link to="/tasks" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Tasks
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="default" size="sm">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
