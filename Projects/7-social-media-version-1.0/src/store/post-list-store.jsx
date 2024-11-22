/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        rections: reactions,
        userId: "user_g",
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "Going to Goa",
    body: "Hii Friends, I am going to Goa for my vacations. Hope to enjoy a lot . peace out",
    rections: 2,
    userId: "user_g",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to Mumbai",
    body: "Hii Friends, I am going to mumbai for my vacations. Hope to enjoy a lot . peace out",
    rections: 12,
    userId: "user_12",
    tags: ["vacation", "Mumbai", "Enjoying", "GoaTrip"],
  },
  {
    id: "3",
    title: "pass ho gaya",
    body: "B.tech complete ho gaya bhai log aur meri job bhi lag gayi Google mei",
    rections: 120000,
    userId: "user_ravi",
    tags: ["Google", "Microsoft", "Dream Company", "Enjoy"],
  },
];

export default PostListProvider;
