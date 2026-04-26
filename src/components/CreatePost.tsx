import React, { useState } from 'react';

interface NewPost {
  title: string;
  userId: number;
}

const CreatePost: React.FC = () => {
  const [postTitle, setPostTitle] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg(null);

    try {
      const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: postTitle,
          userId: 1, 
        } as NewPost),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('API Response Success:', result);
        setStatusMsg({ type: 'success', text: `Success! Post created with ID: ${result.id}` });
        setPostTitle(''); 
      } else {
        throw new Error('Failed to create post');
      }
    } catch (err) {
        console.error('API Error:', err);
      setStatusMsg({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white shadow-lg rounded-2xl border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Add New Post</h2>
      
      <form onSubmit={handlePostSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">Title</label>
          <input
            type="text"
            placeholder="Write something interesting..."
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg font-medium text-white transition-all ${
            isSubmitting 
              ? 'bg-indigo-300 cursor-not-allowed' 
              : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95'
          }`}
        >
          {isSubmitting ? 'Posting...' : 'Create Post'}
        </button>
      </form>

      {statusMsg && (
        <div className={`mt-6 p-3 rounded-lg text-sm text-center font-medium ${
          statusMsg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {statusMsg.text}
        </div>
      )}
    </div>
  );
};

export default CreatePost;