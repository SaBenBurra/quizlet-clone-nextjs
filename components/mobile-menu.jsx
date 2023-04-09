export default function MobileMenu(props) {
  return (
    <>
      <div
        id="mobile-menu"
        className={`absolute duration-300 left-0 right-0 z-20 bg-violet ${
          props.isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={props.toggleMobileMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <svg
              className={`h-6 w-6 `}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mt-6">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Option 1
            </a>
          </div>
          <div className="mt-6">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Option 2
            </a>
          </div>
          <div className="mt-6">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Option 3
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
