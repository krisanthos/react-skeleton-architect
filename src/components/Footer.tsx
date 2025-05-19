
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/3426/3426624.png" 
                    alt="Milk Carton" 
                    className="h-6 w-6 cursor-pointer hover:opacity-80" 
                    onClick={() => document.getElementById('milk-dialog').showModal()} 
                  />
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
        
        {/* Milk Carton Dialog in German */}
        <dialog id="milk-dialog" className="modal p-6 rounded-lg shadow-lg bg-white">
          <h3 className="text-xl font-bold mb-4">Sind Sie sicher, dass Sie fortfahren möchten?</h3>
          <p className="mb-6">Sie sind dabei, die Adminseite zu betreten.</p>
          <div className="flex justify-end gap-4">
            <button 
              onClick={() => document.getElementById('milk-dialog').close()}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Nein
            </button>
            <button 
              onClick={() => {
                document.getElementById('milk-dialog').close();
                window.location.href = '/admin-login';
              }}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
            >
              Ja
            </button>
          </div>
        </dialog>
      </div>
    </footer>
  );
};

export default Footer;
