import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { componentRegistry } from 'route/registry';
export const routes = [
  {
    title: 'Home',
    path: '/',
    isHiddenNav: false,
    component: 'home'
  },
  {
    title: 'Product',
    path: '/product',
    isHiddenNav: false,
    component: 'product'
  },
  {
    title: 'Pricing',
    path: '/pricing',
    isHiddenNav: false,
    component: 'pricing'
  },
  {
    title: 'Blog',
    path: '/blog',
    isHiddenNav: false,
    component: 'blog'
  },
  {
    title: 'Blog Post',
    path: '/post/:postId',
    isHiddenNav: true,
    component: 'blogPost'
  },
  {
    title: 'About',
    path: '/about',
    isHiddenNav: false,
    component: 'about'
  },
  {
    title: 'Contact',
    path: '/contact',
    isHiddenNav: false,
    component: 'contact'
  },
  {
    title: 'Typography',
    path: '/typography',
    isHiddenNav: true,
    component: 'typography'
  },
  {
    title: 'Error Page',
    path: '*',
    isHiddenNav: true,
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
  const data = routes.find((item) => item.component === comp);
  if (!data) {
    console.log(`cannot find data path ${comp}`);
    return '/';
  }
  if (params) {
    const pathName = data.path;
    const key = pathName.split(':').pop();
    const value = params[key];
    if (value !== undefined) {
      const root = pathName.split(':')[0];
      return `${root}${value}`;
    } else {
      console.log(`cannot find parameter ${Object.keys(params)}`);
      return '/';
    }
  } else {
    return data.path;
  }
};
