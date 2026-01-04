import axios from "axios";

export const registerUser = async ({ phone, dial_code = "+91" }) => {
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

export const fetchRestaurants = async () => {
  try {
    const response = await fetch(
      "https://staging.fastor.ai/v1/m/restaurant?city_id=118",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

