import Link from 'next/link';
import React from 'react'

export const dynamic = 'error'
export const dynamicParams = false;

export async function generateStaticParams() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/posts/records")
    const json = await res.json()

    return json['items'].map((e: any) => ({ slug: e['slug'] }))
}

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records?slug=${slug}`)
    const json = await res.json();
    const items: any[] = json['items'];
    const filteredItems = items.filter(item => item['slug'] == slug);
    const post = filteredItems[0]

    return (
        <main className='p-4'>
            <h1 className='text-3xl text-center font-bold mb-8'>{post.title}</h1>
            <div className='mb-8 max-w-readable mx-auto' dangerouslySetInnerHTML={{ __html: post['content'] }}></div>
            <div className='flex flex-row justify-center'><Link href='/blog' className='bg-blue-500 text-white p-4 rounded'>Go Back</Link></div>
        </main>
    )
}

export default page