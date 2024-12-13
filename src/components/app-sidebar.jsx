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
  Settings2,
  SquareTerminal,
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
const data = {
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
      title: "书籍内容",
      url: "/",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "总览",
          url: "/overview",
        },
        {
          title: "动机",
          url: "/motivation",
        },
        {
          title: "学习力",
          url: "/learning",
        },
        {
          title: "创造力",
          url: "/creativity",
        },
        {
          title: "心流",
          url: "/flow",
        },
      ],
    },
    {
      title: "日程",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "AI 对话",
          url: "/chat",
        },
        {
          title: "日程",
          url: "/schedule",
        },
      ],
    },
    {
      title: "AI",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "AI 对话",
          url: "/ai-chat",
        },
        {
          title: "AI Prompt",
          url: "/ai-prompt",
        },
        {
          title: "AI History",
          url: "/ai-history",
        },
        {
          title: "AI Playground",
          url: "/ai-playground",
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
