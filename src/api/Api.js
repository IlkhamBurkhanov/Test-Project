export const fetchPosts = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${5}`
  );

  // Check if the response is OK (status code 200-299)
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};
