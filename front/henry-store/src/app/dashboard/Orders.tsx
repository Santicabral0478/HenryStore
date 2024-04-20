"use client";
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import Order from '@/components/Order'; 
import NoLogued from '@/components/NoLogued';

import { IOrder } from './types';

import { getOrders } from './OrderService';
import { useAuth } from '@/context/authContext';

// Metadatos
type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "Dashboard",
  description: "description - Dashboard",
};

// ---

const Orders = () => {

  //Traer de el context el token del usuario 
  const auth = useAuth(); 
  const token = auth ? auth.token : null;

  
// ---

  const [orders, setOrders] = useState<IOrder[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchOrders = async () => {
      if (token) { 
        const data = await getOrders(token);
        setOrders(data);
      }
      setIsLoading(false);
    };
    fetchOrders();
  }, [token]);

  return (
    <div className="">
      {/* metadatos */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      {isLoading == false && token == null && <NoLogued/>}
      {isLoading ? 
        <div className="flex h-[40rem] w-full items-center justify-center">
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-28 h-28 border-8 text-gray-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-yellow-600 rounded-full">
            </div>
          </div>
        </div>
        : (token && <Order orders={orders}/>)}
    </div>
  );
};

export default Orders;
