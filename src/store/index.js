import { configureStore } from '@reduxjs/toolkit';
import blogPostReducer from 'reducers/blogPostReducer';

const store = configureStore({
  reducer: { blogPosts: blogPostReducer }
});

export default store;
