import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Zap,
  Menu,
  ChevronsRight,
  X
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface NavItem {
  title: string;
  content: Product[];
}

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [hoverTab, setHoverTab] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      title: "Mobile Accs",
      content: [
        { id: 1, name: "Gaming Headset", price: 1999 },
        { id: 2, name: "Gaming Headset", price: 1999 },
        { id: 3, name: "Gaming Headset", price: 1999 },
        { id: 4, name: "Gaming Headset", price: 1999 },
        { id: 5, name: "Gaming Headset", price: 1999 },
        { id: 6, name: "Gaming Headset", price: 1999 },
      ],
    },
    {
      title: "Computer Accs",
      content: [
        { id: 7, name: "Gaming Headset", price: 1999 },
        { id: 8, name: "Gaming Headset", price: 1999 },
        { id: 9, name: "Gaming Headset", price: 1999 },
      ],
    },
    {
      title: "Multimedia",
      content: [
        { id: 10, name: "Gaming Headset", price: 1999 },
        { id: 11, name: "Gaming Headset", price: 1999 },
        { id: 12, name: "Gaming Headset", price: 1999 },
      ],
    },
    {
      title: "Support",
      content: [
        { id: 13, name: "Gaming Headset", price: 1999 },
        { id: 14, name: "Gaming Headset", price: 1999 },
        { id: 15, name: "Gaming Headset", price: 1999 },
      ],
    },
  ];

  const showDropdown = activeTab || hoverTab;
  const currentTab = hoverTab || activeTab;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-5 md:px-6">
        <div className="max-w-6xl relative z-50 mx-auto flex px-7 py-5 items-center justify-between bg-neutral-600/15 backdrop-blur-sm md:rounded-full border border-[#2e2d2d85]">
          <div className="flex items-center space-x-2">
            <Menu 
              className="md:hidden h-5 w-5 text-[#00ff9d] cursor-pointer" 
              onClick={toggleMobileMenu}
            />
            <a href="/" className="flex items-center">
              <Zap className="h-7 w-7 text-[#00ff9d]" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-xs">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setHoverTab(item.title)}
                onMouseLeave={() => setHoverTab(null)}
              >
                <button
                  className={`${
                    activeTab === item.title ? "text-[#00ff9d]" : "text-gray-300"
                  } hover:text-[#00ff9d] transition-colors py-2 relative`}
                  onClick={() =>
                    setActiveTab(activeTab === item.title ? null : item.title)
                  }
                >
                  {item.title}
                  {(activeTab === item.title || hoverTab === item.title) && (
                    <span className="absolute -top-5 left-0 w-full h-0.5 bg-[#00ff9d] rounded-full" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-[#00ff9d] cursor-pointer" />
            <ShoppingBag className="h-5 w-5 text-[#00ff9d] cursor-pointer" />
            <Heart className="h-5 w-5 text-[#00ff9d] cursor-pointer" />
            <User className="h-5 w-5 text-[#00ff9d] cursor-pointer" />
          </div>
        </div>

        {showDropdown && currentTab && (
          <div className="max-w-6xl relative z-40 -mt-9 mx-auto flex p-4 bg-neutral-600/15 backdrop-blur-sm rounded-b-3xl border border-t-0 border-[#2e2d2d85]">
            <div className="grid grid-cols-2 gap-2 w-full mt-10">
              <div className="grid grid-cols-3 gap-2">
                {navItems
                  .find((item) => item.title === currentTab)
                  ?.content.map((product) => (
                    <div
                      key={product.id}
                      className="bg-gray-100 rounded-2xl p-3 h-52"
                    >
                      <div className="flex justify-center mb-3 h-32">
                        <img
                          src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80"
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <h3 className="text-xs font-semibold mb-1 text-black line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="font-semibold text-sm">₹ {product.price}</p>
                    </div>
                  ))}
              </div>
              <div className="flex h-[27rem]">
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1677699298164-2e8489aee03d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGhlYWRwaG9uZSUyMHdpdGglMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex items-center justify-center mr-2 ml-4">
                  <ChevronsRight size={50} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Simple Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-neutral-900 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-6 right-4"
            >
              <X className="h-6 w-6 text-[#00ff9d]" />
            </button>
            <div className="mt-12 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.title}
                  className="block w-full py-3 px-4 text-left text-gray-300 hover:text-[#00ff9d] transition-colors border-b border-neutral-800"
                  onClick={toggleMobileMenu}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;