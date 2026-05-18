import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Cart({ setCurrentPage }) {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0
  );

  const handleCheckout = () => {
    setOrderPlaced(true);

    setTimeout(() => {
      setCurrentPage("contact");
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-md">
          <div className="text-6xl mb-4">🚚</div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            Your order is processing!
          </h2>
          <p className="text-gray-500">
            We are preparing your flower order. You will be redirected to the contact page.
          </p>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-semibold mb-3">Your cart is empty 🛒</h2>
        <p className="text-gray-500 mb-6">
          Looks like you haven't added anything yet.
        </p>

        <button
          onClick={() => setCurrentPage("products")}
          className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Shopping Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 border rounded-xl p-4 shadow-sm bg-white"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src={item.img || item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">Rs {item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 border rounded-md hover:bg-gray-100"
              >
                -
              </button>

              <span className="font-medium">{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 border rounded-md hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <div className="font-semibold text-pink-600">
              Rs {Number(item.price) * item.qty}
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-semibold">
          Total: <span className="text-pink-600">Rs {totalPrice}</span>
        </h3>

        <button
          onClick={handleCheckout}
          className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}