"use client";
import { useState, useEffect } from 'react';
import { IProduct } from "@/components/Card/types";
import { ProductDetail } from '@/components/ProductDetail';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { backurl } from '@/app/BACK_URL';
import { Params } from './types';
import Head from 'next/head';

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
                    <Head>
                        <title>{product.name}</title>
                        <meta name="description" content={product.description} />
                    </Head>
                    <NavBar/>
                    <ProductDetail {...product}/>
                    <Footer/>
                </div>
            ) : (
                <div className="flex h-[40rem] w-full items-center justify-center">
                    <div className="flex-col gap-4 w-full flex items-center justify-center">
                      <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-yellow-600 rounded-full">
                
                      </div>
                    </div>
                  </div>
            )}
        </div>
    );
};

export default IdProducts;
