import { App } from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import '../src/i18n';
import { Suspense } from 'react';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
