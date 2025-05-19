
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentConfirmation from "@/components/PaymentConfirmation";

const Register = () => {
  const [step, setStep] = useState("details");
  
  const validateForm = (e) => {
    e.preventDefault();
    // Basic validation would happen here
    setStep("payment");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Register for Codewave</CardTitle>
          <CardDescription>
            Pay a registration fee of ₦5,000 to join and start earning money online
          </CardDescription>
        </CardHeader>
        
        <Tabs value={step} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger 
              value="details" 
              onClick={() => setStep("details")}
              disabled={step === "payment"}
            >
              Account Details
            </TabsTrigger>
            <TabsTrigger 
              value="payment" 
              disabled={step === "details"}
            >
              Payment
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <form onSubmit={validateForm}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex">
                    <div className="bg-muted flex items-center justify-center px-3 border border-r-0 rounded-l-md">
                      +234
                    </div>
                    <Input 
                      id="phone" 
                      className="rounded-l-none" 
                      placeholder="8012345678" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Continue to Payment
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
          
          <TabsContent value="payment">
            <PaymentConfirmation />
            <div className="text-center p-4">
              <Button variant="outline" onClick={() => setStep("details")}>
                Back to Details
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-sm text-center text-gray-500 pb-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium">
            Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Register;
