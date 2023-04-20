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
