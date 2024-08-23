import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-flex z-40 items-center justify-center">
      <div className="fixed top-2">
        <nav className="sm:backdrop-blur-lg sm:bg-white/10 rounded-full">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="fixed left-4 flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen ? "true" : "false"}
                  onClick={toggleMenu}  // Aquí se controla la visibilidad del menú
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="#home"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition ease-in-out delay-100 hover:transform hover:scale-150"
                    >
                      Home
                    </a>
                    <a
                      href="#skills"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition ease-in-out delay-100 hover:transform hover:scale-150 hover:text-white"
                    >
                      Skills
                    </a>
                    <a
                      href="#proyects"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition ease-in-out delay-100 hover:transform hover:scale-150 hover:text-white"
                    >
                      Projects
                    </a>
                    <a
                      href="#experience"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition ease-in-out delay-100 hover:transform hover:scale-150 hover:text-white"
                    >
                      Experience
                    </a>
                    <a
                      href="#contact"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition ease-in-out delay-100 hover:transform hover:scale-150 hover:text-white"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
            <div className="fixed left-4 px-2 pb-3 pt-2 bg-white/10 backdrop-blur-lg rounded-xl">
              <a
                href="#home"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Home
              </a>
              <a
                href="#proyects"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
