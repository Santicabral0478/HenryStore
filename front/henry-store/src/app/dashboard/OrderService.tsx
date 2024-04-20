import { backurl } from "../BACK_URL";
import { IOrder } from "./types";

export const getOrders = async (token: string): Promise<IOrder[]> => {

  if (token == null || undefined) {
    throw new Error('API URL or authorization token is not defined');
  }

  try {
    const response = await fetch(`${backurl.apiurl}/users/orders`, {
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'Authorization': token,
      },  
    });
    
    const data = await response.json(); 
    return data;
    
  } catch (error){
    console.error("Error fetching orders:", error);
    throw error; 
  }
};