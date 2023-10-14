import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/index';
import ContactPage from '../pages/contact.page';
import PageWrapper from '../components/PageWrapper/PageWrapper';


const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper><HomePage /></PageWrapper>,
  },
  {
    path: 'contact',
    element: <PageWrapper><ContactPage /></PageWrapper>,
  },
]);

export default router;
