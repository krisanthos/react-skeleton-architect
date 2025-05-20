
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import MobileHeader from "@/components/MobileHeader";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Admin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("registrations");
  
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

  // Mock all users data for the dashboard
  const allUsers = [
    {
      id: 101,
      name: "Mary Johnson",
      email: "mary@example.com",
      phone: "+2348012345678",
      joinDate: "2025-04-15",
      status: "active",
      walletBalance: 15000,
      tasksCompleted: 25,
      totalEarned: 12500
    },
    {
      id: 102,
      name: "Robert Brown",
      email: "robert@example.com",
      phone: "+2349087654321",
      joinDate: "2025-04-18",
      status: "active",
      walletBalance: 8000,
      tasksCompleted: 14,
      totalEarned: 7000
    },
    {
      id: 103,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      phone: "+2348023456789",
      joinDate: "2025-04-25",
      status: "inactive",
      walletBalance: 3000,
      tasksCompleted: 6,
      totalEarned: 3000
    },
    {
      id: 104,
      name: "Michael Adams",
      email: "michael@example.com",
      phone: "+2347012345678",
      joinDate: "2025-05-02",
      status: "active",
      walletBalance: 12000,
      tasksCompleted: 18,
      totalEarned: 9000
    }
  ];

  // Mock transaction data for charts
  const transactionData = [
    { date: '05/10', deposits: 45000, withdrawals: 20000, tasks: 12000 },
    { date: '05/11', deposits: 52000, withdrawals: 25000, tasks: 15000 },
    { date: '05/12', deposits: 48000, withdrawals: 22000, tasks: 13500 },
    { date: '05/13', deposits: 61000, withdrawals: 28000, tasks: 16200 },
    { date: '05/14', deposits: 55000, withdrawals: 24000, tasks: 14700 },
    { date: '05/15', deposits: 58000, withdrawals: 26000, tasks: 15900 },
    { date: '05/16', deposits: 65000, withdrawals: 30000, tasks: 17500 },
  ];

  // Mock user activity data for pie chart
  const userActivityData = [
    { name: 'Active Users', value: 65 },
    { name: 'Inactive Users', value: 25 },
    { name: 'New Users', value: 10 },
  ];
  
  const COLORS = ['#0088FE', '#FF8042', '#FFBB28'];

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
    <div className="min-h-screen bg-gray-50">
      <MobileHeader />
      <div className="container mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{allUsers.length}</div>
              <p className="text-xs text-muted-foreground mt-1">+2 new users today</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Deposits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦384,000</div>
              <p className="text-xs text-muted-foreground mt-1">+₦15,000 from yesterday</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Tasks Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">63</div>
              <p className="text-xs text-muted-foreground mt-1">+12 from yesterday</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Transaction Overview</CardTitle>
              <CardDescription>7-day transaction history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ChartContainer 
                  config={{
                    deposits: { color: "#4ade80" },
                    withdrawals: { color: "#f87171" },
                    tasks: { color: "#60a5fa" }
                  }}
                >
                  <LineChart data={transactionData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                    />
                    <Line type="monotone" dataKey="deposits" stroke="#4ade80" strokeWidth={2} />
                    <Line type="monotone" dataKey="withdrawals" stroke="#f87171" strokeWidth={2} />
                    <Line type="monotone" dataKey="tasks" stroke="#60a5fa" strokeWidth={2} />
                  </LineChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
              <CardDescription>Distribution of user activity status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={userActivityData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, value}) => `${name}: ${value}%`}
                    >
                      {userActivityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            <TabsTrigger value="registrations">
              Pending Registrations ({pendingRegistrations.length})
            </TabsTrigger>
            <TabsTrigger value="deposits">
              Pending Deposits ({pendingDeposits.length})
            </TabsTrigger>
            <TabsTrigger value="users">
              All Users
            </TabsTrigger>
            <TabsTrigger value="transactions">
              Transactions
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
          
          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>Complete list of registered users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Join Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Tasks</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {allUsers.map(user => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.joinDate}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              user.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {user.status === 'active' ? 'Active' : 'Inactive'}
                            </span>
                          </TableCell>
                          <TableCell>{user.tasksCompleted}</TableCell>
                          <TableCell>₦{user.walletBalance.toLocaleString()}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="transactions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>All user transactions across the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Mary Johnson</TableCell>
                        <TableCell>Deposit</TableCell>
                        <TableCell className="text-green-600">+₦10,000</TableCell>
                        <TableCell>2025-05-18</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Robert Brown</TableCell>
                        <TableCell>Task Reward</TableCell>
                        <TableCell className="text-green-600">+₦500</TableCell>
                        <TableCell>2025-05-18</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Sarah Wilson</TableCell>
                        <TableCell>Withdrawal</TableCell>
                        <TableCell className="text-red-600">-₦5,000</TableCell>
                        <TableCell>2025-05-17</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Michael Adams</TableCell>
                        <TableCell>Deposit</TableCell>
                        <TableCell className="text-green-600">+₦8,000</TableCell>
                        <TableCell>2025-05-17</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
