import { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container px-10 mx-auto mb-8">
      <div className="inline-block w-full py-8 border-b border-blue-400">
        <div className="block md:float-left">
          <Link href="/">
            <span className="text-4xl font-bold text-white cursor-pointer">
              Blog.tsx
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
