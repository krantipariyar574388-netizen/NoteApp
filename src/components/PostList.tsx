import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
  setLoading(true);
  try {
    const response = await axios.get('https://dummyjson.com/posts?limit=10');
    
    console.log("API Response Data:", response.data); 
    console.log("Posts Array:", response.data.posts);

    setPosts(response.data.posts);
  } catch (err) {
    console.error("Error fetching data:", err);
    setError('Failed to fetch posts.');
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Latest Posts</h1>
        <button
          onClick={fetchPosts}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition"
        >
          {loading ? 'Refreshing...' : 'Refresh Posts'}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {loading && <p className="text-gray-500">Loading posts...</p>}

      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold capitalize mb-2">{post.title}</h2>
            <p className="text-gray-600">
              {post.body.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;