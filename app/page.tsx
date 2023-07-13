import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className='text-center text-3xl font-bold mb-8'>Homepage - Nextjs Sitemap Tutorial</h1>
      <p className="text-lg text-center">Learn how to create a static or dynamic sitemap for your next js application!</p>
      <Image src={'/next-sitemap-thumbnail.png'} alt="Next Js Sitemap Tutorial!" width={480} height={270} className="mx-auto rounded" />
      <p className="text-center">By: Ben Haig, please subscribe if you find the content useful!</p>
      <Link href={'/blog'}><p className="text-lg text-center mt-4 text-blue-500">Blog</p></Link>
    </main>
  )
}
