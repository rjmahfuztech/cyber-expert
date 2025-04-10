import React from "react";

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((total, expert) => total + expert.salary, 0);

  return (
    <div className="bg-gray-200 p-2 rounded-md min-h-96 sticky top-8">
      <h2 className="text-sm md:text-xl font-semibold">
        Expert Added: {cart.length}
      </h2>
      <h2 className="text-sm md:text-xl font-semibold">
        Total Cost: ${totalPrice}
      </h2>
      <div className="mt-3 border-t-1 pt-2 divide-y-1 divide-gray-300">
        {cart.map((item) => (
          <div className="sm:flex items-center gap-2 mt-2 mb-2" key={item.id}>
            <div className="flex justify-center sm:justify-start">
              <img
                className="w-10 md:w-15 rounded-full"
                src={item.img}
                alt="expert-picture"
              />
            </div>
            <p className="text-center sm:text-start text-semibold">
              {item.name}
            </p>
          </div>
        ))}
        {cart.length > 0 && (
          <button
            onClick={() => setCart([])}
            className="w-full bg-blue-500 p-2 font-semibold text-white rounded-md mt-4 cursor-pointer hover:bg-blue-700"
          >
            Confirm List
          </button>
        )}
      </div>
    </div>
  );
};
export default Cart;
