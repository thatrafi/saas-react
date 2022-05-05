import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { componentRegistry } from 'route/registry';
export const routes = [
  {
    title: 'Home',
    path: '/',
    containParam: false,
    params: [],
    component: 'home'
  },
  {
    title: 'Product',
    path: '/product',
    containParam: false,
    params: [],
    component: 'product'
  },
  {
    title: 'Pricing',
    path: '/pricing',
    containParam: false,
    params: [],
    component: 'pricing'
  },
  {
    title: 'Blog',
    path: '/blog',
    containParam: false,
    params: [],
    component: 'blog'
  },
  {
    title: 'Blog Post',
    path: '/post/:postId',
    containParam: false,
    params: [],
    component: 'blogPost'
  },
  {
    title: 'About',
    path: '/about',
    containParam: false,
    params: [],
    component: 'about'
  },
  {
    title: 'Contact',
    path: '/contact',
    containParam: false,
    params: [],
    component: 'contact'
  },
  {
    title: 'Typography',
    path: '/typography',
    containParam: false,
    params: [],
    component: 'typography'
  },
  {
    title: 'Error Page',
    path: '*',
    containParam: false,
    params: [],
    component: 'error'
  }
];

export const createRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} element={componentRegistry[route.component]} />
    ))}
  </Routes>
);
