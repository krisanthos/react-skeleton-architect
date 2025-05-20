
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileHeader = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

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
        
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4">
                <Link 
                  to="/" 
                  className="text-lg font-medium px-2 py-2 hover:bg-accent rounded-md" 
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/login" 
                  className="text-lg font-medium px-2 py-2 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="text-lg font-medium px-2 py-2 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
                <Link 
                  to="/tasks" 
                  className="text-lg font-medium px-2 py-2 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Tasks
                </Link>
                <Link 
                  to="/about" 
                  className="text-lg font-medium px-2 py-2 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-lg font-medium px-2 py-2 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/blog" 
                  className="text-lg font-medium px-2 py-2 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/privacy" 
                  className="text-lg font-medium px-2 py-2 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="text-lg font-medium px-2 py-2 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Terms of Service
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
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
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
