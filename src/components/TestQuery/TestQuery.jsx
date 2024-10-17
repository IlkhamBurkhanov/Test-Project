import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../api/Api"; // Import the fetchPosts function
import useStore from "../../store/store";
import useCartStore from "../../store/cardStore";
import { ProductionQuantityLimits } from "@mui/icons-material";
const PostsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"], // Specify the query key
    queryFn: fetchPosts, // Specify the query function
  });

  const { count, increment, decrement } = useStore();
  const { addToCart } = useCartStore();
  const { cart, removeFromCart, clearCart } = useCartStore();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts: {error.message}</div>;
  const product = [
    {
      id: 1,
      name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
      id: 2,
      name: "qui est esse",
    },
    {
      id: 3,
      name: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    },
    {
      id: 4,
      name: "eum et est occaecati",
    },
    {
      id: 5,
      name: "nesciunt quas odio",
    },
  ];
  console.log(data, "DATA");
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        {product.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart </button>
          </div>
        ))}
      </div>
      <div>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default PostsList;
