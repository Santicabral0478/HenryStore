"use client"
import type { Metadata } from "next";
import styled from "styled-components";
import Head from "next/head";

export const metadata: Metadata = {
    title: "Error: 404",
    description: "Sorry, We couldn't find the page you are looking for : /",
  };

const StyledNotLogContainer = styled.section`
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgb(216, 216, 216) 0%, rgba(0, 0, 0, 0) 100%); 
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .nolog-container-items{
        display: flex; 
        flex-direction: column;
    }

    .nolog-container-items .nolog-img-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.3rem;
    }

    .nolog-container-items .nolog-img-text img{
        width: 20rem;
    }

    .nolog-container-items .nolog-img-text h2{
        font-size: 21px;
        color: #000;
    }

    .nolog-container-items .nolog-img-text p{
        font-size: 17px;
        color: #212121;
        margin-inline: 2rem;
    }

    .nolog-container-items .nolog-button button{
        transition: all .1s ease-in;
        width: 100%;
        padding: .7rem;
        margin-block: 1rem;
        font-size: 20px;
        color: #fff;
        background: rgb(87,218,96);
        background: linear-gradient(225deg, #4666f6 0%, #1982dd 100%);
        border-radius: 26px;
        border: 1px solid #6782ff;
    }

`;

export default function PageNotFound(){
    return(
        <div className="">
            <StyledNotLogContainer className="">
                <div className="nolog-container-items">
                    <div className="nolog-img-text">
                        <img src="https://static.vecteezy.com/system/resources/previews/017/785/272/non_2x/3d-rendering-design-of-ornamental-plants-for-home-decoration-needs-free-png.png" alt="cart" />
                        <h2>Error: <b>404</b></h2>
                        <p>Sorry, We couldn't find the page you are looking for 🙁</p>
                    </div>
                </div>
            </StyledNotLogContainer>
        </div>
    );
}