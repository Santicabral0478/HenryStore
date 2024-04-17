"use client";
import { Metadata } from 'next';
import React, { useEffect, useState } from 'react';
import { getOrders } from './OrderService'
import { IOrder } from './types';
import Order from '@/components/Order'; 
import NavBar from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import NoLogued from '@/components/NoLogued';
import { useAuth } from '@/context/authContext';

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart of user...",
  robots: {
    index: false,
    follow: true,
  },
};

export const Orders = () => {
  const auth = useAuth(); 
  const token = auth ? auth.token : null; 
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
      <NavBar/>
      {!isLoading && !token && <NoLogued/>}
      {isLoading ? 
        <div className="flex h-[40rem] w-full items-center justify-center">
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-yellow-600 rounded-full">
            </div>
          </div>
        </div>
        : (token && <Order orders={orders}/>)}
      <Footer/>
    </div>
  );
};

export default Orders;