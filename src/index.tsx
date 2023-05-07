import { App } from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(<App />);
