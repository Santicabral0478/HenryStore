"use client"
import { lazy, Suspense } from "react";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
const LazyProductCards = lazy(() => import("@/components/ProductCards"));

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Suspense fallback={<div><h1>loading...</h1></div>}>
        <LazyProductCards/>
      </Suspense>
      <Footer/>
    </div>
  );
} 
