import axios from "axios";
import { API } from "../constants";

export const getDataForUS = async () => {
  try {
    const data = await axios.get(API);
    console.log(data);
  } catch (error) {
    console.log("error");
    return error;
  }
};
