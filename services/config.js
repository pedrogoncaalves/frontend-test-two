import axios from "axios";

export const apiKey = 'cDBKfjYTxeVqYvgmQ1LtRw';

const baseURL = axios.create({
  baseURL: "https://www.carboninterface.com/api/v1/estimates",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}` 
  },
});

export default baseURL;






