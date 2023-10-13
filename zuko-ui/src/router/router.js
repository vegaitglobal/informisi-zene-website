import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/index';
import ContactPage from '../pages/contact.page';
import AboutPage from '../pages/about.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'contact',
    element: <ContactPage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
]);

export default router;
