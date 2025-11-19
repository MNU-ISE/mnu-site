import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { FaInstagram } from "react-icons/fa"

const navMenu = [
  { href: "/about", label: "О нас" },
  { href: "/skills", label: "Наша История" },
  { href: "/projects", label: "12 месяцев добра" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [sheetOpen, setSheetOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-stone-800 ${
        scrolled
          ? "bg-gradient-to-r from-rose-200 to-red-200 shadow-lg"
          : "bg-red-200"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-2xl text-stone-800 hover:text-white transition-colors duration-300"
            style={{ fontFamily: "satoshi-black" }}
          >
            Главная
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex justify-end px-12 flex-1 space-x-9 text-stone-800 text-base"
          style={{ fontFamily: "satoshi-medium" }}
        >
          {navMenu.map((link) => (
            <Link
              to={link.href}
              key={link.href}
              className={`relative group transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-white"
                  : "hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-stone-800 transition-all duration-300 ${
                  location.pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => setSheetOpen(true)}
            className="bg-red-300 hover:bg-red-100 transition-all duration-300"
          >
            Контакты
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-800 hover:scale-110 transition-transform duration-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-rose-200 to-red-200 border-t border-stone-800 px-6 py-4 space-y-4">
          {navMenu.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block rounded p-2 transition ${
                location.pathname === link.href
                  ? "bg-stone-800 text-white"
                  : "text-stone-800 hover:bg-stone-800 hover:text-white"
              }`}
              style={{ fontFamily: "satoshi-medium" }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={() => {
              setSheetOpen(true);
              setIsOpen(false);
            }}
            className="w-full bg-red-300 hover:bg-red-100"
          >
            Contact Me
          </Button>
        </div>
      )}

      {/* Contact Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="bg-red-50">
          <SheetHeader>
            <SheetTitle
              className="text-2xl px-4 mt-10 text-stone-800"
              style={{ fontFamily: "satoshi-bold" }}
            >
              Свяжитесь с нами
            </SheetTitle>
          </SheetHeader>

          <div className="px-10 space-y-4 mt-6" style={{ fontFamily: "satoshi-medium" }}>
            
            {/* Instagram ONLY */}
            <div className="flex items-center gap-3">
              <FaInstagram className="text-rose-500" size={24} />
              <a
                href="https://www.instagram.com/elite.mnu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 text-lg hover:text-rose-500 transition"
              >
                @elite.mnu
              </a>
            </div>

          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
