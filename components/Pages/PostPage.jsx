'use client'
import { RichText } from '@graphcms/rich-text-react-renderer';
import { divide } from 'lodash';
import Image from 'next/image';
import Prism from 'prismjs';
import React, { useEffect, useState } from 'react';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-jsx';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { Spinner } from '../Atoms';


const PostPage = ({post}) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
        Prism.highlightAll();
      },[]);

    if(!mounted) return null

  return (
    <React.Suspense fallback={<Spinner />}>
    <RichText 
        content={post?.content.raw} 
        renderers={{
        code_block: ({ children }) => {
          return (
            <div className='Code'>
                <pre className=''>
                    <code className='line-numbers language-jsx'>{children}</code>
                </pre>
            </div>
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