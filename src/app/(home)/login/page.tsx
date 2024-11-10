'use client'
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

const AuthPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F9F2] p-4">
      <div className="w-full max-w-md">
        <Card className="border-[#A0D683]/20">
          <CardHeader className="text-center space-y-1">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#769C5D] via-[#A0D683] to-[#B8E49B] bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-500">
              Login or create an account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#A0D683]/10">
                <TabsTrigger 
                  value="login"
                  className="data-[state=active]:bg-[#A0D683] data-[state=active]:text-white"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger 
                  value="register"
                  className="data-[state=active]:bg-[#A0D683] data-[state=active]:text-white"
                >
                  Register
                </TabsTrigger>
              </TabsList>

              {/* Login Tab Content */}
              <TabsContent value="login" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email"
                        className="pl-9 border-[#A0D683]/20 focus:ring-[#A0D683] focus:border-[#A0D683]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-9 pr-9 border-[#A0D683]/20 focus:ring-[#A0D683] focus:border-[#A0D683]"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <Button className="w-full bg-[#A0D683] hover:bg-[#769C5D] transition-colors">
                    Sign In
                  </Button>
                </div>
                <div className="text-center text-sm">
                  <a href="#" className="text-[#769C5D] hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </TabsContent>

              {/* Register Tab Content */}
              <TabsContent value="register" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="register-name" 
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-9 border-[#A0D683]/20 focus:ring-[#A0D683] focus:border-[#A0D683]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="register-email" 
                        type="email"
                        placeholder="Enter your email"
                        className="pl-9 border-[#A0D683]/20 focus:ring-[#A0D683] focus:border-[#A0D683]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="register-password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-9 pr-9 border-[#A0D683]/20 focus:ring-[#A0D683] focus:border-[#A0D683]"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <Button className="w-full bg-[#A0D683] hover:bg-[#769C5D] transition-colors">
                    Create Account
                  </Button>
                </div>
                <div className="text-center text-sm text-gray-500">
                  By creating an account, you agree to our{' '}
                  <a href="#" className="text-[#769C5D] hover:underline">
                    Terms of Service
                  </a>
                  {' '}and{' '}
                  <a href="#" className="text-[#769C5D] hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;