import React from 'react';
import { App } from './App';
import './index.css';
import ProblemPage from './pages/ProblemPage';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

const problemView = document.getElementById('problemView');
if (problemView) {
  const root = createRoot(problemView);
  root.render(<ProblemPage />);
}
