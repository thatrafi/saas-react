import React from 'react';
import Footer from './molecules/footer/Footer';
import Header from './molecules/header/Header';

import './styles/style.css';
import PricingPage from './pages/Pricing/PricingPage';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ProductPage from './pages/Product/ProductPage';
import BlogPage from './pages/Blog/BlogPage';
import BlogPostPage from './pages/Blog Post/BlogPostPage';
import AboutPage from './pages/About us/AboutPage';
import ContactPage from './pages/Contact/ContactPage';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/post">
          <BlogPostPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/pricing">
          <PricingPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
