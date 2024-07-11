import React, { useEffect, useState, useCallback } from 'react';
import Items from '../Component/Items';
import Products from '../Component/Items';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      if (!data) {
        console.error('Data not found');
        throw new Error('Data could not be found');
      }
      setProducts(data);
    } catch (error) {
      console.error(error);
      setError('Failed to load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3 '>
{
  products && products.length>0 ? products.map(product =>(
    <Products product={product} key={product.id}/>
  )
  ):null
}
</div>
);


}
