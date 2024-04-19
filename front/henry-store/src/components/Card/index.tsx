import { IProduct } from "./types";
import React from "react";
import Link from "next/link";
import "./style.css"

export const Card: React.FunctionComponent<IProduct> = ({ ...product }) => {
    const imagesRep: { [key: string]: string } = {
      "iPhone 11": "https://static-jaymart.com/ecom/public/1mNO8ihVNEBs7fmhrbkWpuTQy6Z.jpg",
      "MacBook Air": "https://www.ultigiz.cl/wp-content/uploads/2022/11/Apple_MacBook_Air_13_M2_MLY43CIA_3.png",
      "iPad Pro": "https://www.sagitariodigital.com.ar/wp-content/uploads/2022/11/IPAD-PRO-M2-8.jpg",
      "Apple Watch Series 6": "https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/80/1080469_smartwatch-apple-watch-series-6-40mm-gps-caixa-prateada-e-pulseira-branca-esportiva-mydm2be-a_m3_637457015399009208.jpg",
      "AirPods Pro": "https://maximstore.com/wp-content/uploads/2023/05/AIRPODS-PRO-2-1.jpeg",
      "HomePod mini": "https://acdn.mitiendanube.com/stores/002/092/809/products/homepoddd-071-98044bdea46ba3b7c916626491351449-240-0.jpg",
    };
  
    const isImageBroken = (url: string):boolean => {
      const img = new Image();
      img.src = url;
      return !img.complete || img.naturalWidth === 0;
    };
  
    const brokenImageSrc = imagesRep[product.name];
  
    return (
      <div className="product-item">
        <div className="p-cover">
          {isImageBroken(product.image) ? (
            <img className="img-cover" src={brokenImageSrc} alt={product.name} />
          ) : (
            <img className="img-cover" src={product.image} alt={product.name} />
          )}
        </div>
  
        <div className="p-info">
          <h3 className="title-product">{product.name}</h3>
          <div className="price-cont">
            <span className="price">USD/~ ${product.price}</span>
          </div>
          <div className="button-stockCont">
            <span>stock: {product.stock}</span>

            <Link href={`/products/${product.id}`}>
              <button className="button-buy">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  

export default Card;