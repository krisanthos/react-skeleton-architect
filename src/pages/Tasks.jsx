
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Advertisement from "@/components/Advertisement";
import MobileHeader from "@/components/MobileHeader";

const Tasks = () => {
  const { toast } = useToast();
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showingAd, setShowingAd] = useState(false);
  const [currentAdTask, setCurrentAdTask] = useState(null);
  
  // Mock data - would come from API in real app
  const availableTasks = [
    {
      id: 1,
      title: "Complete a Short Survey",
      description: "Answer 10 questions about your shopping habits",
      reward: 250,
      timeEstimate: "5 min",
      difficulty: "Easy",
      type: "survey"
    },
    {
      id: 2,
      title: "Watch Product Video",
      description: "Watch a 2-minute video about a new smartphone",
      reward: 100,
      timeEstimate: "2 min",
      difficulty: "Easy",
      type: "video"
    },
    {
      id: 3,
      title: "Website Feedback",
      description: "Visit a website and provide detailed feedback on its usability",
      reward: 400,
      timeEstimate: "10 min",
      difficulty: "Medium",
      type: "feedback"
    },
    {
      id: 4,
      title: "App Testing",
      description: "Download an app and complete specific tasks for testing",
      reward: 500,
      timeEstimate: "15 min",
      difficulty: "Medium",
      type: "test"
    },
    {
      id: 5,
      title: "Watch Advertisement",
      description: "Watch a 30-second advertisement for a new product",
      reward: 50,
      timeEstimate: "30 sec",
      difficulty: "Easy",
      type: "ad"
    }
  ];

  const startTask = (taskId) => {
    setCurrentTaskId(taskId);
    
    // Simulate task completion after a timeout
    const task = availableTasks.find(t => t.id === taskId);
    
    if (task.type === "ad") {
      // For ad tasks, we show the ad component
      setShowingAd(true);
      setCurrentAdTask(task);
    } else {
      // For other tasks, simulate completion after delay
      setTimeout(() => {
        completeTask(taskId);
      }, 2000);
    }
  };
  
  const handleAdCompletion = () => {
    // Close the ad and complete the task
    setShowingAd(false);
    if (currentAdTask) {
      completeTask(currentAdTask.id);
      setCurrentAdTask(null);
    }
  };
  
  const completeTask = (taskId) => {
    const task = availableTasks.find(t => t.id === taskId);
    
    setCompletedTasks(prev => [...prev, taskId]);
    setCurrentTaskId(null);
    
    toast({
      title: "Task Completed!",
      description: `You've earned ₦${task.reward} for completing this task!`,
    });
  };
  
  const isTaskCompleted = (taskId) => {
    return completedTasks.includes(taskId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader />
      <div className="container mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Available Tasks</h1>
        <p className="text-gray-600 mb-8">Complete these tasks to earn money</p>
        
        {showingAd && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Advertisement 
              onComplete={handleAdCompletion}
              duration={10}
              title={currentAdTask?.title || "Advertisement"}
              description={currentAdTask?.description || "Watch this advertisement to earn rewards"}
            />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableTasks.map(task => (
            <Card key={task.id} className={isTaskCompleted(task.id) ? "border-green-500/50 bg-green-50/50" : ""}>
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle>{task.title}</CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </div>
                  {isTaskCompleted(task.id) && (
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs font-medium">
                      Completed
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Reward:</span>
                  <span className="font-medium">₦{task.reward}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Time:</span>
                  <span>{task.timeEstimate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Difficulty:</span>
                  <span>{task.difficulty}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  disabled={isTaskCompleted(task.id) || currentTaskId !== null || showingAd}
                  onClick={() => startTask(task.id)}
                >
                  {currentTaskId === task.id ? "Working..." : 
                    isTaskCompleted(task.id) ? "Completed" : "Start Task"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
