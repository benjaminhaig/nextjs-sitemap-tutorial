import React from 'react'
import BlogListItem from './BlogListItem'

const page = async () => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records')
    const json = await res.json()
    const items: any[] = json['items']

    return (
        <section>
            <h1 className='text-xl'>The Blog!</h1>
            <h2 className='text-lg'>Read more about sitemaps in the articles below:</h2>
            {items.map((e) => <BlogListItem title={e['title']} slug={e['slug']} />)}
        </section>
    )
}

export default page