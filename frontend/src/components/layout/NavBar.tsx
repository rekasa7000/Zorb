import { Link, useLocation } from "@tanstack/react-router";
import { Settings, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoScaleClass =
    scrollPosition > 0
      ? "scale-95 transition-transform duration-300"
      : "scale-100 transition-transform duration-300";

  const isHomepage = location.pathname === "/";

  if (isHomepage) {
    return (
      <nav className="relative z-10 px-6 py-5 flex justify-between items-center text-white transform translate-y-0 opacity-100 transition-all duration-500">
        <div className={`flex items-center space-x-2 ${logoScaleClass}`}>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center relative">
            <Zap className="h-5 w-5 text-white" />

            <div className="absolute inset-0 w-full h-full origin-center animate-spin-slow">
              <div className="absolute w-2 h-2 rounded-full bg-yellow-300 -top-2 left-1/2 -translate-x-1/2"></div>
            </div>

            <div className="absolute inset-0 w-full h-full origin-center animate-spin-reverse-slow">
              <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-300 -left-1.5 top-1/2 -translate-y-1/2"></div>
            </div>

            <div className="absolute inset-0 w-full h-full origin-center animate-spin-slower">
              <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-300 -left-1 top-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <span className="text-xl font-bold animate-text-color">Zorb</span>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute z-20 top-16 inset-x-0 bg-gray-900/95 backdrop-blur-sm py-4 px-6 border-b border-gray-800 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="hover:text-green-400 transition py-2 animate-fade-in-delay-100"
              >
                Features
              </a>
              <a
                href="#about"
                className="hover:text-green-400 transition py-2 animate-fade-in-delay-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-green-400 transition py-2 animate-fade-in-delay-300"
              >
                Contact
              </a>
              <Link
                to="/signin"
                className="bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-green-500/30 transition w-full animate-fade-in-delay-400"
              >
                Sign in
              </Link>
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center space-x-8">
          <a
            className="hover:text-green-400 transition duration-300 hover:-translate-y-1"
            href="#features"
          >
            Features
          </a>
          <a
            href="#about"
            className="hover:text-green-400 transition duration-300 hover:-translate-y-1"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-green-400 transition duration-300 hover:-translate-y-1"
          >
            Contact
          </a>
          <Link
            to="/signin"
            className="bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-green-500/30 transition"
          >
            Sign in
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>
    );
  }

  return (
    <nav className="relative z-10 px-6 py-5 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
          <Zap className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold">Zorb</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 gap-2">
        <Settings /> Settings
      </div>
    </nav>
  );
};

export default NavBar;
