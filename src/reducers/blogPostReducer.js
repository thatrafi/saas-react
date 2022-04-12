import { createSlice } from '@reduxjs/toolkit';

const initialState = { PostsData: [] };

const blogPostSlice = createSlice({
  name: 'BlogPost',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.PostsData = action.payload.data;
    }
  }
});

export const blogPostActions = blogPostSlice.actions;
export default blogPostSlice.reducer;
