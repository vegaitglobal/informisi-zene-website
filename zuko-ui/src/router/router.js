import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/index';
import ContactPage from '../pages/contact.page';
import AboutPage from '../pages/about.page';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import DonationsPage from '../pages/donations.page';
import NewsPage from '../pages/news.page';
import PostPage from '../pages/post.page';
import PublicationsPage from '../pages/publications.page';
import OpportunitiesPage from '../pages/opportunities.page';


const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper><HomePage /></PageWrapper>,
  },
  {
    path: 'contact',
    element: <PageWrapper><ContactPage /></PageWrapper>,
  },
  {
    path: 'about',
    element: <PageWrapper><AboutPage /></PageWrapper>,
  },
  {
    path: 'donations',
    element: <PageWrapper><DonationsPage /></PageWrapper>,
  },
  {
    path: 'news',
    element: <PageWrapper><NewsPage /></PageWrapper>,
  },
  {
    path: 'opportunities',
    element: <PageWrapper><OpportunitiesPage /></PageWrapper>,
  },
  {
    path: 'post/:id',
    element: <PageWrapper><PostPage /></PageWrapper>,
  },
  {
    path: 'publications/:id',
    element: <PageWrapper><PublicationsPage /></PageWrapper>,
  },
]);

export default router;
