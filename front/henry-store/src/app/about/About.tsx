"use client";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";

import "./style.css"


export const About = ()=>{
    return(
        <div className="">
            <NavBar/>
            <div className="">
                <div className="left-container">
                    <div className="text-container">
                        <div className="p-h2-button-container">
                            <h1>Envio rapido</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at voluptate, eveniet id repellat cupiditate eos dolorem consequaturrepellat cupiditate eos dolorem consequatur </p>
                            <button className="button1">Continue</button>
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="img-cont">
                            <img src="/henry3.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <div className="text-container">
                        <div className="p-h2-button-container">
                            <h1>Envio rapido</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at voluptate, eveniet id repellat cupiditate eos dolorem consequaturrepellat cupiditate eos dolorem consequatur </p>
                            <button className="button2">Continue</button>
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="img-cont">
                            <img src="/henry2.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="left-container">
                    <div className="text-container">
                        <div className="p-h2-button-container">
                            <h1>Envio rapido</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at voluptate, eveniet id repellat cupiditate eos dolorem consequaturrepellat cupiditate eos dolorem consequatur </p>
                            <button className="button3">Continue</button>
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="img-cont">
                            <img src="/henry1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;