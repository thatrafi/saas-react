import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { componentRegistry } from 'route/registry';
import routes from './data.json';

export const createRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} element={componentRegistry[route.component]} />
    ))}
  </Routes>
);

export const pathTo = (comp, params) => {
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
