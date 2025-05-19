
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Codewave's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. User Registration</h2>
            <p>To use Codewave's services, you must register and pay a one-time fee of ₦5,000. You are responsible for maintaining the confidentiality of your account information.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Task Completion</h2>
            <p>Users can earn money by completing tasks provided on the platform. Payment for completed tasks is subject to verification by our team.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Deposits and Bonuses</h2>
            <p>Users can deposit funds into their Codewave account. Daily bonuses are applied based on deposit amounts. All deposit transactions must be verified by the admin before being credited to your account.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h2>
            <p>Users must not engage in any fraudulent activities, create multiple accounts, or attempt to manipulate the system in any way.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
            <p>Codewave reserves the right to suspend or terminate user accounts that violate these terms or engage in suspicious activities.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>Codewave may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
