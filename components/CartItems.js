import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartItems({ items }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div>
      {items.map(item => (
        <div key={item._id} className="flex gap-4 pb-4 border-b mb-4">
          <img
            src={item.image || '/placeholder.png'}
            alt={item.name}
            className="w-24 h-24 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-2">${item.price}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                className="px-2 py-1 border rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold mb-2">${(item.price * item.quantity).toFixed(2)}</p>
            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
