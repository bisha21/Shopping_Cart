import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../feature/cart/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    console.log("Dispatching deleteItem with product:", item);
    dispatch(deleteItem(item));

  }

  return (
    <div className='grid grid-cols-2 place-items-center p-4 border-2 border-black shadow-xl w-[40vw] mt-6  '>
      <div className='flex items-center p-4 w-[200px] '>
        <img src={item?.image} alt='image' className='w-full rounded-lg' />
      </div>
      <div className='flex flex-col items-center justify-center w-full p-4 gap-2'>
        <h1 className='text-2xl text-gray-800 p-2 font-bold'>{item?.title}</h1>
        <h1 className='text-2xl text-gray-800 p-2 font-semibold'>${item?.price}</h1>
        <h1 className='text-2xl text-gray-800 p-2 font-semibold'>Quantity: {item?.quantity}</h1>
        <p>{item?.description}</p>
        <button
          className="bg-black text-white text-xl w-42 p-2 hover:bg-blue-950 rounded-sm"
          onClick={handleDeleteItem}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
}
