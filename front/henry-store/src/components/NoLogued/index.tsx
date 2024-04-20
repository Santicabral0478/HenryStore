import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNotLogContainer = styled.section`
    height: 90vh;
    width: 100%;
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
        width: 15rem;
    }

    .nolog-container-items .nolog-img-text h2{
        font-size: 21px;
        color: #000;
    }

    .nolog-container-items .nolog-img-text p{
        font-size: 15px;
        color: #212121;
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

export const NoLogued: React.FunctionComponent= () => {

   return(
    <StyledNotLogContainer className="">
        <div className="nolog-container-items">
            <div className="nolog-img-text">
                <img src="https://img.pikbest.com/element_our/20230707/bg/3ee7b9fe26118.png!sw800" alt="cart noLogued" />
                <h2><b>No purchases</b></h2>
                <p>¡Log-in and start shopping!</p>
            </div>
            <div className="nolog-button">
                <Link href={`/login`}>
                    <button>Login</button>
                </Link>
            </div>
        </div>
    </StyledNotLogContainer>
   )
                   
  };
  

export default NoLogued;