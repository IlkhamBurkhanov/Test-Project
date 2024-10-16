import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../api/Api"; // Import the fetchPosts function
import useStore from "../../store/store";

const PostsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"], // Specify the query key
    queryFn: fetchPosts, // Specify the query function
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts: {error.message}</div>;
  const { count, increment, decrement } = useStore();

  console.log(data, "DATA");
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default PostsList;
