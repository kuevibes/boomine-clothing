# Boomine Clothing E-Commerce Store

A modern e-commerce website for Boomine clothing brand built with Next.js and Node.js.

## 🎯 Features

### Core E-Commerce
- Product catalog with search and filtering
- Shopping cart functionality
- Secure checkout process with Stripe
- Order management system
- Product categories (Men, Women, Accessories)

### User Features
- User authentication (register/login)
- Product filtering by category and price
- Shopping cart with persistent storage
- Order tracking

### Admin Features
- Product management
- Order status tracking
- Inventory management

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment**: Stripe integration
- **Authentication**: JWT with bcrypt

## 📋 Project Structure

```
boomine-clothing/
├── pages/                 # Next.js pages
├── components/           # React components
├── context/              # React Context
├── server/               # Backend server
├── styles/              # CSS files
└── public/              # Static assets
```

## 🚀 Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit `http://localhost:3000`

## 📝 Environment Setup

Create `.env.local` with:
```
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
JWT_SECRET=your_secret
```

## 📄 License

MIT License
