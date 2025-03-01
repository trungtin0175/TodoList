import axios from "axios";

//api lấy data của dashboard
export const getDashboard = async () => {
  try {
    const response = await axios.get(
      "https://65f7b579b4f842e80885e0ef.mockapi.io/dashboard"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
