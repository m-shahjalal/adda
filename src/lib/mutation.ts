import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
        email
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
        username
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($input: PostInput!) {
    createPost(data: $input) {
      data {
        id
        attributes {
          title
          content
          isCommentable
          slug
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

export const DELETE_POST_MUTATION = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      data {
        id
      }
    }
  }
`;

export const UPDATE_POST_MUTATION = gql`
  mutation UpdatePost($id: ID!, $input: PostInput!) {
    updatePost(id: $id, data: $input) {
      data {
        id
        attributes {
          title
          content
        }
      }
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateComment($input: CommentInput!) {
    createComment(data: $input) {
      data {
        id
        attributes {
          content
          user {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`;

export const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteComment($id: ID!) {
    deleteComment(id: $id) {
      data {
        id
      }
    }
  }
`;
