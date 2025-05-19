
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Wallet = () => {
  const { toast } = useToast();
  const [depositAmount, setDepositAmount] = useState("");
  const [depositFile, setDepositFile] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  
  // Mock data - would come from API in real app
  const walletBalance = 5000;
  const depositBonus = 250;
  const transactions = [
    { id: 1, type: "Task Completion", amount: 200, date: "2025-05-17", status: "completed" },
    { id: 2, type: "Deposit", amount: 3000, date: "2025-05-15", status: "completed" },
    { id: 3, type: "Deposit Bonus", amount: 30, date: "2025-05-16", status: "completed" },
    { id: 4, type: "Withdrawal", amount: -1000, date: "2025-05-10", status: "completed" },
  ];
  
  // Mock bonus rates based on deposit amount
  const bonusRates = [
    { min: 0, max: 4999, rate: 1 },
    { min: 5000, max: 9999, rate: 1.5 },
    { min: 10000, max: 49999, rate: 2 },
    { min: 50000, max: Infinity, rate: 3 },
  ];
  
  const getBonusRate = (balance) => {
    const rate = bonusRates.find(r => balance >= r.min && balance <= r.max);
    return rate ? rate.rate : 1;
  };
  
  const currentBonusRate = getBonusRate(walletBalance);

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    
    if (!depositAmount || parseFloat(depositAmount) < 1000) {
      toast({
        title: "Invalid amount",
        description: "Minimum deposit amount is ₦1,000",
        variant: "destructive"
      });
      return;
    }
    
    if (!depositFile) {
      toast({
        title: "Missing receipt",
        description: "Please upload your payment receipt",
        variant: "destructive"
      });
      return;
    }
    
    // Submit deposit for admin approval
    toast({
      title: "Deposit Initiated",
      description: "Your deposit request has been submitted for verification",
    });
    
    // Reset form
    setDepositAmount("");
    setDepositFile(null);
  };
  
  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    
    if (!withdrawAmount || parseFloat(withdrawAmount) < 1000) {
      toast({
        title: "Invalid amount",
        description: "Minimum withdrawal amount is ₦1,000",
        variant: "destructive"
      });
      return;
    }
    
    if (parseFloat(withdrawAmount) > walletBalance) {
      toast({
        title: "Insufficient balance",
        description: "You don't have enough funds to withdraw this amount",
        variant: "destructive"
      });
      return;
    }
    
    // Process withdrawal
    toast({
      title: "Withdrawal Requested",
      description: "Your withdrawal request has been submitted",
    });
    
    // Reset form
    setWithdrawAmount("");
  };
  
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setDepositFile(e.target.files[0]);
    }
  };

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
                <span>{currentBonusRate}% daily</span>
              </div>
              <div className="bg-secondary/50 p-3 rounded-md">
                <h3 className="font-medium mb-2">Bonus Rates:</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>₦0 - ₦4,999</span>
                    <span>1% daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span>₦5,000 - ₦9,999</span>
                    <span>1.5% daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span>₦10,000 - ₦49,999</span>
                    <span>2% daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span>₦50,000+</span>
                    <span>3% daily</span>
                  </div>
                </div>
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
                <form onSubmit={handleDepositSubmit}>
                  <CardContent className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      Deposit funds to earn daily bonuses based on your balance
                    </p>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Amount (NGN)</label>
                      <Input 
                        type="number" 
                        placeholder="Enter amount" 
                        min="1000"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Upload Payment Receipt</label>
                      <Input 
                        type="file" 
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="space-y-2 bg-secondary/50 p-3 rounded-md">
                      <h3 className="text-sm font-medium">Bank Details</h3>
                      <div className="text-sm">
                        <p><span className="font-medium">Bank:</span> First Bank</p>
                        <p><span className="font-medium">Account Name:</span> Codewave Ltd</p>
                        <p><span className="font-medium">Account Number:</span> 0123456789</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">Deposit Funds</Button>
                  </CardFooter>
                </form>
              </TabsContent>
              <TabsContent value="withdraw">
                <form onSubmit={handleWithdrawSubmit}>
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
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Minimum withdrawal: ₦1,000. Withdrawals are processed within 24 hours.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">Withdraw Funds</Button>
                  </CardFooter>
                </form>
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
                    {transaction.amount >= 0 ? '+' : ''}₦{Math.abs(transaction.amount).toLocaleString()}
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
