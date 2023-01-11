import { PostPage } from '@/components/Pages'

export default async function Page({ params: { slug }}) {
    const data = await fetch(`http://localhost:3000/api/get-post/?slug=${slug}`)
    const post = await data.json()

    return (
        <main className='layout'>
            <PostPage post={post} />
        </main>
    )
}