
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  
  // Mock data - would come from database in real app
  const [pendingRegistrations, setPendingRegistrations] = useState([
    { 
      id: 1, 
      name: "John Doe", 
      email: "john@example.com", 
      phone: "+2348012345678", 
      receiptUrl: "https://example.com/receipt1.jpg",
      submittedAt: "2025-05-18 10:30:45"
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      email: "jane@example.com", 
      phone: "+2349087654321", 
      receiptUrl: "https://example.com/receipt2.jpg",
      submittedAt: "2025-05-18 11:15:32"
    }
  ]);
  
  const [pendingDeposits, setPendingDeposits] = useState([
    { 
      id: 1, 
      userId: 101,
      name: "Mary Johnson", 
      email: "mary@example.com", 
      amount: 10000, 
      receiptUrl: "https://example.com/receipt3.jpg",
      submittedAt: "2025-05-18 09:45:12"
    },
    { 
      id: 2, 
      userId: 102,
      name: "Robert Brown", 
      email: "robert@example.com", 
      amount: 5000, 
      receiptUrl: "https://example.com/receipt4.jpg",
      submittedAt: "2025-05-18 12:22:45"
    }
  ]);
  
  const approveRegistration = (id) => {
    setPendingRegistrations(prev => prev.filter(reg => reg.id !== id));
    toast({
      title: "Registration Approved",
      description: "User account has been created successfully"
    });
  };
  
  const declineRegistration = (id) => {
    setPendingRegistrations(prev => prev.filter(reg => reg.id !== id));
    toast({
      title: "Registration Declined",
      description: "User has been blocked from registering with this email"
    });
  };
  
  const approveDeposit = (id) => {
    setPendingDeposits(prev => prev.filter(dep => dep.id !== id));
    toast({
      title: "Deposit Approved",
      description: "User's wallet has been credited"
    });
  };
  
  const declineDeposit = (id) => {
    setPendingDeposits(prev => prev.filter(dep => dep.id !== id));
    toast({
      title: "Deposit Declined",
      description: "Deposit has been rejected"
    });
  };
  
  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Tabs defaultValue="registrations" className="w-full">
        <TabsList>
          <TabsTrigger value="registrations">
            Pending Registrations ({pendingRegistrations.length})
          </TabsTrigger>
          <TabsTrigger value="deposits">
            Pending Deposits ({pendingDeposits.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="registrations" className="mt-6">
          <div className="grid grid-cols-1 gap-4">
            {pendingRegistrations.length > 0 ? (
              pendingRegistrations.map(registration => (
                <Card key={registration.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{registration.name}</CardTitle>
                    <CardDescription>Submitted on {registration.submittedAt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">Email: </span>
                          <span>{registration.email}</span>
                        </div>
                        <div>
                          <span className="font-medium">Phone: </span>
                          <span>{registration.phone}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">Receipt: </span>
                          <Button variant="link" className="p-0">
                            View Receipt
                          </Button>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            onClick={() => approveRegistration(registration.id)}
                            className="w-full"
                          >
                            Approve
                          </Button>
                          <Button 
                            onClick={() => declineRegistration(registration.id)}
                            variant="destructive"
                            className="w-full"
                          >
                            Decline & Block
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No pending registrations</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="deposits" className="mt-6">
          <div className="grid grid-cols-1 gap-4">
            {pendingDeposits.length > 0 ? (
              pendingDeposits.map(deposit => (
                <Card key={deposit.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{deposit.name}</CardTitle>
                    <CardDescription>Submitted on {deposit.submittedAt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">Email: </span>
                          <span>{deposit.email}</span>
                        </div>
                        <div>
                          <span className="font-medium">Amount: </span>
                          <span className="font-bold">₦{deposit.amount.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">Receipt: </span>
                          <Button variant="link" className="p-0">
                            View Receipt
                          </Button>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            onClick={() => approveDeposit(deposit.id)}
                            className="w-full"
                          >
                            Approve
                          </Button>
                          <Button 
                            onClick={() => declineDeposit(deposit.id)}
                            variant="destructive"
                            className="w-full"
                          >
                            Decline
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No pending deposits</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
