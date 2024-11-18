'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostsContext);
}
