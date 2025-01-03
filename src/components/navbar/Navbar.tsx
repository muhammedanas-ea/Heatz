import { Search, ShoppingBag, Heart, User, Zap, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Define the links as an array of objects
  const navLinks = [
    { to: "/mobile", label: "Mobile Accs" },
    { to: "/computer", label: "Computer Accs" },
    { to: "/multimedia", label: "Multimedia" },
    { to: "/support", label: "Support" },
  ];

  return (
    <nav className="fixed w-full z-50 top-5 md:px-6">
      <div className="max-w-6xl mx-auto flex  px-7 py-5 items-center justify-between bg-neutral-600/15 backdrop-blur-sm md:rounded-full border border-[#2e2d2d85]">
        <div className="flex items-center space-x-2">
          <Menu className="md:hidden h-5 w-5 text-[#00ff9d] cursor-pointer" />
          <Link to="/" className="flex items-center">
            <Zap className="h-7 w-7 text-[#00ff9d]" />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[#00ff9d] hover:text-[#00ff9d]/80"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5 text-[#00ff9d] cursor-pointer" />
          <ShoppingBag className="h-5 w-5 text-[#00ff9d] cursor-pointer" />
          <Heart className="h-5 w-5 text-[#00ff9d] cursor-pointer" />
          <User className="h-5 w-5 text-[#00ff9d] cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
