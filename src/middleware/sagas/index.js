import { all } from "redux-saga/effects";

import Posts from "./posts";

export default function* rootSaga() {
  yield all([Posts()]);
}
