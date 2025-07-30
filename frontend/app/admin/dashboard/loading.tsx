"use client";

import { Loader2 } from "lucide-react";

export default function AdminDashboardLoading() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
        <p className="text-lg font-medium text-muted-foreground">
          Loading dashboard...
        </p>
      </div>
    </div>
  );
}
