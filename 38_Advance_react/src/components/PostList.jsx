/* eslint-disable react-hooks/exhaustive-deps */
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);

  //Use Effect
  useEffect(() => {
    setfetching(true);
    // console.log("fetch started");
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);
        // console.log("Fetch returned");
      });
    return () => {
      console.log("cleaning up effects");
      controller.abort();
    };
    // console.log("fetch ended");
  }, []);

  // const [dataFetched, setDataFetched] = useState(false);

  // if (!dataFetched) {
  // fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     addInitialPosts(data.posts);
  //   });
  //   setDataFetched(true);
  // }

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
