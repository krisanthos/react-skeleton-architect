
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Earn Money <span className="text-primary">with Simple Tasks</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Complete easy online tasks and earn real money. Plus, earn daily bonuses on your deposits.
            </p>
            <p className="mx-auto max-w-[500px] font-medium">
              Join for just <span className="text-primary font-bold">₦5,000</span> and start earning today
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Link to="/register">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
