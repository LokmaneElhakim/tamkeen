"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Shield } from "lucide-react";

export function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (
      credentials.username === "admin" &&
      credentials.password === "youth2024"
    ) {
      localStorage.setItem("adminAuth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }

    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-none bg-white dark:bg-[#0e1a3a]">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-[#e0e7ff]/30 flex items-center justify-center mb-4">
          <Shield className="h-6 w-6 text-[#04174d]" />
        </div>
        <CardTitle className="text-[#04174d] dark:text-white">
          Admin Login
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Access the admin dashboard to manage registrations and attendance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              required
              value={credentials.username}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
              placeholder="Enter username"
              className="bg-white dark:bg-[#0e1a3a] text-[#04174d] dark:text-white ring"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              className="bg-white dark:bg-[#0e1a3a] text-[#04174d] dark:text-white"
              required
              value={credentials.password}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0d2a5e] to-[#04174d] hover:from-[#0a2149] hover:to-[#030f35] text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
