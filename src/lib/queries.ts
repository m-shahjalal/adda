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

export const COMMENTS_BY_POST_ID_QUERY = gql`
  query comments($id: ID!) {
    posts(filters: { id: { eq: $id } }) {
      data {
        attributes {
          comments {
            data {
              id
              attributes {
                content
              }
            }
          }
        }
      }
    }
  }
`;
