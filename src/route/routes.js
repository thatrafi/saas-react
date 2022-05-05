import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { componentRegistry } from 'route/registry';
export const routes = [
  {
    title: 'Home',
    path: '/',
    containParam: false,
    isHiddenNav: false,
    params: [],
    component: 'home'
  },
  {
    title: 'Product',
    path: '/product',
    containParam: false,
    isHiddenNav: false,
    params: [],
    component: 'product'
  },
  {
    title: 'Pricing',
    path: '/pricing',
    containParam: false,
    isHiddenNav: false,
    params: [],
    component: 'pricing'
  },
  {
    title: 'Blog',
    path: '/blog',
    containParam: false,
    isHiddenNav: false,
    params: [],
    component: 'blog'
  },
  {
    title: 'Blog Post',
    path: '/post/:postId',
    containParam: false,
    isHiddenNav: true,
    params: [],
    component: 'blogPost'
  },
  {
    title: 'About',
    path: '/about',
    containParam: false,
    isHiddenNav: false,
    params: [],
    component: 'about'
  },
  {
    title: 'Contact',
    path: '/contact',
    containParam: false,
    isHiddenNav: false,
    params: [],
    component: 'contact'
  },
  {
    title: 'Typography',
    path: '/typography',
    containParam: false,
    isHiddenNav: true,
    params: [],
    component: 'typography'
  },
  {
    title: 'Error Page',
    path: '*',
    containParam: false,
    isHiddenNav: true,
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

export const createTo = (comp, params) => {
  let location = useLocation();
  const data = routes.find((item) => item.component === comp).path;
  console.log(location);
  console.log(data);
  console.log(params);
};
