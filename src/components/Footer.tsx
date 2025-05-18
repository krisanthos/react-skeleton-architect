
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Product</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Demo</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Company</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Careers</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Resources</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Blog</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Documentation</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Support</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Legal</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Terms</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Cookies</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Brand Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
