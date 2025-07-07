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
    <React.Fragment>
      <Header />
      <Catalog />
      <Footer />
    </React.Fragment>
  );
};

const Header = () => {
  const hour = new Date ().getHours ();
  const openHours = 9;
  const closeHours = 21;
  const isOpen = hour >= openHours && hour < closeHours;

  return (
    <header className="header">
      <h1>Electronic Store</h1>
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
    <main className="catalog">
      <h2>Product Catalog</h2>
      <ul className="products">
        {productData.map ((product, index) => (
          <Product
            key={index}
            name={product.name}
            description={product.description}
            price={`$${product.price}`}
            img={product.photoName}
          />
        ))}
      </ul>
    </main>
  );
};

const Product = props => {
  return (
    <li className={`product ${props.soldOut ? 'sold-out' : ''}`}>
      {props.soldOut && <span className="sold-out-badge">Sold Out</span>}
      <img src={props.img} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>{props.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  return <footer className="footer">Footer</footer>;
};

export default App;
