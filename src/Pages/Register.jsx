import { useState } from "react";
import { registerUser } from "../util/func";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [dialCode, setDialCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMobile(value);
  };

  const handleSendCode = async () => {
    if (mobile.length !== 10) return;

    try {
      setLoading(true);
      const res = await registerUser({
        phone: mobile,
        dial_code: dialCode,
      });

      if (res.status_code === 200) {
        navigate("/otp");
      }
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[360px] bg-white p-6">
        <h1 className="text-2xl font-bold text-[#1E232C] mb-1">
          Enter Your Mobile Number
        </h1>
        <p className="text-sm text-[#8391A1] mb-6">
          We will send you the 4 digit verification code
        </p>

        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-6">
          <select
            value={dialCode}
            onChange={(e) => setDialCode(e.target.value)}
            className="px-3 py-3 bg-gray-100 text-sm outline-none"
          >
            <option value="+91">IN +91</option>
            <option value="+1">US +1</option>
          </select>

          <input
            type="tel"
            value={mobile}
            onChange={handleMobileChange}
            placeholder="Enter your mobile number"
            maxLength={10}
            className="flex-1 px-4 py-3 text-sm outline-none"
          />
        </div>

        <button
          onClick={handleSendCode}
          disabled={mobile.length !== 10 || loading}
          className={`w-full cursor-pointer py-3 rounded-xl text-white font-medium transition
            ${mobile.length === 10
              ? "bg-[#FF6D6A] hover:bg-[#ff5c59]"
              : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          {loading ? "Sending..." : "Send Code"}
        </button>
      </div>
    </div>
  );
};

export default Register;
