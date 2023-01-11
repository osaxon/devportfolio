import { getSinglePost } from "../../../lib/queries"

export default async function PostPage({ params: { slug }}) {

    const _post = getSinglePost(slug)
    const post = await _post

    return (
        <main>
            {JSON.stringify(post)}
        </main>
    )
}