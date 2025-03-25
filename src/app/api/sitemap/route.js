import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://book-impossible.vercel.app';

  // 定义所有静态路由
  const routes = [
    '',
    '/happy',
    '/book',
    '/my-life-design',
    '/life-design',
    '/flow',
    '/schedule',
  ];

  // 生成 sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
      .map((route) => {
        return `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
      })
      .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 