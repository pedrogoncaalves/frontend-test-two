import { baseURL, apiKey } from "../../services/config";
import axios from "axios";


export const renderEstimates = async ( req, res)  => {
    const response = await axios.get(baseURL)
    console.log(response.data)

}

