import { App } from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/i18n';
const store = setupStore();

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
);
