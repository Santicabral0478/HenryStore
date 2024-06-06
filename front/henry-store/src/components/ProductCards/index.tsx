
import React, { useEffect, useState } from 'react';
import { fetchData } from '../ProductCards/ProductCardsServer';
import { Card } from '../Card';
import { IProduct } from './types'; 
import "./style.css"

export const ProductCards = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-cards">
      {products.map((product: IProduct) => (  
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductCards;