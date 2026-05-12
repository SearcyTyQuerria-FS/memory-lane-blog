# 📝 Memory Lane — React + Tailwind Blog

Memory Lane is a simple, clean personal blog built with **React**, **Vite**, and **Tailwind CSS**.  
 This project was created as part of a class assignment to demonstrate custom layout, styling, and JavaScript functionality — and will continue evolving into a full portfolio project.

---

## 🚀 Live Demo

Deployed on **Netlify**  
 https://memorylane-blog.netlify.app/

---

## 📌 Features

### ✅ Current Features

- Custom layout with Header, Footer, and PostCard components
- Clean, modern UI using Tailwind CSS
- Add new posts using a controlled form
- Posts are saved in **localStorage** (they stay after refresh)
- Fully responsive layout
- Organized component structure

### 🔧 Upcoming Features (Portfolio Expansion)

These features will be added after the assignment to turn this into a full CRUD portfolio project:

- ✏️ Edit existing posts
- 🗑️ Delete posts
- 🔍 Individual post pages
- 📁 Navigation between pages
- 🎨 Additional UI polish and animations
- 💾 Optional backend version using Node.js + MongoDB

---

## 🛠️ Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Netlify** (deployment)
- **localStorage** for persistence

---

## 📁 Project Structure

src/
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── PostCard.jsx
│ ├── NewPostForm.jsx
├── App.jsx
├── main.jsx
├── index.css

---

## 🧠 How It Works

### State Management

Posts are stored in React state:

```js
const [posts, setPosts] = useState([]);
```

### Persistence

Posts are saved to and loaded from `localStorage`:

```js
useEffect(() => {
  localStorage.setItem("memory-lane-posts", JSON.stringify(posts));
}, [posts]);
```

### Adding a Post

The form component sends new posts back to App:

```js
onAddPost={(newPost) => setPosts([...posts, newPost])}
```

---

## 📦 Installation & Setup

Clone the repo:

```bash
git clone https://github.com/YOUR-USERNAME/memory-lane.git
cd memory-lane
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🌐 Deployment (Netlify)

1.  Run `npm run build`
2.  Drag the **dist/** folder into Netlify
3.  Done 🎉

---

## 📌 Notes

This project will continue to grow beyond the assignment requirements.

The goal is to turn Memory Lane into a polished, portfolio‑ready CRUD application with full interactivity and clean UI/UX.
