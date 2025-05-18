
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Wallet = () => {
  // Mock data - would come from API in real app
  const walletBalance = 5000;
  const depositBonus = 250;
  const transactions = [
    { id: 1, type: "Task Completion", amount: 200, date: "2025-05-17", status: "completed" },
    { id: 2, type: "Deposit", amount: 3000, date: "2025-05-15", status: "completed" },
    { id: 3, type: "Deposit Bonus", amount: 30, date: "2025-05-16", status: "completed" },
    { id: 4, type: "Withdrawal", amount: -1000, date: "2025-05-10", status: "completed" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Wallet</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Balance Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Available Balance:</span>
                <span className="font-bold text-lg">₦{walletBalance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Daily Bonus:</span>
                <span className="font-medium text-green-600">+₦{depositBonus.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bonus Rate:</span>
                <span>1% daily</span>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="deposit">
            <Card>
              <CardHeader>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="deposit">Deposit</TabsTrigger>
                  <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
                </TabsList>
              </CardHeader>
              <TabsContent value="deposit">
                <CardContent className="space-y-4 pt-4">
                  <p className="text-sm text-muted-foreground">
                    Deposit funds to earn a 1% daily bonus
                  </p>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Amount (NGN)</label>
                    <Input type="number" placeholder="Enter amount" min="1000" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Deposit Funds</Button>
                </CardFooter>
              </TabsContent>
              <TabsContent value="withdraw">
                <CardContent className="space-y-4 pt-4">
                  <p className="text-sm text-muted-foreground">
                    Withdraw funds to your bank account
                  </p>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Amount (NGN)</label>
                    <Input 
                      type="number" 
                      placeholder="Enter amount" 
                      min="1000"
                      max={walletBalance} 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Withdraw Funds</Button>
                </CardFooter>
              </TabsContent>
            </Card>
          </Tabs>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map(transaction => (
                <div key={transaction.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">{transaction.type}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                  <div className={`font-medium ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.amount >= 0 ? '+' : ''}₦{transaction.amount.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
