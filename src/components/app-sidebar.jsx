"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Calendar,
  Settings2,
  SquareTerminal,
  Home,
  Zap,
  Brain,
  Sparkles,
  Activity,
  MessageSquare,
  Wand2,
  History,
  Gamepad2,
  MoreHorizontal,
  Briefcase,
} from "lucide-react";
import { usePathname } from "next/navigation"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "书籍",
      icon: BookOpen,
      items: [
        {
          title: "总览",
          url: "/overview",
          icon: Home,
        },
        {
          title: "动机",
          url: "/motivation",
          icon: Zap,
        },
        {
          title: "学习力",
          url: "/learning",
          icon: Brain,
        },
        {
          title: "创造力",
          url: "/creativity",
          icon: Sparkles,
        },
        {
          title: "心流",
          url: "/flow",
          icon: Activity,
        },
      ],
    },
    {
      title: "日程",
      url: "#",
      icon: Calendar,
      items: [
        {
          title: "日待办",
          url: "/schedule",
        },
        {
          title: "周待办",
          url: "/schedule/week",
        },
      ],
    },
    {
      title: "AI",
      icon: Bot,
      items: [
        {
          title: "AI 对话",
          url: "/ai-chat",
          icon: MessageSquare,
        },
        {
          title: "AI Prompt",
          url: "/ai-prompt",
          icon: Wand2,
        },
        {
          title: "AI History",
          url: "/ai-history",
          icon: History,
        },
        {
          title: "AI Playground",
          url: "/ai-playground",
          icon: Gamepad2,
        },
      ],
    },
    {
      title: "其他",
      icon: MoreHorizontal,
      items: [
        {
          title: "有意义的工作",
          url: "/meaningful-work",
          icon: Briefcase,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({
  ...props
}) {
  const pathname = usePathname()

  // 根据当前路径更新导航数据
  const navMainWithActive = React.useMemo(() => {
    return data.navMain.map(section => ({
      ...section,
      // 检查当前路径是否匹配该部分的任何子项
      isActive: section.items?.some(item => pathname === item.url),
      items: section.items?.map(item => ({
        ...item,
        // 检查当前路径是否匹配该项
        isActive: pathname === item.url
      }))
    }))
  }, [pathname])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainWithActive} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
