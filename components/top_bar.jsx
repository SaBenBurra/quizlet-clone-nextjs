import { useState } from "react";
import Logo from "./logo";
import TopBarMenuLinks from "./top_bar_menu_links";
import MobileMenu from "./mobile-menu";
export default function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen);
  };

  return (
    <nav className="bg-violet border-b border-b-gull-gray border-opacity-40">
      <div className="lg:w-full lg:px-8">
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        <div className="flex justify-between items-center h-16 w-full">
          <div className="flex items-center">
            <HamburgerButton
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
            <Logo className="ml-3" />
            <Link href="#">
              <button class="ml-4 bg-lightning-yellow hover:filter hover:brightness-75 hover:contrast-125 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold text-xl focus:outline-none">
                +
              </button>
            </Link>
          </div>

          <TopBarMenuLinks
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </div>
    </nav>
  );
}

function HamburgerButton(props) {
  return (
    <button
      type="button"
      className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded={props.isMobileMenuOpen}
      onClick={props.toggleMobileMenu}
    >
      <svg
        className="block h-6 w-6"
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      {/* Close Icon */}
    </button>
  );
}
