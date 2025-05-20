
import React from "react";

const Features = () => {
  const featuresList = [
    {
      title: "Fast Earnings",
      description: "Complete simple tasks and surveys to earn money quickly with immediate credits to your wallet."
    },
    {
      title: "Secure Payments",
      description: "Our payment system ensures your earnings are safely processed with reliable withdrawal options."
    },
    {
      title: "Daily Bonuses",
      description: "Enjoy 1% daily bonuses on your deposits, helping your money grow while you complete tasks."
    },
    {
      title: "Low Entry Barrier",
      description: "Start with a small registration fee and begin earning immediately with no complex requirements."
    },
    {
      title: "Mobile Friendly",
      description: "Complete tasks on the go with our fully responsive platform that works on all devices."
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is always available to assist you with any questions or concerns."
    }
  ];

  return (
    <section id="features" className="py-16 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Codewave
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The simplest way to earn money online through tasks, surveys, and daily bonuses.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 pt-12">
          {featuresList.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 border border-border p-6 rounded-lg">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
