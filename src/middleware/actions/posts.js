export const actions = {
  GET: {
    LIST_POSTS: "LIST_GET_POSTS",
    POST_BY_ID: "POST_BY_GET_ID",
  },
  PUT: {
    LIST_POSTS: "LIST_PUT_POSTS",
    POST_BY_ID: "POST_BY_PUT_ID",
  },
};

export const getPosts = (body, onSuccess) => ({
  type: actions.GET.LIST_POSTS,
  payload: { body, onSuccess },
});

export const getPostById = (id, onSuccess) => ({
  type: actions.GET.POST_BY_ID,
  payload: { id, onSuccess },
});

export const putPosts = res => ({
  type: actions.PUT.LIST_POSTS,
  payload: res,
})

export const putPostById = res => ({
  type: actions.PUT.POST_BY_ID,
  payload: res,
})