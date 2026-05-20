import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import fs from 'fs';
import path from 'path';

function getBaseUrl() {
  const filePath = path.join(process.cwd(), 'data/site.json');
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data.url;
  } catch {
    return 'https://myltech.example.com';
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const posts = getAllPosts();

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const routes = ['', '/about', '/services', '/projects', '/blog', '/careers', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.9,
    })
  );

  return [...routes, ...blogUrls];
}
