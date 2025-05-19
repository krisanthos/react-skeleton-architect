
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // This is just for demonstration. In a real app, you'd verify this securely on the backend
  const adminPassword = "admin123"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === adminPassword) {
      toast({
        title: "Login Successful",
        description: "Welcome, administrator",
      });
      navigate("/admin");
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect admin password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">Admin Access</h2>
          <p className="mt-2 text-sm text-muted-foreground">Enter password to continue</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Admin Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
            />
          </div>

          <Button type="submit" className="w-full">
            Access Admin Panel
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
