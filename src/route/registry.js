import React from 'react';
import HomePage from 'pages/Home/HomePage';
import ProductPage from 'pages/Product/ProductPage';
import BlogPage from 'pages/Blog/BlogPage';
import BlogPostPage from 'pages/Blog Post/BlogPostPage';
import AboutPage from 'pages/About us/AboutPage';
import ContactPage from 'pages/Contact/ContactPage';
import PricingPage from 'pages/Pricing/PricingPage';
import TypographyPage from 'pages/Typography/TypographyPage';
import ErrorPage from 'pages/Error/ErrorPage';

export const componentRegistry = {
  pricing: <PricingPage />,
  home: <HomePage />,
  product: <ProductPage />,
  blog: <BlogPage />,
  blogPost: <BlogPostPage />,
  about: <AboutPage />,
  contact: <ContactPage />,
  typography: <TypographyPage />,
  error: <ErrorPage />
};
