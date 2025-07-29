import { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className={`fixed top-0 left-0 w-full px-[48px] flex justify-between items-center z-50 transition-all duration-300 ${isScrolled ? 'bg-black py-4' : 'bg-transparent py-6'
      }`}>
      <Link to="/">
        <div className="flex items-center h-full">
          <img src={Logo} alt="Logo" className="h-[50px] w-auto" />
        </div>
      </Link>

      <nav className="h-full">
        <ul className="text-white flex items-center h-full gap-[40px] font-secondary text-[15px]">
          <Link to="/about">
            <li className="h-full flex items-center hover:text-gray-300 transition-colors">
              About
            </li>
          </Link>

          <li
            className="h-full flex items-center relative cursor-pointer hover:text-gray-300 transition-colors"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="flex items-center justify-center gap-1">
              Sectors <ChevronDown size={16} />
            </div>

            <ul
              className={`absolute top-full left-0 bg-[#1A1A1A] text-white shadow-lg rounded-md py-2 w-[200px] transition-all duration-300 ${showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
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
          </li>

          <li className="h-full flex items-center hover:text-gray-300 transition-colors">
            Insights
          </li>
          <li className="h-full flex items-center hover:text-gray-300 transition-colors">
            Contact Us
          </li>
        </ul>
      </nav>
    </div>
  );
}