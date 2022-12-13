import { gql } from '@apollo/client';
import uniq from 'lodash/uniq';

import client from './apolloClient';
import { buildImage } from './cloudinary';

const ALL_BLOG_POSTS = gql`
  query Posts {
    posts {
      createdAt
      id
      tags
      date
      author {
        id
        name
        picture
      }
      title
      updatedAt
      content {
        html
      }
      coverImage
      excerpt
      slug
      readTime
      topics {
        id
        slug
        name
      }
    }
    topics(where: { NOT: {}, posts_every: {} }) {
      id
      slug
      name
    }
  }
`;

const SINGLE_POST = gql`
  query PostQuery($slug: String) {
    posts(where: { slug: $slug }) {
      content {
        html
        markdown
        raw
        text
      }
      coverImage
      date
      publishedAt
      tags
      title
      slug
      excerpt
      seo {
        id
        title
        description
        keywords
        image {
          url
        }
      }
    }
  }
`;

// GET ALL BLOG POSTS AND TAGS AS TWO ARRAYS
function extractTags(data) {
  const tags = [];
  data.forEach((post) => post.tags.forEach((tag) => tags.push(tag)));
  return uniq(tags);
}

// get all blog posts and tags for /posts page
export const getAllPosts = async () => {
  const data = await client.query({
    query: ALL_BLOG_POSTS,
  });

  return {
    posts: data.data.posts,
    tags: extractTags(data.data.posts),
  };
};

// SINGLE BLOG POST BY SLUG. RETURNS POST AND RICH TEXT CONTENT AS SEPARATE OBJECTS
export const getSinglePost = async (slug) => {
  const data = await client.query({
    query: SINGLE_POST,
    variables: {
      slug,
    },
  });

  return {
    post: data.data.posts[0],
    image: buildImage(data.data.posts[0].coverImage.public_id)
      .resize('w_800,h_600')
      .toURL(),
    content: data.data.posts[0].content,
  };
};
