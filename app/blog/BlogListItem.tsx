import Link from 'next/link'
import React from 'react'

type Props = {
    title: string,
    slug: string,

}

const BlogListItem = ({ title, slug }: Props) => {
    return (
        <div className='p-8 border'>
            <h2 className='text-2xl mb-4'>{title}</h2>
            <Link href={`/blog/${slug}`} className='bg-blue-500 text-white p-4 rounded'>Read More</Link>
        </div>
    )
}

export default BlogListItem