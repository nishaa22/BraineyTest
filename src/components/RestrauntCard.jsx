import React from "react";
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const RestaurantCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-1.5 m-1 cursor-pointer shadow-sm max-w-md" onClick={() => navigate("/details")}>
      {/* Image */}
      <div className="h-30 w-30 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src="cake.jpg"
          alt="Lazy Bear Cake"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="text-base font-semibold text-gray-900">
          Lazy Bear
        </h3>
        <p className="text-sm text-gray-500">
          Cakes, Pastry, Pastas
        </p>
        <p className="text-xs text-gray-400">
          Connaught Place, New Delhi
        </p>
        <span className="text-xs text-orange-500 font-medium">
          4 Offers trending
        </span>

        <div className="mt-1 flex items-center justify-between gap-3 text-sm">
          <div>
            <p className="flex items-center font-medium gap-1 text-gray-700">
              <CiStar />
              4.5
            </p>
            <p>Popularity</p>
          </div>

          <div>
            <p className="text-gray-600">
              $200
            </p>
            <p className="text-gray-400">Cost for two</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
