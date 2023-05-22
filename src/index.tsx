import { App } from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import '../src/i18n';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
const store = setupStore();

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query charactersQuery {
        characters {
          results {
            name
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </Suspense>
);
