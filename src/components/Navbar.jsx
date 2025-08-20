import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon, Compass, Menu as MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileTools, setShowMobileTools] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const travelTools = [
    { name: "JourneyGuide", path: "/JourneyGuide" },
    { name: "Advice", path: "/advice" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-sky-200 shadow-lg backdrop-blur-md"
          : "bg-sky-200 backdrop-blur-sm"
      }`}
      style={{ padding: "0 1rem" }} // Added horizontal padding
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sri Lanka</h1>
              <p className="text-xs text-emerald-600 -mt-1">Tourism Guide</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  location.pathname === link.path
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 transform transition-transform duration-300 ${
                    location.pathname === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}

            {/* Travel Tools Dropdown */}
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button
                className={`inline-flex justify-center gap-x-1 text-sm font-medium transition-colors duration-300 ${
                  travelTools.some((t) => t.path === location.pathname)
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                Travel Tools
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right bg-white border rounded-md shadow-lg focus:outline-none z-50">
                {travelTools.map((tool) => (
                  <Menu.Item key={tool.name}>
                    {({ active }) => (
                      <Link
                        to={tool.path}
                        className={`block px-4 py-2 text-sm ${
                          active
                            ? "bg-emerald-50 text-emerald-600"
                            : "text-gray-700"
                        }`}
                      >
                        {tool.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>

            {/* Login Button */}
            <Link
              to="/login"
              className="ml-4 px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-emerald-600 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 px-4 animate-fade-in">
            {/* Added px-4 for horizontal padding and fixed py=4 typo */}
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium px-4 py-2 rounded-lg ${
                    location.pathname === link.path
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Travel Tools Dropdown for Mobile */}
              <div className="border rounded-lg">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 focus:outline-none"
                  onClick={() => setShowMobileTools((prev) => !prev)}
                >
                  Travel Tools
                  <ChevronDownIcon
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      showMobileTools ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {showMobileTools && (
                  <div className="flex flex-col">
                    {travelTools.map((tool) => (
                      <Link
                        key={tool.name}
                        to={tool.path}
                        onClick={() => {
                          setIsOpen(false);
                          setShowMobileTools(false);
                        }}
                        className={`text-base font-medium px-8 py-2 rounded-lg ${
                          location.pathname === tool.path
                            ? "text-emerald-600 bg-emerald-50"
                            : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                        }`}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-md bg-emerald-600 text-white text-center text-base font-medium hover:bg-emerald-700 transition"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
