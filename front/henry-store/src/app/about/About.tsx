"use client";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "./style.css"
import Head from "next/head";
export const About = ()=>{


    return(
        <div className="">
            <Head>
                <title> About </title>
            </Head>
            <div className="">
                <div className="left-container">
                    <div className="text-container">
                        <div className="p-h2-button-container">
                            <h1>Swift and Reliable Delivery!</h1>
                            <p>Count on us for swift, reliable delivery. Our commitment ensures your tech products reach you efficiently, every time, hassle-free.</p>
                            <button className="button1">View more</button>
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
                            <h1>Quality Tech Since 2005</h1>
                            <p>With over two decades of experience, we're at the forefront of technology. Our legacy speaks volumes about our dedication and expertise. </p>
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
                            <h1>Global Shipping: Efficiency Every Mile</h1>
                            <p>From bustling metropolises to remote locales, our global shipping network ensures your orders arrive on time, every time. Our meticulous logistics and reliable transport guarantee peace of mind, wherever you are</p>
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
   
        </div>
    )
}

export default About;