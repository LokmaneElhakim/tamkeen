"use client";

import type React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart3,
  Users,
  BookUser,
  Calendar,
  Building2,
  Settings,
  LogOut,
  User,
  ChevronUp,
  Database,
} from "lucide-react";

const navigation = [
  {
    id: "dashboard",
    title: "لوحة التحكم",
    icon: BarChart3,
    description: "إحصائيات ونظرة عامة",
  },
  {
    id: "participants",
    title: "المشاركون",
    icon: Users,
    description: "إدارة المشاركين",
  },
  {
    id: "mentors",
    title: "المدربون",
    icon: BookUser,
    description: "إدارة المدربين",
  },
  {
    id: "sessions",
    title: "الجلسات",
    icon: Calendar,
    description: "إدارة الجلسات التدريبية",
  },
  {
    id: "companies",
    title: "الشركات",
    icon: Building2,
    description: "الشركات المشاركة",
  },
];

interface AdminSidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export function AdminSidebar({ activeView, onViewChange }: AdminSidebarProps) {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#0d2a5e] to-[#04174d] text-white">
            <Database className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#04174d]">
              تمكين غرداية
            </span>
            <span className="text-xs text-gray-500">لوحة الإدارة</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#04174d] font-semibold">
            إدارة البرنامج
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.id)}
                    isActive={activeView === item.id}
                    tooltip={state === "collapsed" ? item.title : undefined}
                    className={`w-full ${
                      activeView === item.id
                        ? "bg-gradient-to-r from-[#0d2a5e] to-[#04174d] text-white hover:from-[#0a2149] hover:to-[#030f35]"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.title}</span>
                    {state === "expanded" && (
                      <span className="text-xs text-gray-500 ml-auto">
                        {item.description}
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src="/placeholder-user.jpg" alt="المدير" />
                    <AvatarFallback className="rounded-lg bg-gradient-to-br from-[#0d2a5e] to-[#04174d] text-white">
                      إد
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">مدير النظام</span>
                    <span className="truncate text-xs text-gray-500">
                      admin@tamkeen.dz
                    </span>
                  </div>
                  <ChevronUp className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src="/placeholder-user.jpg" alt="المدير" />
                      <AvatarFallback className="rounded-lg bg-gradient-to-br from-[#0d2a5e] to-[#04174d] text-white">
                        إد
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        مدير النظام
                      </span>
                      <span className="truncate text-xs text-gray-500">
                        admin@tamkeen.dz
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2">
                  <User className="h-4 w-4" />
                  الملف الشخصي
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Settings className="h-4 w-4" />
                  الإعدادات
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 text-red-600">
                  <LogOut className="h-4 w-4" />
                  تسجيل الخروج
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Status Badge */}
        <div className="px-3 py-2">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-green-700">
              النظام متصل
            </span>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

export function AdminSidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
