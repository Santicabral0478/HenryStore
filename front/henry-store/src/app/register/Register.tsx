"use client";
import { Footer } from '@/components/Footer';
import RegisterForm from '@/components/Register';
import Link from 'next/link';
import React from 'react';


export const Register = () => {
  
  return (
<div> 
     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", height: "105vh"}} className="">
        <div style={{  marginTop: "4rem"}}>
          <Link href={`/`}>
            <button>
              <img style={{width: "15rem"}} src="https://andres-lopez-portafolio.vercel.app/img/henry.png" alt="" />
            </button>
          </Link>
        </div>
        <RegisterForm/>
     </div>
        <Footer/>
    </div>
  );
};

export default Register;