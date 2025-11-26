import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-yellow-400 dark:text-black"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
