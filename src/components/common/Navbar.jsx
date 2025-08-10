import { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({status= false}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [isScrolled, setIsScrolled] = useState(status);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(status === true ? true : window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectors = [
    { name: "Power & Renewables", link: "/power" },
    { name: "Capital Markets", link: "/capital" },
    { name: "Technology", link: "/technology" },
  ];

    const news = [
    { name: "News", link: "/news" },
    { name: "Press Releases", link: "/press" },
    { name: "Videos", link: "/videos" },
    { name: "Photo", link: "/photos" },
  ];

  return (
    <div
      className={`fixed font-secondary top-0 left-0 w-full px-4 sm:px-6 lg:px-12 flex justify-between items-center z-50 transition-all duration-300 ${isScrolled ? "bg-black py-4" : "bg-transparent py-6"
        }`}
    >
      <Link to="/" className="z-50">
        <div className="flex items-center h-full">
          <img src={Logo} alt="Logo" className="h-10 md:h-12 w-auto" />
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block h-full text-sm">
        <ul className={`${isScrolled? "text-white" : "text-white"} flex items-center h-full gap-6 lg:gap-10 font-medium text-[15px] lg:text-base `}>
          <Link to="/about">
            <li className="h-full flex items-center  hover:underline hover:transition-smooth transition-colors">
              About
            </li>
          </Link>

          <li
            className="h-full flex items-center relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="flex items-center justify-center gap-1 cursor-pointer hover:underline transition-colors">
              Sectors <ChevronDown size={16} className="mt-0.5" />
            </div>

            {sectors.length > 0 && (
              <ul
                className={`absolute top-full left-0 bg-[#1A1A1A] text-white shadow-lg rounded-md py-2 w-48 transition-all duration-300 ${showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              >
                {sectors.map((sector, idx) => (
                  <li key={idx}>
                    <Link
                      to={sector.link}
                      className="block px-4 py-2 hover:bg-[#333] transition-colors"
                    >
                      {sector.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <Link to="/insights">
            <li className="h-full flex items-center hover:underline transition-colors">
              Insights
            </li>
          </Link>
          <Link to="/contact">
            <li className="h-full flex items-center hover:underline transition-colors">
              Contact Us
            </li>
          </Link>
          <Link to="/career">
            <li className="hover:underline transition-colors py-2">
              Career
            </li>
          </Link>
          <li
            className="h-full flex items-center relative group"
            onMouseEnter={() => setShowDropdown2(true)}
            onMouseLeave={() => setShowDropdown2(false)}
          >
            <div className="flex items-center justify-center gap-1 cursor-pointer hover:underline transition-colors">
              News & Events <ChevronDown size={16} className="mt-0.5" />
            </div>

            {news.length > 0 && (
              <ul
                className={`absolute top-full left-0 bg-[#1A1A1A] text-white shadow-lg rounded-md py-2 w-42 transition-all duration-300 ${showDropdown2 ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              >
                {news.map((sector, idx) => (
                  <li key={idx}>
                    <Link
                      to={sector.link}
                      className="block px-4 py-2 hover:bg-[#333] transition-colors"
                    >
                      {sector.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Toggle */}
      <button
        className={`md:hidden z-50 ${isScrolled? "text-black" : "text-white"} focus:outline-none`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24}  className= "text-white" /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
          } md:hidden`}
      >
        <ul className="text-white text-center space-y-8 text-xl">
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="hover:underline transition-colors py-2">
              About
            </li>
          </Link>

          <li className="relative mb-0">
            <div
              className="flex items-center justify-center gap-1 cursor-pointer hover:underline transition-colors py-2 mb-0"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Sectors{" "}
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${showDropdown ? "rotate-180" : ""
                  }`}
              />
            </div>

            {showDropdown && sectors.length > 0 && (
              <ul className="mt-4 space-y-4">
                {sectors.map((sector, idx) => (
                  <li key={idx}>
                    <Link
                      to={sector.link}
                      className="block px-4 py-2 hover:text-gray-400 transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setShowDropdown(false);
                      }}
                    >
                      {sector.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <Link to="/insights" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="hover:underline transition-colors py-2">
              Insights
            </li>
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="hover:underline transition-colors py-2">
              Contact Us
            </li>
          </Link>
          <Link to="/career" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="hover:underline transition-colors py-2">
              Career
            </li>
          </Link>
             <li className="relative">
            <div
              className="flex items-center justify-center gap-1 cursor-pointer hover:underline transition-colors py-2"
              onClick={() => setShowDropdown2(!showDropdown2)}
            >
              News & Events{" "}
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${showDropdown2 ? "rotate-180" : ""
                  }`}
              />
            </div>

            {showDropdown2 && news.length > 0 && (
              <ul className="mt-4 space-y-4">
                {news.map((sector, idx) => (
                  <li key={idx}>
                    <Link
                      to={sector.link}
                      className="block px-4 py-2 hover:text-gray-400 transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setShowDropdown2(false);
                      }}
                    >
                      {sector.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
