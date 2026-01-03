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
