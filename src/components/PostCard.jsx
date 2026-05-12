function PostCard({ title, date, content }) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-6 border border-stone-200">
      <h2 className="text-xl font-semibold text-stone-800 mb-2">{title}</h2>
      <p className="text-sm text-stone-500 mb-4">{date}</p>
      <p className="text-stone-700 leading-relaxed">{content}</p>
    </article>
  );
}

export default PostCard;
