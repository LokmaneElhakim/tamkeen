"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Stats card for dashboard
interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  description?: string;
  variant?: "default" | "success" | "warning" | "danger";
}

export function StatCard({
  icon,
  label,
  value,
  description,
  variant = "default",
}: StatCardProps) {
  const variantStyles = {
    default: "bg-card border-border",
    success:
      "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900/30",
    warning:
      "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-900/30",
    danger:
      "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-900/30",
  };

  const iconStyles = {
    default: "text-primary",
    success: "text-green-500 dark:text-green-400",
    warning: "text-amber-500 dark:text-amber-400",
    danger: "text-red-500 dark:text-red-400",
  };

  return (
    <Card className={cn("border shadow-sm", variantStyles[variant])}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
          <div className={cn("h-10 w-10", iconStyles[variant])}>{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

// Sidebar item for dashboard
interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function SidebarItem({
  icon,
  label,
  isActive = false,
  onClick,
}: SidebarItemProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "w-full justify-start gap-3 px-3",
        isActive
          ? "bg-accent text-accent-foreground"
          : "hover:bg-muted hover:text-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </Button>
  );
}

// Dashboard layout component
interface DashboardProps {
  sidebarItems: SidebarItemProps[];
  title?: string;
  children: ReactNode;
  sidebarHeader?: ReactNode;
  sidebarFooter?: ReactNode;
}

export function Dashboard({
  sidebarItems,
  title,
  children,
  sidebarHeader,
  sidebarFooter,
}: DashboardProps) {
  return (
    <div className="flex h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        {sidebarHeader && (
          <div className="p-4 border-b border-border">{sidebarHeader}</div>
        )}
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <SidebarItem {...item} />
              </li>
            ))}
          </ul>
        </nav>
        {sidebarFooter && (
          <div className="p-4 border-t border-border">{sidebarFooter}</div>
        )}
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto p-6">
          {title && <h1 className="text-2xl font-semibold mb-6">{title}</h1>}
          {children}
        </div>
      </main>
    </div>
  );
}
