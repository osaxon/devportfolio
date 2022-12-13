import { gql } from '@apollo/client';
import uniq from 'lodash/uniq';

import client from './apolloClient';

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

// returns array of tags without duplicates from an array of blog posts
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
