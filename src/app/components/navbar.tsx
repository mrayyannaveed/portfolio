import Link from "next/link";

// Navbar.tsx
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 text-white p-4 px-8 rounded-b-2xl shadow-lg">
      <div className="flex justify-center gap-6 flex-wrap">
        <Link
            className="hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium px-3 py-2 rounded-2xl transition-all"
            href={`/`}
          >
            About
          </Link>
        <Link
            className="hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium px-3 py-2 rounded-2xl transition-all"
            href={`/skills`}
          >
            Skills
          </Link>
        <Link
            className="hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium px-3 py-2 rounded-2xl transition-all"
            href={`/projects`}
          >
            Projects
          </Link>
        <Link
            className="hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium px-3 py-2 rounded-2xl transition-all"
            href={`/contact`}
          >
            Contact
          </Link>
      </div>
    </nav>
  );
};


export default Navbar