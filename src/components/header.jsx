"use client"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import React from 'react';
import { data as sidebarData } from '@/components/app-sidebar';

// 从导航数据生成面包屑映射
const generateBreadcrumbsMap = () => {
  const map = {
    "/": { label: "首页" }
  };

  sidebarData.navMain.forEach(section => {
    section.items?.forEach(item => {
      map[item.url] = {
        label: item.title,
        parent: "/",
        section: section.title
      };
    });
  });

  return map;
};

const breadcrumbsMap = generateBreadcrumbsMap();

// 获取面包屑路径
function getBreadcrumbs(path) {
  const breadcrumbs = [];
  let currentPath = path;

  while (currentPath) {
    const breadcrumb = breadcrumbsMap[currentPath];
    if (!breadcrumb) break;

    breadcrumbs.unshift({
      path: currentPath,
      label: breadcrumb.label,
      section: breadcrumb.section
    });

    currentPath = breadcrumb.parent;
  }

  return breadcrumbs;
}

export function Header() {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={breadcrumb.path}>
                <BreadcrumbItem>
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage>
                      {breadcrumb.section && (
                        <span className="text-muted-foreground mr-1">
                          {breadcrumb.section}
                        </span>
                      )}
                      {breadcrumb.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={breadcrumb.path}>
                      {breadcrumb.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
} 