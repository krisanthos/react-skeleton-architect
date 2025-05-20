
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Advertisement = ({ 
  onComplete, 
  duration = 5, 
  title = "Advertisement",
  description = "This is a sponsored message from our partners"
}) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [isActive, setIsActive] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!isActive) return;

    // Set up countdown timer
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Automatically complete the ad after timer ends
          handleComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive]);

  const handleComplete = () => {
    setIsActive(false);
    if (onComplete && typeof onComplete === 'function') {
      onComplete();
    }
    toast({
      title: "Advertisement Completed",
      description: "Thank you for watching.",
    });
  };

  return (
    <Card className={`ad-container max-w-md mx-auto ${isActive ? 'border-primary' : ''}`}>
      <CardContent className="p-6">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="mb-4">{description}</p>
          
          {/* This would be where actual ad content is displayed */}
          <div className="bg-gray-100 h-40 mb-4 flex items-center justify-center rounded-md">
            <p className="text-gray-500">Ad Content Would Display Here</p>
          </div>
          
          {isActive ? (
            <div className="text-center">
              <p className="mb-2">Please wait {timeRemaining} seconds</p>
              <Button disabled className="w-full">
                Skip ({timeRemaining}s)
              </Button>
            </div>
          ) : (
            <Button onClick={handleComplete} className="w-full">
              Close
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Advertisement;
