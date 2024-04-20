import React, { useState, useEffect } from "react";
import {styled, keyframes} from "styled-components"
import { NavBarMobileProps } from "./types";
import Link from "next/link";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledContainerAbsolute = styled.div`
    animation: ${fadeInAnimation} 0.5s ease-out forwards;
    position: fixed;
    width:100% ;
    height: 100%;
    top: 0;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 99999;

    & ul{
        display: flex;
        background: #f7f7f7;
        border: 1px solid #a5a5a5;
        flex-direction: column;
        border-radius: 15px;
        padding-inline: 1rem;
    }

    & ul li{
        border-bottom: 1px solid #ababab;
        padding: 15px;
        width: auto;
    }

    & ul li span{
        color: #000000;
        font-size: 17px;
        text-decoration: none;
    }

    transition: all .2s ease-in;
`;

const StyledBtnClose = styled.button`
    margin-left: 1rem;
    margin-top: 1rem;
    width: 3.3rem;
    height: 3.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffffa1;
    border: 1px solid #ffffff; 
    border-radius: 10px;
    padding: 10px;

    img{
        width: 100%;
    }
`;

export const NavBarMobile:React.FunctionComponent<NavBarMobileProps> = ({ onCloseMenu })=>{

    const handleCloseMenu = () => {
        onCloseMenu();
    };

    return(
        <StyledContainerAbsolute className="header-menu-movil">
            <StyledBtnClose className="cerrar-menu" onClick={handleCloseMenu}>
                <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="" />
            </StyledBtnClose>
            <ul>
                <li>
                  <Link  href={`#`}>
                    <span>Offers</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={handleCloseMenu} href={`/`}>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={handleCloseMenu} href={`/about`}>
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={handleCloseMenu} href={`/products`}>
                    <span>Products</span>
                  </Link>
                </li>
                <li style={{borderBlockEnd: "none"}}>
                    <Link href="">
                        <span>Contacto</span>
                    </Link>
                </li>
            </ul>
        </StyledContainerAbsolute>
    )
}