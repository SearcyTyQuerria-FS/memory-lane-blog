import { useState } from "react";

function NewPostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
      title,
      date: new Date().toLocaleDateString(),
      content,
    };

    onAddPost(newPost);
    setTitle("");
    setContent("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-sm p-6 border border-stone-200 space-y-4"
    >
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-stone-300 rounded"
      />

      <textarea
        placeholder="Write your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-stone-300 rounded h-28"
      />

      <button
        type="submit"
        className="bg-stone-800 text-white px-4 py-2 rounded hover:bg-stone-700 transition"
      >
        Add Post
      </button>
    </form>
  );
}
 export default NewPostForm;