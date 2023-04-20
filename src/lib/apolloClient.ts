import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://adda-fa7i.onrender.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  //   const token = getStorage('accessToken');
  const token = 'token';
  console.log('[apolloClient.js]', token);

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
