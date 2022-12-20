import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getPostById } from "middleware/actions/posts";

function SinglePost() {
  const dispatch = useDispatch();

  const { listSinglePost } = useSelector(
    (state) => ({
      listSinglePost: state.PostsReducer.listSinglePost,
    }),
    shallowEqual
  );
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(getPostById(id));
  }, [id]);

  console.log(listSinglePost);

  return (
    <div>
      <h2>SinglePost</h2>
      <h5>{listSinglePost.title}</h5>
      <h6>{listSinglePost.body}</h6>
    </div>
  );
}

export default SinglePost;
