export default function Footer() {
  return (
    <footer className="bg-black text-white text-xs md:text-sm p-8">
      <div className="flex flex-col items-center">
        <p>&copy; 2025 FITCLUB. All rights reserved.</p>
        <div className="flex gap-4 mt-2">
          <a className="hover:underline" href="#">
            Privacy Policy
          </a>

          <a className="hover:underline" href="#">
            Terms of Service
          </a>

          <a className="hover:underline" href="#">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
