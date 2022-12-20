import React, { useEffect, Children } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getPosts } from "middleware/actions/posts";

import { Link } from "react-router-dom";

function Posts() {
  const dispatch = useDispatch();

  const { listPosts } = useSelector(
    (state) => ({
      listPosts: state.PostsReducer.listPosts,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <h2>Posts</h2>

      {Children.toArray(
        listPosts &&
          listPosts.map((res) => (
            <Link to={`/posts/${res.id}`}>
              <h6>{res.title}</h6>
            </Link>
          ))
      )}
    </div>
  );
}

export default Posts;
