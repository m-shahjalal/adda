import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query PostsQuery {
    posts {
      data {
        id
        attributes {
          title
          content
          isCommentable
          user {
            data {
              id
              attributes {
                username
                email
              }
            }
          }
        }
      }
    }
  }
`;
