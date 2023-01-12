'use client'
import { RichText } from '@graphcms/rich-text-react-renderer';
import { divide } from 'lodash';
import Image from 'next/image';
import Prism from 'prismjs';
import React, { useEffect, useState } from 'react';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';

import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { Spinner } from '../Atoms';


const PostPage = ({post}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    },[]);

    useEffect(() => {
      Prism.highlightAll();
    })

  if(!mounted) return null

  return (
    <React.Suspense fallback={<Spinner />}>
    <RichText 
        content={post?.content.raw} 
        renderers={{
        code_block: ({ children }) => {
          return (
                <pre className='language-jsx rounded-md'>
                    <code className='language-jsx'>{children}</code>
                </pre>
          );
        },
        ol: ({ children }) => (
          <ol className='font-bold'>
            <p>{children}</p>
          </ol>
        ),
      }} />
    </React.Suspense>
  )
}

export default PostPage