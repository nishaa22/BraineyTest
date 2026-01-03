import { FaStar, FaArrowLeft } from "react-icons/fa";
import ImageSlider from "../components/ImageSlider";
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto bg-white overflow-hidden relative h-screen">
      <div className="relative">
        <ImageSlider />
        <button className="absolute top-4 left-4 bg-white p-2 rounded-full hover:bg-gray-100">
          <FaArrowLeft className="text-gray-700 cursor-pointer" onClick={() => navigate(-1)} />
        </button>
      </div>

      <div className="p-6 bg-white shadow-t-md -mt-10 z-10 absolute rounded-t-2xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Lazy Bear</h1>
            <p className="text-gray-500 text-sm">Connaught Place, New Delhi</p>
          </div>
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-700 font-medium">4.5</span>
          </div>
        </div>

        <p className="text-red-500 font-medium text-xs mt-2">4 Offers Trending</p>

        <p className="text-gray-600 mt-4 text-sm mt-10">
          Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache.
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
