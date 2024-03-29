import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getStorage } from './../utils/storage';

const httpLink = createHttpLink({
  uri: 'https://adda-fa7i.onrender.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = getStorage('accessToken');
  

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
