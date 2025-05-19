
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Maximize Your Earnings on Codewave",
      excerpt: "Learn strategies to optimize your task completion and increase your daily earnings.",
      date: "May 15, 2025",
      author: "John Doe",
      category: "Tips & Tricks"
    },
    {
      id: 2,
      title: "Understanding Deposit Bonuses",
      excerpt: "A detailed guide on how deposit bonuses work and how to make the most of them.",
      date: "May 10, 2025",
      author: "Jane Smith",
      category: "Guides"
    },
    {
      id: 3,
      title: "Task Completion Strategies for Beginners",
      excerpt: "New to Codewave? Here are some tips to help you get started with task completion.",
      date: "May 5, 2025",
      author: "Michael Johnson",
      category: "Beginner Guides"
    },
    {
      id: 4,
      title: "Top 5 Ways to Use Your Codewave Earnings",
      excerpt: "Smart ways to utilize the money you earn through our platform.",
      date: "April 28, 2025",
      author: "Sarah Williams",
      category: "Finance"
    },
    {
      id: 5,
      title: "User Success Story: How I Made ₦50,000 in My First Month",
      excerpt: "Read about how one of our users achieved success through dedication and strategy.",
      date: "April 20, 2025",
      author: "Robert Brown",
      category: "Success Stories"
    },
    {
      id: 6,
      title: "Updates to Our Task System: What You Need to Know",
      excerpt: "Important information about recent changes to our task distribution system.",
      date: "April 15, 2025",
      author: "Admin Team",
      category: "News"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Codewave Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest tips, guides, and news about earning online with Codewave.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <Card key={post.id} className="overflow-hidden">
              <div className="h-40 bg-primary/10 flex items-center justify-center">
                <span className="text-3xl opacity-30">📝</span>
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">By {post.author}</span>
                <Button variant="ghost" size="sm">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
