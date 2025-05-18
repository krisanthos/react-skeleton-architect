
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">How Codewave Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">1. Register</h3>
              <p className="text-gray-600 mb-4">Pay a small registration fee and create your account to get started.</p>
              <Link to="/register">
                <Button>Join Now</Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">2. Complete Tasks</h3>
              <p className="text-gray-600 mb-4">Earn money by completing simple tasks like surveys and watching ads.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">3. Get Paid</h3>
              <p className="text-gray-600 mb-4">Withdraw your earnings anytime or earn daily bonuses on your deposits.</p>
            </div>
          </div>
        </div>
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
