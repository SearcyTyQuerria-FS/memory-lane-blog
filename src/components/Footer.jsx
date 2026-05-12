function Footer() {
  return (
    <footer className="border-t border-stone-300 px-6 py-4 text-center text-sm text-stone-600">
      <p>
        © {new Date().getFullYear()} Memory Lane - built with React and Tailwind
      </p>
    </footer>
  );
}

export default Footer;
