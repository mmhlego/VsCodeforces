import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Contests from '../pages/Contests';
import { Home } from '../pages/Home';
import Problems from '../pages/Problems';
import TestPage from '../pages/TestPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contests',
    element: <Contests />,
  },
  {
    path: '/problems',
    element: <Problems />,
  },
  {
    path: '/profile',
    element: <p>Profile :D</p>,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
]);
