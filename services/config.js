import axios from "axios";

export const apiKey = 'cDBKfjYTxeVqYvgmQ1LtRw';

const baseURL = axios.create({
  baseURL: "https://www.carboninterface.com/api/v1/estimates/9b1e2132-6216-4c64-84b2-23cf31eb472d",
  
});

export default baseURL;






