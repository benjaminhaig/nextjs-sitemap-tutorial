import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

export async function GET(request: Request) {
    const res = await fetch("http://127.0.0.1:8090/api/collections/posts/records", { cache: 'no-store' });
    const json = await res.json();
    const data: any[] = json['items'];

    const fields: ISitemapField[] = data.map((e: any) => ({ loc: `https://localhost:3000/blog/${e['slug']}`, lastmod: new Date().toISOString() })
    )

    return getServerSideSitemap(fields);
}