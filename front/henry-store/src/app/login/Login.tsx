"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import React from 'react';

import { Footer } from "@/components/Footer";
import { AuthForm } from "@/components/Login";

// ---

export const Login = () => {
    
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      setToken(userToken);
    } 
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", height: "100vh"}} className="">
         <div style={{  marginTop: "4rem"}}>
           <Link href={`/`}>
             <button>
               <img style={{width: "15rem"}} src="https://andres-lopez-portafolio.vercel.app/img/henry.png" alt="" />
             </button>
           </Link>
         </div>
         <AuthForm token={token} setToken={setToken} />
      </div>
      <Footer/>
    </div> 
  );
};

export default Login;
