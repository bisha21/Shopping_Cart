import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Component/cartItem";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector(state => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, current) => acc + current.price * current.quantity, 0));
  }, [cart]);

  return (
    <div>
      {cart && cart.length > 0 ? (
        <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-6 mx-auto ">
            {cart.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-bold text-xl mb-4">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-black text-white text-xl w-42 py-2 px-4 hover:bg-blue-950 rounded-xl">
              Buy now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
