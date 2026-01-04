import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { loginWithOtp } from "../util/func";
import { registerUser } from './../util/func';

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");
    const data = await loginWithOtp(enteredOtp);
    if (data) {
      navigate("/dashboard")
    }
    console.log(data)
  };

  const handleResendCode = async () => {
    try {
      const res = await registerUser({
        phone: localStorage.getItem("phone"),
        dial_code: "+91",
      });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm px-6 relative">

        <div className="border rounded-xl border-gray-100 p-2 w-fit">
          <FaAngleLeft onClick={() => navigate(-1)} />
        </div>

        <h2 className="text-lg font-semibold mb-1 mt-20">
          OTP Verification
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter the verification code we just sent on your Mobile Number.
        </p>

        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 text-center text-lg font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          ))}
        </div>

        <button
          onClick={() => handleVerify()}
          disabled={otp.join("").length !== 6}
          className={`w-full py-3 cursor-pointer rounded-xl font-medium transition text-white
            ${otp.join("").length === 6
              ? "bg-[#FF6D6A] hover:bg-[#ff5c59]"
              : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          Verify
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Didn’t receive code?
          <button type="submit" className="cursor-pointer text-blue-600 ml-1 font-medium hover:underline" onClick={() => handleResendCode()}>
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default Otp;
