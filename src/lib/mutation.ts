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
