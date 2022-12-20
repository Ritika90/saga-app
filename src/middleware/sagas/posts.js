import { takeEvery, all, call, put } from "redux-saga/effects";

import { doGet } from "providers/api";

import { actions, putPosts, putPostById } from "../actions/posts";

import endpoint from "./endpoint";

export const getPostListResults = ({ body }) =>
  doGet({ url: endpoint.posts.list, body });
export const getPostByIdResults = ({ id }) =>
  doGet({ url: `${endpoint.posts.list}/${id}` });

export function* getPostListSaga({ payload }) {
  const { body, onSuccess } = payload;
  try {
    const { data: res } = yield call(getPostListResults, { body });
    yield put(putPosts(res));
    if (typeof onSuccess === "function") {
      onSuccess(res);
    }
  } catch (err) {
    onSuccess([]);
    yield put(putPosts(null));
  }
}

export function* getPostByIdSaga({ payload }) {
  const { id, onSuccess } = payload;

  try {
    const { data: res } = yield call(getPostByIdResults, { id });
    yield put(putPostById(res));
    if (typeof onSuccess === "function") {
      onSuccess(res);
    }
  } catch (err) {
    onSuccess([]);
    yield put(putPostById(null));
  }
}

export default function* Posts() {
  yield all([
    takeEvery(actions.GET.LIST_POSTS, getPostListSaga),
    takeEvery(actions.GET.POST_BY_ID, getPostByIdSaga),
  ]);
}
