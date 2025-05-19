
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PaymentConfirmation = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  
  // Mock bank details - would come from backend in real app
  const bankDetails = {
    accountName: "Codewave Ltd",
    accountNumber: "0123456789",
    bankName: "First Bank"
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!file) {
      toast({
        title: "Error",
        description: "Please upload your payment receipt",
        variant: "destructive"
      });
      return;
    }
    
    setIsUploading(true);
    
    // Mock API call - would be replaced with actual API call
    setTimeout(() => {
      toast({
        title: "Receipt Uploaded",
        description: "Your payment receipt has been submitted for verification",
      });
      setIsUploading(false);
    }, 2000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Account details copied to clipboard",
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Payment Details</CardTitle>
        <CardDescription>
          Please transfer ₦5,000 to the account below and upload your receipt
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-4 border rounded-md p-4 bg-secondary/50">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Bank Name:</span>
            <div className="flex items-center gap-2">
              <span>{bankDetails.bankName}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={() => copyToClipboard(bankDetails.bankName)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Account Name:</span>
            <div className="flex items-center gap-2">
              <span>{bankDetails.accountName}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={() => copyToClipboard(bankDetails.accountName)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Account Number:</span>
            <div className="flex items-center gap-2">
              <span className="font-bold">{bankDetails.accountNumber}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={() => copyToClipboard(bankDetails.accountNumber)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Amount:</span>
            <span className="font-bold">₦5,000</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Upload Payment Receipt</label>
            <Input 
              type="file" 
              accept="image/*"
              onChange={handleFileChange}
            />
            <p className="text-xs text-muted-foreground">
              Upload a clear image of your payment receipt
            </p>
          </div>
          
          <Button type="submit" className="w-full" disabled={isUploading}>
            {isUploading ? "Uploading..." : "Submit Receipt"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-xs text-muted-foreground text-center">
          Your account will be created once the payment is verified by our admin team
        </p>
      </CardFooter>
    </Card>
  );
};

export default PaymentConfirmation;
