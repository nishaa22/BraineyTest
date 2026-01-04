import React from "react";

const BakeryCard = ({ restaurant }) => {
  return (
    <div className="w-30 rounded-2xl bg-pink-50 p-1.5 shadow-sm">
      <div className="h-30 w-full overflow-hidden rounded-xl">
        <img
          src="cake.jpg"
          alt="Cake"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-2 px-1.5">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {restaurant.restaurant_name}
        </h3>
        <p className="text-xs text-gray-500">
          Connaught Place,<br />
          New Delhi
        </p>
      </div>
    </div>
  );
};

export default BakeryCard;
