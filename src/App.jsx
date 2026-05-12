import { useState, useEffect } from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import Footer from "./components/Footer";
import NewPostForm from "./components/NewPostForm";

function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("memory-lane-posts");
    return saved
      ? JSON.parse(saved)
      : [
          {
            title: "Learning React",
            date: "May 2026",
            content:
              "Last class I finally understood how components work together. Building everything piece by piece makes everything feel manageable.",
          },
          {
            title: "Trusting the Process",
            date: "May 2026",
            content:
              "I realized that consistency is better than speed. Everyday it feels like I am getting better.",
          },
          {
            title: "Tailwind? Tailwind... Tailwind!",
            date: "May 2026",
            content:
              "The more I use Tailwind the more natural it feels. The pre-made utilities really helps speed things up.",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("memory-lane-posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        <NewPostForm onAddPost={(newPost) => setPosts([...posts, newPost])} />

        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            date={post.date}
            content={post.content}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
