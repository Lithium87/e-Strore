import React from 'react';

const productData = [
  {
    name: 'Laptop Pro',
    description: 'High-performance laptop for professionals.',
    price: 1200,
    photoName: '/laptop.png',
    soldOut: false,
  },
  {
    name: 'Smartphone X',
    description: 'Latest model with stunning display.',
    price: 800,
    photoName: '/smartphone.png',
    soldOut: false,
  },
  {
    name: 'Wireless Headphones',
    description: 'Noise-cancelling headphones with great sound quality.',
    price: 200,
    photoName: '/headphones.png',
    soldOut: false,
  },
  {
    name: 'Smartwatch Z',
    description: 'Stylish smartwatch with fitness tracking features.',
    price: 150,
    photoName: '/smartwatch.png',
    soldOut: false,
  },
  {
    name: 'Gaming Console',
    description: 'Powerful gaming console for endless fun.',
    price: 400,
    photoName: '/console.png',
    soldOut: true,
  },
  {
    name: '4K TV',
    description: 'Ultra HD television with vibrant colors.',
    price: 1000,
    photoName: '/tv.png',
    soldOut: false,
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
};

const Header = () => {
  const hour = new Date ().getHours ();
  const isOpen = hour >= 9 && hour < 21; // Store open from 9 AM to 9 PM

  return (
    <header>
      <h1>Electronic Store</h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#catalog">Catalog</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <p>We are currently open. Hours:</p>
      </div>
    </header>
  );
};

const Catalog = () => {
  return (
    <main>
      <ul>
        <Product />
      </ul>
    </main>
  );
};

const Product = () => {
  return (
    <li>
      <img src={productData[0].photoName} alt={productData[0].name} />
      <div>
        <h3>{productData[0].name}</h3>
        <p>{productData[0].description}</p>
        <span>{productData[0].price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  return <footer>Footer</footer>;
};

export default App;
