import { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectors = [
    // "Agriculture",
    // "Healthcare",
    // "Energy",
    // "Infrastructure",
    // "Financial Services",
  ];

  return (
    <div className={`fixed font-secondary top-0 left-0 w-full px-4 sm:px-6 lg:px-12 flex justify-between items-center z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black py-4' : 'bg-transparent py-6'
    }`}>
      <Link to="/" className="z-50">
        <div className="flex items-center h-full">
          <img src={Logo} alt="Logo" className="h-10 md:h-12 w-auto" />
        </div>
      </Link>

      <nav className="hidden md:block h-full text-sm">
        <ul className="text-white flex items-center h-full gap-6 lg:gap-10 font-medium text-sm lg:text-base">
          <Link to="/about">
            <li className="h-full flex items-center hover:text-gray-300 transition-colors">
              About
            </li>
          </Link>

          <li
            className="h-full flex items-center relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
              Sectors <ChevronDown size={16} className="mt-0.5" />
            </div>

            {sectors.length > 0 && (
              <ul
                className={`absolute top-full left-0 bg-[#1A1A1A] text-white shadow-lg rounded-md py-2 w-48 transition-all duration-300 ${
                  showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {sectors.map((sector, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-[#333] transition-colors cursor-pointer"
                  >
                    {sector}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <Link to="/insights">
            <li className="h-full flex items-center hover:text-gray-300 transition-colors">
              Insights
            </li>
          </Link>
          <Link to="/contact">
            <li className="h-full flex items-center hover:text-gray-300 transition-colors">
              Contact Us
            </li>
          </Link>
        </ul>
      </nav>

      <button 
        className="md:hidden z-50 text-white focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      } md:hidden`}>
        <ul className="text-white text-center space-y-8 text-xl  text-sm">
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="hover:text-gray-300 transition-colors py-2">
              About
            </li>
          </Link>

          <li className="relative">
            <div 
              className="flex items-center justify-center gap-1 cursor-pointer hover:text-gray-300 transition-colors py-2"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Sectors <ChevronDown size={20} className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
            </div>

            {showDropdown && sectors.length > 0 && (
              <ul className="mt-4 space-y-4">
                {sectors.map((sector, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:text-gray-400 transition-colors cursor-pointer"
                  >
                    {sector}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <Link to="/insights" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="hover:text-gray-300 transition-colors py-2">
              Insights
            </li>
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="hover:text-gray-300 transition-colors py-2  text-sm">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}