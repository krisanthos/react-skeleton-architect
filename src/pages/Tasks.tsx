
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Tasks = () => {
  // Mock data - would come from API in real app
  const availableTasks = [
    {
      id: 1,
      title: "Complete a Short Survey",
      description: "Answer 10 questions about your shopping habits",
      reward: 250,
      timeEstimate: "5 min",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Watch Product Video",
      description: "Watch a 2-minute video about a new smartphone",
      reward: 100,
      timeEstimate: "2 min",
      difficulty: "Easy",
    },
    {
      id: 3,
      title: "Website Feedback",
      description: "Visit a website and provide detailed feedback on its usability",
      reward: 400,
      timeEstimate: "10 min",
      difficulty: "Medium",
    },
    {
      id: 4,
      title: "App Testing",
      description: "Download an app and complete specific tasks for testing",
      reward: 500,
      timeEstimate: "15 min",
      difficulty: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2">Available Tasks</h1>
        <p className="text-gray-600 mb-8">Complete these tasks to earn money</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableTasks.map(task => (
            <Card key={task.id}>
              <CardHeader>
                <CardTitle>{task.title}</CardTitle>
                <CardDescription>{task.description}</CardDescription>
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
                <Button className="w-full">Start Task</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
