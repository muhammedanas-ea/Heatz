import React, { useState } from "react";
import ProductCard from "../common/ProductCard";
import { ChevronRight } from "lucide-react";

const products = [
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
    badge: "Best Buy",
    title: "Premium Noise Cancelling Headphones",
    price: 2599,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
    badge: "Best Buy",
    title: "Premium Noise Cancelling Headphones",
    price: 2599,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
    badge: "Best Buy",
    title: "Premium Noise Cancelling Headphones",
    price: 2599,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
    badge: "Best Buy",
    title: "Premium Noise Cancelling Headphones",
    price: 2599,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
    badge: "Best Buy",
    title: "Premium Noise Cancelling Headphones",
    price: 2599,
  },
];

const ProductCarousel: React.FC = () => {
  const [activeButton, setActiveButton] = useState("Headset");

  const buttons = ["Headset", "Mouse", "Keyboard", "10% Offers"];
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-2 sm:items-end">
        <div className="w-full sm:w-auto overflow-x-auto">
          <div className="flex bg-[#1b1b1b] rounded-full min-w-max">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => setActiveButton(button)}
                className={`px-3 sm:px-5 py-3 sm:py-4 rounded-full text-xs font-semibold whitespace-nowrap transition-colors duration-200 ${
                  activeButton === button
                    ? "bg-[#00ff9d] text-black"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end group cursor-pointer">
          <h3 className="text-white text-xs">View All Products</h3>
          <ChevronRight
            className="w-7 h-7 sm:w-9 sm:h-9 text-white transition-transform group-hover:translate-x-1"
            strokeWidth={1}
          />
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-6 pt-10 scrollbar-hide -mx-4 px-4 design-scrollbar">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
