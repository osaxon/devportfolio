import { gql } from '@apollo/client';
import uniq from 'lodash/uniq';

import client from './apolloClient';
import { buildImage } from './cloudinary';

const ALL_BLOG_POSTS = gql`
  query Posts {
    posts(first: 2) {
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

export const TAGS = gql`
  query tags {
    posts {
      slug
      tags
    }
  }
`;

export const PROJECTS_QUERY = gql`
  query MyProjectsQuery {
    projects(orderBy: publishedAt_DESC) {
      name
      slug
      coverImage
      shortDescription
      tags
      url
      content {
        html
        raw
      }
    }
  }
`;

export const POST_PAGE = gql`
  query MyQuery($first: Int, $cursor: String) {
    postsConnection(first: $first, after: $cursor) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        pageSize
        startCursor
      }
      edges {
        cursor
        node {
          id
          slug
          title
          coverImage
          tags
        }
      }
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
export function extractTags(data) {
  const tags = [];
  data.forEach((post) => post.tags.forEach((tag) => tags.push(tag)));
  return uniq(tags);
}

export const getTags = async () => {
  const data = await client.query({
    query: TAGS,
  });
  const tags = extractTags(data.data.posts);
  return tags;
};

// get all blog posts and tags for /posts page
export const getAllPosts = async () => {
  try {
    const posts = await client.query({
      query: ALL_BLOG_POSTS,
    });
    if (posts) {
      const data = {
        posts: posts.data.posts,
        tags: extractTags(posts.data.posts),
      };
      return data;
    }
  } catch (err) {
    return Promise.reject(new Error('Oh no!..'));
  }
};

export const getPage = async (first = 2, cursor) => {
  const {
    posts: { data },
  } = await client.query({
    query: POST_PAGE,
    variables: { first, cursor },
  });

  return data;
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

export const sendMessage = async (data) => {
  const res = await fetch('/api/sendgrid', {
    body: JSON.stringify({
      email: data.email,
      name: data.name,
      message: data.message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  await res.json();
  if (res.error) {
    return;
  }
  return res;
};

async function getProjectsData() {
  const res = await client.query({
    query: PROJECTS_QUERY,
  });
  const projects = res.data.projects;
  console.log(res);
  return projects;
}

export async function fetchPosts({ pageParam }) {
  const data = await client.query({
    query: POST_PAGE,
    variables: { first: 1, cursor: pageParam },
  });
  return data;
}
