import axios from "axios";
import { getTokenLocalStorage } from "../reducer/reducer";

const config = {
    headers: {
      "Access-Control-Allow-Headers": "x-access-token",
      "x-access-token": getTokenLocalStorage(),
    },
  };

export async function contactAdmin(){
    try{
      let response = await axios.post("http://localhost:3001/users/faqs", config);
      return response.data.message 
    }catch(error){
     console.log(error)
    }
} 