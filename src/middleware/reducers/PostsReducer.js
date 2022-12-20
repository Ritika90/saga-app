import { actions } from '../actions/posts'

const { LIST_POSTS, POST_BY_ID } = actions.PUT

const initialState = {
  listPosts: [],
  listSinglePost: {}
}

const PostsReducer = (state = initialState, action = {}) => {
  if (action.type === LIST_POSTS) {
    return { ...state, listPosts: action.payload }
  }
  if (action.type === POST_BY_ID) {
    return { ...state, listSinglePost: action.payload }
  }
  return state
}

export default PostsReducer
