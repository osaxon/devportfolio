import React from 'react';

import { PostPage } from '@/components/Pages'

import { Spinner } from '../../../components/Atoms';

async function getPostData(slug){
    const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000/api/" : "https://www.olisaxon.co.uk/api/"
    const post = await fetch(`${BASE_URL}get-post/?slug=${slug}`)
    return (await post.json())
}

export default async function Page({ params: { slug }}) {
    const _post = getPostData(slug)
    const post = await _post

    return (
        <main className='layout'>
            <React.Suspense fallback={<Spinner />}>
                <PostPage post={post} />
            </React.Suspense>
        </main>
    )
}