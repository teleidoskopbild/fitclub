import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed z-10 w-full bg-black text-white">
      <div className="flex justify-between p-2">
        <h1 className="p-4 text-4xl font-bold">FITCLUB</h1>
        <ul className="flex gap-12 justify-center p-4 text-lg">
          <li>
            <Link className="hover:text-yellow-300" to="/">
              Start
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-300" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-300" to="/services">
              Our Services
            </Link>
          </li>{" "}
          <li>
            <Link className="hover:text-yellow-300" to="/contact">
              Contact Us
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
