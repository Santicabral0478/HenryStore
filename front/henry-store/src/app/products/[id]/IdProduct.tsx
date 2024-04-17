"use client";
import { useState, useEffect } from 'react';
import { IProduct } from "@/components/Card/types";
import { ProductDetail } from '@/components/ProductDetail';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { backurl } from '@/app/BACK_URL';
import { Params } from './types';

const getProduct = async (id: string) => {
    try {
        const response = await fetch(`${backurl.apiurl}/products`, {
            headers: {
                'ngrok-skip-browser-warning': 'true'
            }
        });
        const data = await response.json();

        // Buscar el producto por ID
        const item = data.find((item: IProduct) => item.id.toString() === id);
        console.log(item);
        return item; 
    } catch (error) {
        console.error("Error fetching character:", error);
        return null;
    }
};

export const IdProducts = ({ params }: { params: Params }) => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const [redirect, setRedirect] = useState<boolean>(false);

    useEffect(() => {
        const fetchProduct = async () => {
            const item = await getProduct(params.id);
            setProduct(item);
        };

        fetchProduct();
    }, [params.id]);

    useEffect(() => {
        if (product === undefined) {
            setRedirect(true);
        }
    }, [product]);

    if (redirect === true) {
        window.location.href = '/404';
        return null;
    } 

    return (
        <div>
            {product ? (
                <div className="">
                    <NavBar/>
                    <ProductDetail {...product}/>
                    <Footer/>
                </div>
            ) : (
                // ::::::::::::__----SKELETON----__:::::::::::::::
                <div className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4">
                    <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                      <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                      <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                      <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IdProducts;
