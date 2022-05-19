import { blogPostActions } from 'reducers/blogPostReducer';

const BASE_URL = 'https://saas-project-631b9-default-rtdb.asia-southeast1.firebasedatabase.app';

export const getAllBlogPosts = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`${BASE_URL}/posts.json`, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Getting posts data failed!');
      }
      const data = response.json();

      return data;
    };
    try {
      const responseData = await sendRequest();
      let newArr = [];
      Object.keys(responseData).map((item) => {
        responseData[item]['id'] = item;

        return newArr.push(responseData[item]);
      });
      dispatch(blogPostActions.setPosts({ data: newArr }));
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
