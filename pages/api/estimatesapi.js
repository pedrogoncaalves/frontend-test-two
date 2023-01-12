import {  apiKey } from "../../services/config";
import baseURL from "../../services/config";
import axios from "axios";



export const addEstimates = async (estimate) => {
  const response = await axios.post(baseURL, estimate)
  console.log(response.data)
  return response.data
  
}



export const renderEstimates = async ( req, res)  => {
    const response = await baseURL.get( {headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}` 
      }},)
    console.log(response.data)
    return response
   

}

