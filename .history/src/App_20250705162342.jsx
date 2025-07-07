import React from 'react';
import './index.css';

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
  const openHours = 9;
  const closeHours = 21;
  const isOpen = hour >= openHours && hour < closeHours;

  return (
    <header>
      <h1 className="header">Electronic Store</h1>
      <nav className="nav">
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
      <div className="working-hours">
        {isOpen
          ? <p>
              We are currently open. Hours: {openHours}:00 - {closeHours}:00
            </p>
          : <p>
              Sorry, we are closed. Hours: {openHours}:00 - {closeHours}:00
            </p>}
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
