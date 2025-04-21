import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed z-10 w-full bg-black text-white">
      <div className="flex justify-between p-2">
        <h1 className="p-4 text-4xl font-bold">FITCLUB</h1>

        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center p-4"
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-20 space-y-6 text-2xl">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-6 text-4xl"
            >
              ×
            </button>
            <Link className="hover:text-yellow-300" to="/" onClick={toggleMenu}>
              Start
            </Link>
            <Link
              className="hover:text-yellow-300"
              to="/membership"
              onClick={toggleMenu}
            >
              Membership
            </Link>
            <Link
              className="hover:text-yellow-300"
              to="/courses"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link
              className="bg-yellow-300 text-black rounded-full p-4 hover:text-white hover:bg-yellow-400"
              to="/join-us"
              onClick={toggleMenu}
            >
              Join Us
            </Link>
          </div>
        )}

        <ul className="hidden lg:flex gap-12 justify-center p-4 text-lg">
          <li>
            <Link className="hover:text-yellow-300" to="/">
              Start
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-300" to="/membership">
              Membership
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-300" to="/courses">
              Courses
            </Link>
          </li>
          <li>
            <Link
              className="bg-yellow-300 text-black rounded-full p-4 hover:text-white hover:bg-yellow-400"
              to="/join-us"
            >
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
