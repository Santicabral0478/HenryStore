import { IProduct } from "../Card/types";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from '@/context/authContext';
import "./style.css"
import { backurl } from "@/app/BACK_URL";

export const ProductDetail: React.FunctionComponent<IProduct> = ({ ...product }) => {  
    const imagesRep: { [key: string]: string } = {
      "iPhone 11": "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v2607343239221086555/products/100000165.00-iphone-11-apple-blanco-128gb-mhdj3lz-a.jpg",
      "MacBook Air": "https://maximstore.com/wp-content/uploads/2023/01/macbook-air-midnight-gallery1-20220606.jpeg",
      "iPad Pro": "https://maximstore.com/wp-content/uploads/2023/05/iPad_Pro_Wi-Fi_11_in_4th_generation_Space_Gray_PDP_Image_Position-1b_MXLA.jpg",
      "Apple Watch Series 6": "https://qph.fs.quoracdn.net/main-qimg-1f23993fc0173d38afee14a2e7723b32",
      "AirPods Pro": "https://maximstore.com/wp-content/uploads/2023/05/AIRPODS-PRO-2-1.jpeg",
      "HomePod mini": "https://i0.wp.com/shop.litecorp.com.ar/wp-content/uploads/2021/11/HomePod_mini_White_Space_Gray_2-up_SCREEN__USEN-removebg-preview.png?fit=500%2C500&ssl=1",
    };
    
    const isImageBroken = (url: string) => {
      const img = new Image();
      img.src = url;
      return !img.complete || img.naturalWidth === 0;
    };
    
    const brokenImageSrc = imagesRep[product.name];

    const auth = useAuth();
    const token = auth ? auth.token : null;

    const submitHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        event.preventDefault();
        try {
            const headers: HeadersInit = {
                "Content-Type": "application/json",
                ...(token && { "Authorization": token }),
                "ngrok-skip-browser-warning": "true",
            };
    
            if (!token) {
                window.location.href = '/login';
                return;
            }
    
            const response = await fetch(`${backurl.apiurl}/orders`, { 
                method: "POST",
                headers: headers, 
                body: JSON.stringify({ products: [product.id] })
            });
            alert("Added product");
            window.location.href = '/dashboard';
            
            if (!response.ok) {
                throw new Error("Failed to add to cart");
            }
    
        } catch (error) {
            console.error("Error:", error);
        }
    };
    

    return (
    <div className=" py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="title-container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png" alt="" />
                        <h1>{product.name}</h1>
                    </div>
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] border-gray-400 rounded-3xl bg-white mb-4 ">
                        {isImageBroken(product.image) ? (
                          <img className="w-full h-full object-cover rounded-3xl p-4" src={brokenImageSrc} alt={product.name} />
                        ) : (
                          <img className="w-full h-full object-cover rounded-3xl p-4"  src={product.image} alt={product.name} />
                        )}
                    </div>
                </div>
                <div className="md:flex-1 px-4"> 
                    <div className="CountersNumericV4WProgress w-full h-44 mb-5 relative">
                        <div className="bg-gray-100 w-full h-44 left-0 top-0 absolute border border-opacity-70 border-gray-400 rounded-3xl">
                            <div className="AmountR top-[110px] absolute text-right text-black text-sm font-bold leading-tight" style={{right: "7%"}}>{product.stock}</div>
                            <div className="AmountL left-[24px] top-[110px] absolute text-black text-sm font-bold leading-tight">2024</div>
                            <div className="ElementProgressBarsMedium w-10 h-1 left-[24px] top-[86px] absolute">
                              <div className="Bg h-1 left-0 top-0 static bg-white bg-opacity-90 rounded-sm" style={{width: "80%"}}></div>
                              <div className="Progress w-48 h-1 left-0 top-0 absolute bg-amber-300 rounded-sm"></div>
                            </div>

                            <div className="SubtitleR top-[133px] absolute text-right text-zinc-500 text-xs font-medium leading-none" style={{right: "7%"}}>Stock</div>
                            <div className="SubtitleL left-[24px] top-[133px] absolute text-zinc-500 text-xs font-medium leading-none">Total</div>
                            <div className="Amount left-[24px] top-[41px] absolute text-black text-lg font-extrabold leading-normal">us$ {product.price}</div>
                            <div className="Title left-[24px] top-[15px] absolute text-zinc-500 text-sm font-normal leading-tight">Total</div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="font-bold text-gray-700">Select Color:</span>
                        <div className="flex items-center mt-2">
                            <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-700 mr-2"></button>
                            <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                            <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                            <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                        </div>
                    </div>

                    <div>
                        <span className="font-bold text-gray-700">Product Description:</span>
                        <p className="text-gray-600 text-sm mt-2">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex -mx-2 mb-4 mt-4">
                        <div className="w-1/2 px-2">
                            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Buy</button>
                        </div>
                        <div className="w-1/2 px-2">
                            <button onClick={submitHandler} className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to cart</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
  };
 ProductDetail
export default ProductDetail;



