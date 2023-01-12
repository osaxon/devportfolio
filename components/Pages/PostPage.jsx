import Image from 'next/image';
import React from 'react';

import { Spinner } from '../Atoms';
import { PostContent } from '../Organisms'


const PostPage = async ({post}) => {

  return (
    <React.Suspense fallback={<Spinner />}>
      <PostContent post={post} />
    </React.Suspense>
  )
}

export default PostPage