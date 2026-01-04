import { IoWalletSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { RiUserLocationLine } from "react-icons/ri";

export default function DashboardHeader() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white">
      <div className="flex items-center gap-2 px-4 py-3 shadow-[0_6px_12px_-4px_rgba(0,0,0,0.15)]">
        <div className="text-sm">
          <p className="text-gray-400 flex gap-1">Pre Order From
            <RiUserLocationLine fontSize={16} color="black" />
          </p>
          <p className="font-semibold text-gray-800">
            Connaught Place
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-4">
        <div className="bg-gray-100 rounded-xl px-5 py-4 w-[60%]">
          <h2 className="text-xl font-semibold text-gray-400">
            Karan
          </h2>
          <p className="text-gray-800 font-medium mt-1">
            Let’s explore this <br /> evening
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow">
              <BiSolidOffer color="white" fontSize={24} />
            </div>
            <span className="text-xs mt-1 text-gray-600">Offers</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow">
              <IoWalletSharp color="white" fontSize={24} />
            </div>
            <span className="text-xs mt-1 text-gray-600">Wallet</span>
          </div>
        </div>
      </div>
    </div>
  );
}
