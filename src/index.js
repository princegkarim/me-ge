import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import style from '../public/style.css';

const root = createRoot(document.getElementById('root'));

root.render(<App />);
