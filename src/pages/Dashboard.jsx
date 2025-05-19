
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data - would come from API in real app
  const walletBalance = 5000;
  const taskEarnings = 2500;
  const depositBonus = 250;
  const recentTasks = [
    { id: 1, name: "Survey XYZ", reward: 200, date: "2025-05-17" },
    { id: 2, name: "Watch Ad ABC", reward: 150, date: "2025-05-16" },
    { id: 3, name: "Feedback Form", reward: 300, date: "2025-05-14" },
  ];
  
  // Get bonus rate based on balance
  const getBonusRate = (balance) => {
    if (balance >= 50000) return "3%";
    if (balance >= 10000) return "2%";
    if (balance >= 5000) return "1.5%";
    return "1%";
  };
  
  const currentBonusRate = getBonusRate(walletBalance);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Wallet Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{walletBalance.toLocaleString()}</div>
              <Link to="/wallet">
                <Button variant="outline" size="sm" className="mt-4">
                  Manage Wallet
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Task Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{taskEarnings.toLocaleString()}</div>
              <Link to="/tasks">
                <Button variant="outline" size="sm" className="mt-4">
                  Find Tasks
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Deposit Bonus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{depositBonus.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">Earning {currentBonusRate} daily on deposits</p>
              <div className="bg-primary/10 rounded-md p-2 mt-2 text-xs">
                Increase your balance to earn higher bonus rates!
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTasks.map(task => (
                  <div key={task.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">{task.name}</p>
                      <p className="text-sm text-muted-foreground">{task.date}</p>
                    </div>
                    <div className="font-medium">₦{task.reward}</div>
                  </div>
                ))}
                <Link to="/tasks">
                  <Button className="w-full mt-4">View All Tasks</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/tasks">
                  <Button className="w-full" variant="outline">
                    Available Tasks
                  </Button>
                </Link>
                <Link to="/wallet">
                  <Button className="w-full" variant="outline">
                    Deposit Funds
                  </Button>
                </Link>
                <Link to="/wallet?tab=withdraw">
                  <Button className="w-full" variant="outline">
                    Withdraw
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button className="w-full" variant="outline">
                    Profile Settings
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
