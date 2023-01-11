import { gql } from '@apollo/client';

import client from '../../lib/apolloClient';

const POST_PAGE = gql`
  query PostPage($cursor: String) {
    postsConnection(first: 2, after: $cursor) {
      edges {
        cursor
        node {
          title
          slug
          excerpt
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
        pageSize
      }
    }
  }
`;

export default async function handler(req, res) {
  const cursor = req.query.cursor || null;

  const data = await client.query({
    query: POST_PAGE,
    variables: { cursor: cursor },
  });

  return data;
}
