import Head from 'next/head';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItems from '../components/CartItems';
import CartSummary from '../components/CartSummary';

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Head>
        <title>Shopping Cart - Boomine</title>
        <meta name="description" content="Your shopping cart" />
      </Head>

      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
          
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl mb-4">Your cart is empty</p>
              <a href="/products" className="text-blue-600 hover:underline">
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <CartItems items={cart} />
              </div>
              <div>
                <CartSummary items={cart} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
