import { combineReducers } from "redux";

import PostsReducer from "./PostsReducer";

const appReducer = combineReducers({
  PostsReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
