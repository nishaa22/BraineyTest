import axios from "axios";

export const registerUser = async ({ phone, dial_code }) => {
  try {
    const formData = new URLSearchParams();
    formData.append("phone", phone);
    formData.append("dial_code", dial_code);

    const response = await axios.post(
      "https://staging.fastor.ai/v1/pwa/user/register",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Register API Error:", error);
    throw error;
  }
};


export const loginWithOtp = async (otp, dialCode = "+91") => {
  try {
    const url = "https://staging.fastor.ai/v1/pwa/user/login";

    const params = new URLSearchParams();
    params.append("otp", otp);
    params.append("dial_code", dialCode);

    const response = await axios.post(url, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const token = response.data?.token;
    console.log("Login successful, token:", token);
    return token;

  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    return null;
  }
};
