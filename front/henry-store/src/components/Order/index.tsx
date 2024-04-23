import React from "react";
import Link from "next/link";
import { IOrder } from "@/app/dashboard/types";
import styled from "styled-components";

const StyledPrincipalCont = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

const StyledPrincipalContCards = styled.div`
    width: 63%;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 900px) {
        width: 100%;
        padding: 0px;
    }


    .total-cart-items{
        border-radius: 21px;
        background-color: rgb(243 244 246);
        border: 1px solid #afafaf;
        padding: 1rem;
    }

    .total-cart-items h2{
        font-size: 20px;
    }

    .total-cart-products{
        display: flex;
        flex-direction: column-reverse;
        border-radius: 21px;
        background-color: rgb(243 244 246);
        border: 1px solid #afafaf;
        padding: 1rem;
    }
`;

const StyledContCard = styled.div`
    width: 100%;
    padding: 1rem .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;
    border-bottom: .5px solid #a4a4a4;

    .image-product-card-cont{
        max-width: 8rem;
    }

    .image-product-card-cont img{
        border: 1px solid #cccccc;
        border-radius: 15px;
    }

    .image-product-card-cont p{
        color: #404040;
    }

    .info-product-card-cont button{
        transition: all .1s ease;
        margin-top: .4rem;
        padding: .3rem;
        font-size: 9px;
        background: rgb(74,210,255);
        background: linear-gradient(225deg, rgba(74,210,255,1) 0%, rgba(75,171,255,1) 100%);
        border-radius: 7px;
        color: #070707;
    }

    .info-product-card-cont i{
        display: block;
        font-size: 10px;
    }
`;

const StyledPayContent = styled.div`
    width: 37%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 21px;
    background-color: rgb(243 244 246);
    border: 1px solid #afafaf;
    padding:  1rem 2rem;

    @media screen and (max-width: 900px) {
        width: 100%;
    }

    .total-price-and-pay{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    .total-price-h3-cont{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-block: 2rem;
        border-bottom: 1px solid #858585;
    }

    .total-price-h3-cont button{
        transition: all .1s ease-in;
        width: 100%;
        padding: .7rem;
        margin-block: 1rem;
        font-size: 20px;
        color: #fff;
        background: rgb(87,218,96);
        background: linear-gradient(225deg, rgba(87,218,96,1) 0%, rgba(25,221,74,1) 100%);
        border-radius: 26px;
        border: 1px solid #57ffa3;

    }

    .total-price-h3{
        font-size: 24px;
    }

    .pay-card-methods{
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }

    .pay-card-methods .card-pay-container{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .protected-purchase-text{
        width: 100%;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 21px;
        background-color: #f5f5f5;
        border: 1px solid #858585;
        box-shadow: 0px 0px 39px -24px rgba(0,0,0,0.75);
        padding:  1rem 2rem;
    }

    .protected-purchase-text h4{
        font-size: 23px;
    }
`;

interface OrderProps{
    orders: IOrder[]
}

export const Order: React.FunctionComponent<OrderProps> = ({ orders }) => {

    const getTotalPrice = (orders: IOrder[]) => {
        return orders.reduce((total, order) => {
            return total + order.products.reduce((subtotal, product) => {
                return subtotal + product.price;
            }, 0);
        }, 0);
    };

    const getTotalProducts = (orders: IOrder[]) => {
        return orders.reduce((total, order) => {
            return total + order.products.length
        }, 0);
    };

    const totalPrice = getTotalPrice(orders);
    const totalProducts = getTotalProducts(orders);

    return (
      <StyledPrincipalCont className="">
        <StyledPrincipalContCards className="gral-cont-titlecant-product-cards">
            <div className="total-cart-items">
                <h2>Shopping cart | <i><b>Products: {totalProducts}</b></i></h2>
            </div>
            <div className="total-cart-products">
                {
                    orders.map((order)=>{
                        return(
                            order.products.map((product)=>{
                     
                                const imagesRep: { [key: string]: string } = {
                                    "iPhone 11": "https://static-jaymart.com/ecom/public/1mNO8ihVNEBs7fmhrbkWpuTQy6Z.jpg",
                                    "MacBook Air": "https://www.ultigiz.cl/wp-content/uploads/2022/11/Apple_MacBook_Air_13_M2_MLY43CIA_3.png",
                                    "iPad Pro": "https://www.sagitariodigital.com.ar/wp-content/uploads/2022/11/IPAD-PRO-M2-8.jpg",
                                    "Apple Watch Series 6": "https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/80/1080469_smartwatch-apple-watch-series-6-40mm-gps-caixa-prateada-e-pulseira-branca-esportiva-mydm2be-a_m3_637457015399009208.jpg",
                                    "AirPods Pro": "https://maximstore.com/wp-content/uploads/2023/05/AIRPODS-PRO-2-1.jpeg",
                                    "HomePod mini": "https://acdn.mitiendanube.com/stores/002/092/809/products/homepoddd-071-98044bdea46ba3b7c916626491351449-240-0.jpg",
                                  };
                                
                                  const isImageBroken = (url: string) => {
                                    const img = new Image();
                                    img.src = url;
                                    return !img.complete || img.naturalWidth === 0;
                                  };
                                
                                  const brokenImageSrc = imagesRep[product.name];

                                return(
                                    <StyledContCard key={product.id} className="product-card-cart-info">
                                        <div className="image-product-card-cont">
                                            {isImageBroken(product.image) ? (
                                              <img className="img-cover" src={brokenImageSrc} alt={product.name} />
                                            ) : (
                                              <img className="img-cover" src={product.image} alt={product.name} />
                                            )}
                                        </div>

                                        <div className="info-product-card-cont">
                                            <h3><b>{product.name}</b></h3>
                                            <p>us$ {product.price}</p>
                                            <i>{order.date.toString()}</i>
                                            <Link href={`/products/${product.id}`}>
                                              <button className="button-details" >
                                                more details
                                              </button>
                                            </Link>
                                        </div>
                                    </StyledContCard>
                                )
                            })
                        )
                    })
                }
            </div>
        </StyledPrincipalContCards>
        <StyledPayContent className="gral-cont-pay">
            <div className="total-price-and-pay">
                <div className="total-price-h3-cont">
                    <h3 className="total-price-h3"><b>Total:  <i>us$ {totalPrice}</i></b></h3>
                    <button style={{display: "flex", gap: "1rem", justifyContent:"space-evenly", alignItems: "center"}}>
                        <b>Download Tiket</b>
                        <img src="/document.png" alt="Shopping Cart" style={{filter: "invert(100%)", marginInline: "auto", width: "23px", height: "23px"}}/>    
                    </button>
                </div>
                <div className="pay-card-methods">
                    <p>PAY METHODS</p>
                    <div className="card-pay-container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="bank site" style={{width: "2.2rem", height: "1.2rem"}}/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4gLCtNHrcbZmQIdqUbXIIC_GBqKw0K-ozfso4B2W3g&s" alt="bank site" style={{width: "2.4rem", height: "1.6rem"}}/>
                        <img src="https://cdn.icon-icons.com/icons2/1178/PNG/512/amex_82052.png" alt="bank site" style={{width: "2.3rem", height: "1.6rem"}}/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-PEVVUDdOhG3dJARu5lY6OCU3RD_sc6oLGY2Vjhkikw&s" alt="bank site" style={{width: "2.7rem", height: "1.2rem"}}/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" alt="bank site" style={{width: "3rem", height: "1.2rem"}}/>
                    </div>
                    <div className="card-pay-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dk4DoHSu0nstJxQC1nNXCVN2IQBoPjA_VrMSzvRlFA&s" alt="bank site" style={{width: "3rem", height: "1.5rem"}}/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mYw0o2EsMCikpUgHNH1ezQBbe4g50fiGsh1kCvMhmA&s" alt="bank site" style={{width: "2.8rem", height: "1.6rem"}}/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7XuJbH2WoEesJBOPTUWpol6bd8iCIOn5Fa7h_tQ28Q&s" alt="bank site" style={{width: "3rem", height: "1.6rem"}}/>
                        <img src="https://iconape.com/wp-content/files/iz/301156/svg/301156.svg" alt="bank site" style={{width: "3rem"}}/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w_jQYtPQfxI5iWwNqwZp9M3nL7mvIDlCGzJoCAm4mQ&s" alt="bank site" style={{width: "2.9rem", height: "1.1rem"}}/>
                    </div>
                </div>
                <div className="protected-purchase-text">
                    <h4><b>Protected purchase</b> <img style={{width: "30px", display: "inline"}}src="https://png.pngtree.com/png-clipart/20220509/original/pngtree-green-shield-check-mark-safe-or-protect-icon-logo-png-image_7689346.png" alt="" /></h4>
                    <p>Lorem ipsum dolor sit 
                       amet consectetur, adipisicing 
                       elit. Dolorem, quasi nobis ad 
                       tempora eos ab consequuntur in 
                       soluta, praesentium 
                    </p>
                </div>
            </div>
        </StyledPayContent>
      </StyledPrincipalCont>
    );
  };
  

export default Order;