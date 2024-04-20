import { IProduct } from '@/components/Card/types';                                 
import { backurl } from '@/app/BACK_URL';                                   
                                    
export const getProduct = async (id: string) => {                                   
    try {                                   
        const response = await fetch(`${backurl.apiurl}/products`, {                                    
            headers: {                                  
                'ngrok-skip-browser-warning': 'true'                                    
            }                                   
        });                                     
        const data = await response.json();                                 
                                        
        // Buscar el producto por ID                                    
        const item = data.find((item: IProduct) => item.id.toString() === id);                                  
        return item;                                    
    } catch (error) {                                   
        console.error("Error fetching product:", error);                                    
        return null;                                    
    }                                   
};                                  
                                    
export default getProduct;                                  
