"use client";
import { useState, useEffect } from 'react';
import { IProduct } from "@/components/Card/types";
import { ProductDetail } from '@/components/ProductDetail';
import { Params } from './types';
import { getProduct } from './getProduct';
import Head from 'next/head';

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
                    <ProductDetail {...product}/>
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
