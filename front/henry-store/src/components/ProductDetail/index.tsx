import { IProduct } from "../Card/types";
import React from "react";
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
            alert("Successful Purchase ✅");
            window.location.href = '/dashboard';
            
            if (!response.ok) {
                throw new Error("Failed to Buy ❌");
            }
    
        } catch (error) {
            alert("Failed to Buy ❌");
            console.error("Error:", error);
        }
    };
    

    return (
        <>
            <main>
                <section className="section prodmin" aria-label="prodmin">
                  <div className="contenedor cont-producto">

                    <div className="imagenes-deslizable">
                      <div className="swiper imagenes-deslizable-cards">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <article className="imagenes-deslizable-articulo">
                                      <img src="../assets/img/casa-en-renta1.jpg" alt="image imagenes-deslizable" className="imagenes-deslizable__img"/>

                                  </article>
                              </div>

                              <div className="swiper-slide">
                                  <article className="imagenes-deslizable-articulo">
                                      <img src="../assets/img/casa-en-renta1-a.jpg" alt="image imagenes-deslizable" className="imagenes-deslizable__img"/>

                                  </article>
                              </div>

                              <div className="swiper-slide">
                                  <article className="imagenes-deslizable-articulo">
                                      <img src="../assets/img/casa-en-renta1-b.jpg" alt="image imagenes-deslizable" className="imagenes-deslizable__img"/>

                                  </article>
                              </div>

                              <div className="swiper-slide">
                                  <article className="imagenes-deslizable-articulo">
                                      <img src="../assets/img/casa-en-renta1-c.jpg" alt="image imagenes-deslizable" className="imagenes-deslizable__img"/>

                                  </article>
                              </div>
                          </div>
                      </div>

                      {/* =============== swiper IMAGENES-DESLIZABLE THUMBNAIL ===============  */}
                      <div className="imagenes-deslizable__overflow">
                        <div className="background-gradient-imagenes-deslizable"></div>
                          <div className="swiper imagenes-deslizable-thumbs">
                              <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                      <div className="imagenes-deslizable__thumbnail">
                                          <img src="../assets/img/casa-en-renta1.jpg" alt="image thumbnail" className="imagenes-deslizable__thumbnail-img"/>
                                      </div>
                                  </div>

                                  <div className="swiper-slide">
                                      <div className="imagenes-deslizable__thumbnail">
                                          <img src="../assets/img/casa-en-renta1-a.jpg" alt="image thumbnail" className="imagenes-deslizable__thumbnail-img"/>
                                      </div>
                                  </div>

                                  <div className="swiper-slide">
                                      <div className="imagenes-deslizable__thumbnail">
                                          <img src="../assets/img/casa-en-renta1-b.jpg" alt="image thumbnail" className="imagenes-deslizable__thumbnail-img"/>
                                      </div>
                                  </div>

                                  <div className="swiper-slide">
                                      <div className="imagenes-deslizable__thumbnail">
                                          <img src="../assets/img/casa-en-renta1-c.jpg" alt="image thumbnail" className="imagenes-deslizable__thumbnail-img"/>
                                      </div>
                                  </div>


                              </div>


                          </div>

                          {/* swiper arrows */}
                          <div className="swiper-button-next">
                              <i className="ri-arrow-right-line"></i>
                          </div>
                          <div className="swiper-button-prev">
                              <i className="ri-arrow-left-line"></i>
                          </div>
                      </div>
                  </div>

                      <div className="prodmin-content">
                        <h2 className="h2 section-title">5301 La Plata</h2>

                        <div className="grid-info-producto">
                          <div className="tipo-pago"><p className="prodmin-text">Alquiler</p></div>
                          <div className="tipo-precio"><p className="prodmin-text"><span className="spangreen"> Consultar</span></p></div>
                          <div className="tipo-propiedad"><p className="prodmin-text"><b>Propiedad</b></p></div>
                          <div className="tipo-ubicacion"><p className="prodmin-text"><b>Ubicación</b></p></div>
                          <div className="tipo-propiedad-res"><p className="prodmin-text">Casa</p></div>
                          <div className="tipo-ubicacion-res"><p className="prodmin-text">Barrio Norte</p></div>
                          <div className="tipo-dormitorios"><p className="prodmin-text"><b>Dormitorios</b></p></div>
                          <div className="tipo-antiguedad"><p className="prodmin-text"><b>Antiguedaad</b></p></div>
                          <div className="tipo-dormitorios-res"><p className="prodmin-text">4</p></div>
                          <div className="tipo-antiguedad-res"><p className="prodmin-text">1 Año</p></div>
                        </div>

                      </div>
                  </div>
                </section>

                <section className="inmueble-caract">
                    <div className="contenedor">
                      <div className="cont-general-caract">
                        <div className="caract-inf-basica">
                          <h3 className="caract-title">información Básica</h3>
                        </div>

                        <div className="cont-general-caract-checks"> 
                          <p className="caract-checks">
                            <i className="fa-solid fa-check"></i> Baños: 1<br/>
                            <i className="fa-solid fa-check"></i> Toilettes: 1<br/>
                            <i className="fa-solid fa-check"></i> Condición: Nuevo<br/>
                          </p>
                        </div>

                        <div className="cont-general-caract-checks2">
                          <p className="caract-checks">
                            <i className="fa-solid fa-check"></i> Cocina: 1 <br/>
                            <i className="fa-solid fa-check"></i> Dormitorios: 4<br/>
                            <i className="fa-solid fa-check"></i> Balcón <br/>
                            <i className="fa-solid fa-check"></i> Estacionamiento <br/>
                          </p>
                        </div>

                        <div className="cont-general-caract-sup">
                          <h3 className="caract-title">Superficies y medidas</h3>
                        </div>

                        <div className="cont-general-caract-sup-checks">
                                          <p className="caract-checks">
                            <i className="fa-solid fa-ruler-combined"></i> Superficie Total: 300 m²<br/>
                          </p>
                        </div>

                        <div className="cont-general-caract-desc"> 
                          <h3 className="caract-title">Descripción</h3>
                        </div>

                        <div className="cont-general-caract-desc-cont">
                          <p className="caract-descripcion">
                            🌆 Ubicación Inmejorable: Este departamento se encuentra en el corazón pulsante de la ciudad, rodeado de una vibrante vida urbana. Disfrutarás de un fácil acceso a restaurantes de renombre, tiendas exclusivas, parques serenos y emocionantes lugares de entretenimiento.
                            <br/>
                            🏞️ Vistas Impresionantes: Desde las ventanas de tu nuevo hogar, podrás admirar impresionantes vistas panorámicas de la ciudad. Ya sea de día o de noche, estas vistas te dejarán sin aliento y te conectarán con el latido de la metrópolis.
                            <br/>
                            🏡 Diseño Funcional y Moderno: El departamento cuenta con un diseño inteligente que maximiza el uso del espacio. La distribución fluida conecta las áreas de estar y ofrece un ambiente cálido y acogedor. Los acabados de alta calidad y los detalles elegantes brindan un toque contemporáneo a cada rincón.
                            <br/>
                            🍳 Cocina Totalmente Equipada: La cocina de diseño moderno está equipada con electrodomésticos de primera línea y ofrece amplias encimeras para preparar tus comidas favoritas. Ya sea un chef experimentado o un aficionado, te encantará crear deliciosos platos aquí.
                          </p>
                        </div>

                        <div className="cont-general-caract-serv">
                          <p className="caract-checks">
                            <h3 className="caract-title">Servicios</h3>
                          </p>
                        </div>

                        <div className="cont-general-caract-serv-checks">
                          <p className="caract-checks">
                            <i className="fa-solid fa-bolt"></i> Electricidad <br/>
                            <i className="fa-solid fa-faucet-drip"></i> Agua Potable<br/>
                            <i className="fa-solid fa-fire-flame-simple"></i> Gas Natural <br/>
                            <i className="fa-solid fa-toilet"></i> Cloaca <br/>
                          </p>
                        </div>

                      </div>
                    </div>
                </section>

                <section className="mapa-direccion">
                  <div className="contenedor">
                    <h2 className="mapa-titulo">Ubicación</h2>
                    <div className="google-maps-link">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2606598425305!2d-58.353735624866346!3d-34.673370261178974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3331dcd68fd89%3A0x92dfdde0df93960a!2sAv.%20Bartolom%C3%A9%20Mitre%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1691671696243!5m2!1ses!2sar" ></iframe>
                    </div>
                  </div>
                </section>
            </main>
        </>

    );
  };
 ProductDetail
export default ProductDetail;



