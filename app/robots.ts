import { MetadataRoute } from 'next';
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

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
