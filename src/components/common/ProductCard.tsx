import React from "react";
interface ProductCardProps {
  image: string;
  badge: string;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  badge,
  title,
  price,
}) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 sm:p-6 flex flex-col relative flex-shrink-0 w-[16.8rem]">
      <div className="flex justify-center mb-4 sm:mb-6 h-40 sm:h-48 md:h-60">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      <span className="text-[0.65rem] font-semibold text-gray-500 mb-1">{badge}</span>
      <h3 className="text-xs font-semibold mb-2 text-black line-clamp-2">
        {title}
      </h3>
      <p className="font-semibold text-sm">₹ {price}</p>
    </div>
  );
};

export default ProductCard;
