import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import './index.css';
import client from './lib/apolloClient';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
        <App />
    </Provider>
    </ApolloProvider>
);
