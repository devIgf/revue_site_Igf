import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";

const Mynavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "A propos", href: "#apropos" },
    { label: "Partenaires", href: "#partenaires" },
    { label: "Services", href: "#features" },
    { label: "L'équipe", href: "#equipe" },
    { label: "Emplacement", href: "#emplacement" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed z-40 w-full bg-igf-primary backdrop-blur-md border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Logo />

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg lg:hidden hover:text-igf-accent focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8 p-4 lg:p-0 mt-4 lg:mt-0 bg-igf-primary lg:bg-transparent border border-gray-700 lg:border-none rounded-lg">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                {href.startsWith("#") ? (
                  <a
                    href={href}
                    className="block py-2 px-3 text-white hover:text-igf-accent"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    to={href}
                    className="block py-2 px-3 text-white hover:text-igf-accent"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Mynavbar;
