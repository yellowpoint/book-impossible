import localFont from "next/font/local";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { CozeScript } from "@/components/coze-script"
import { ThemeProvider } from "@/components/theme-provider";
import { Firework } from "@/components/firework"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "跨越不可能 - 探索学习、创造力与心流的交织之旅",
  description: "跨越不可能是一个专注于个人成长、学习方法和创造力开发的平台。我们探索学习、创造力与心流的交织，帮助每个人突破自我，实现不可能。",
  keywords: "学习, 创造力, 心流, 个人成长, 自我提升, 学习方法",
  authors: [{ name: "跨越不可能" }],
  creator: "跨越不可能",
  publisher: "跨越不可能",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://book-impossible.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://book-impossible.vercel.app',
    title: '跨越不可能 - 探索学习、创造力与心流的交织之旅',
    description: '跨越不可能是一个专注于个人成长、学习方法和创造力开发的平台。我们探索学习、创造力与心流的交织，帮助每个人突破自我，实现不可能。',
    siteName: '跨越不可能',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '跨越不可能',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '跨越不可能 - 探索学习、创造力与心流的交织之旅',
    description: '跨越不可能是一个专注于个人成长、学习方法和创造力开发的平台。我们探索学习、创造力与心流的交织，帮助每个人突破自我，实现不可能。',
    images: ['/og-image.png'],
    creator: '@book_impossible',
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
      type: "image/svg+xml"
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png"
    }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <Header className="h-16" />
              <main className="h-[calc(100vh-4rem)]">
                {children}
              </main>
              <Toaster />
            </SidebarInset>
          </SidebarProvider>
          <CozeScript />
          <Firework />
        </ThemeProvider>
      </body>
    </html>
  );
}
