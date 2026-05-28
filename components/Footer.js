export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About Boomine</h3>
            <p className="text-gray-400">Your destination for premium quality clothing.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/products" className="hover:text-white">Shop</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/returns" className="hover:text-white">Returns</a></li>
              <li><a href="/shipping" className="hover:text-white">Shipping Info</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Boomine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
