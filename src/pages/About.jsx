
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">About Codewave</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-6 text-muted-foreground">
              At Codewave, our mission is to create opportunities for individuals to earn money 
              through simple online tasks and investments. We believe in providing a platform 
              that is accessible to everyone, regardless of their technical expertise.
            </p>
            <p className="mb-6 text-muted-foreground">
              We are committed to transparency, reliability, and building a community of 
              users who can achieve financial growth through our platform.
            </p>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-3">Why Choose Codewave?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Simple tasks anyone can complete</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Daily bonuses on deposits</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Transparent payment system</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Responsive customer support</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Team member cards would go here */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-center">John Doe</h3>
              <p className="text-muted-foreground text-center">Chief Executive Officer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-center">Jane Smith</h3>
              <p className="text-muted-foreground text-center">Chief Technology Officer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-center">Michael Johnson</h3>
              <p className="text-muted-foreground text-center">Customer Support Manager</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <p className="mb-4 text-muted-foreground">
            Codewave was founded in 2023 with the vision of creating an accessible platform for 
            online income generation. What started as a small project quickly grew into a 
            community of users from all over Nigeria.
          </p>
          <p className="mb-4 text-muted-foreground">
            Today, we continue to expand our services while staying true to our core values 
            of accessibility, transparency, and user satisfaction.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
