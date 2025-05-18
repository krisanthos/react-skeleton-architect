
import React from "react";

const Features = () => {
  const featuresList = [
    {
      title: "Intuitive Design",
      description: "Clean interface that anyone can use with minimal training. Focus on your work, not learning software."
    },
    {
      title: "Powerful Tools",
      description: "Industry-leading capabilities that handle your most complex challenges with ease."
    },
    {
      title: "Seamless Integration",
      description: "Works with your existing tech stack. No migration headaches or compatibility issues."
    }
  ];

  return (
    <section id="features" className="py-16 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Features
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to succeed, in one powerful package.
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
