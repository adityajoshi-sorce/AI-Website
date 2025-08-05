import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      {/* 4-column layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo + Text + Socials */}
        <div>
          <h1 className="text-xl font-bold mb-2">
            <img
              width="100"
              src="https://tkcdn.tekedia.com/wp-content/uploads/2024/04/15122938/AI-artificial-intelligience-768x440.jpg"
            />
          </h1>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-3">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-300 cursor-pointer" />
          </div>
        </div>

        {/* Column 2: Links 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="http://localhost:5173/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="http://localhost:5173/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a
                href="http://localhost:5173/gallery"
                className="hover:underline"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="http://localhost:5173/contact"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Links 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> email@example.com
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe /> www.yourwebsite.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400">
          &copy; 2025 YourWebsite. All rights reserved.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:underline text-gray-400">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
