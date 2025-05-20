
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import MobileHeader from "@/components/MobileHeader";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic would go here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MobileHeader />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Login to Codewave</CardTitle>
            <CardDescription>
              Welcome back! Sign in to your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary font-medium">
                  Register
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
