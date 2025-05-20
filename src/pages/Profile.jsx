
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import MobileHeader from "@/components/MobileHeader";

const Profile = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");

  // Mock data - would come from API in real app
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+2348012345678",
    bio: "I'm a software developer interested in earning from online tasks.",
    joinDate: "May 15, 2025"
  });

  // Mock transaction data - would come from API in real app
  const transactions = [
    {
      id: 1,
      type: "deposit",
      amount: 5000,
      date: "2025-05-15",
      status: "completed"
    },
    {
      id: 2,
      type: "task_reward",
      amount: 250,
      date: "2025-05-16",
      status: "completed"
    },
    {
      id: 3,
      type: "withdrawal",
      amount: -2000,
      date: "2025-05-17",
      status: "pending"
    }
  ];

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // In a real app, this would update the user's profile via API
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader />
      <div className="container mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
        <p className="text-gray-600 mb-8">Manage your account details and preferences</p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details here</CardDescription>
              </CardHeader>
              <form onSubmit={handleProfileUpdate}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={userData.email} readOnly className="bg-gray-100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" value={userData.phone} onChange={(e) => setUserData({...userData, phone: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="joinDate">Member Since</Label>
                      <Input id="joinDate" value={userData.joinDate} readOnly className="bg-gray-100" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={userData.bio}
                      onChange={(e) => setUserData({...userData, bio: e.target.value})}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Update Profile</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Update your password and security preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => toast({ title: "Password Updated", description: "Your password has been successfully updated." })}>
                  Change Password
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="transactions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View all your account transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map(transaction => (
                    <div 
                      key={transaction.id}
                      className="flex justify-between items-center border-b pb-4"
                    >
                      <div>
                        <p className="font-medium">
                          {transaction.type === "deposit" ? "Deposit" : 
                           transaction.type === "withdrawal" ? "Withdrawal" : "Task Reward"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.date} • {transaction.status === "completed" ? "Completed" : "Pending"}
                        </p>
                      </div>
                      <div className={`font-medium ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                        {transaction.amount < 0 ? "-" : "+"}₦{Math.abs(transaction.amount).toLocaleString()}
                      </div>
                    </div>
                  ))}
                  
                  {transactions.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No transactions yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
