"use client"
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '../context/authContext';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Tu destino para la tecnología más avanzada. Encuentra smartphones, laptops, tablets y accesorios. ¡Explora ahora!" />
        <meta name="keywords" content="Digital, Apple, iPhone, iPad, Airpods, Henry, Henry-store"/>
        <meta name="Language" content="es, en"/>
        <meta name="country" content="Argentina"/>
        <meta name="Revisit" content="7 days"/>
        <meta name="Distribution" content="global"/>
        <meta name="Authors" content="Santiago Cabral"/>
        <meta name="googlebot" content="index, follow" />
        
        <title>Henrry | store</title>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <NavBar/>
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}