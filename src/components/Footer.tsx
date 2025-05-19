
import React from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  
  const navigateToAdmin = () => {
    setDialogOpen(false);
    window.location.href = '/admin-login';
  };

  return (
    <footer id="contact" className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Product</h3>
            <div className="flex flex-col gap-2">
              <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Demo</a>
              <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Blog</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Company</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</Link>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Careers</a>
              <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Resources</h3>
            <div className="flex flex-col gap-2">
              <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Blog</Link>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Documentation</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Support</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Terms</Link>
              <div className="flex flex-col">
                <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Privacy</Link>
                <div className="mt-1 flex items-center">
                  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/3426/3426624.png" 
                        alt="Milk Carton" 
                        className="h-6 w-6 cursor-pointer hover:opacity-80" 
                      />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Sind Sie sicher, dass Sie fortfahren möchten?</DialogTitle>
                        <DialogDescription>
                          Sie sind dabei, die Adminseite zu betreten.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="sm:justify-start">
                        <Button variant="outline" onClick={() => setDialogOpen(false)}>
                          Nein
                        </Button>
                        <Button onClick={navigateToAdmin}>
                          Ja
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Cookies</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Codewave Inc. All rights reserved.
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

