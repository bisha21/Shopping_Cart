import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../feature/cart/cartSlice';

export default function Products({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);

  function handleAddItem() {
    console.log("Dispatching addItem with product:", product);
    dispatch(addItem(product));
  }

  function handleDelete() {
    console.log("Dispatching deleteItem with product:", product);
    dispatch(deleteItem(product));

  }

  return (
    <div className="flex flex-col items-center border-2 border-black gap-3 p-4">
      <div className='h-[180px]'>
        <img src={product?.image} alt={product?.title} className='object-cover w-full h-full'/>
      </div>
      <div>
        <h1 className="text-lg font-semibold w-40">{product.title}</h1>
      </div>
      <button
        className="bg-black text-white text-xl w-42 p-2 hover:bg-blue-950 rounded-sm"
        onClick={cart.some(item => item.id === product.id) ? handleDelete : handleAddItem}
      >
        {cart.some(item => item.id === product.id) ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
}
