export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await fetch(`${process.env.API_BASE_URL}/api/products`);
      const products = await response.json();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  }
}
