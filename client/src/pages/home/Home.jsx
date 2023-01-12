import React from 'react';
import Navbar from '../../components/home/Navbar';

import './home.scss';
import CategoryButtons from '../../components/home/CategoryButtons';

import laptop from '../../assets/laptop.jpeg';
import headphone from '../../assets/headphone.jpg';
import phone from '../../assets/phone.jpg';
import speaker from '../../assets/speaker.jpg';
import ups from '../../assets/ups.jpg';
import Products from '../../components/home/products/Products';
import { useState } from 'react';
import Checkout from '../../components/home/checkout/Checkout';

const mockData = [
  {
    id: 1,
    image: laptop,
    category: 'laptop',
    title: 'Laptop M21 Model 2023',
    price: 3000,
  },
  {
    id: 2,
    image: headphone,
    category: 'headphone',
    title: 'Headphone Model 2023',
    price: 1000,
  },
  {
    id: 3,
    image: phone,
    category: 'phone',
    title: 'Phone M21 Model 2023',
    price: 2000,
  },
  {
    id: 4,
    image: speaker,
    category: 'speaker',
    title: 'Speaker M21 Model 2023',
    price: 1200,
  },
  {
    id: 5,
    image: ups,
    category: 'ups',
    title: 'UPS M21 Model 2023',
    price: 1300,
  },
  {
    id: 6,
    image: laptop,
    category: 'laptop',
    title: 'Laptop M21 Model 2023',
    price: 3000,
  },
  {
    id: 7,
    image: headphone,
    category: 'headphone',
    title: 'Headphone Model 2023',
    price: 1000,
  },
  {
    id: 8,
    image: phone,
    category: 'phone',
    title: 'Phone M21 Model 2023',
    price: 2000,
  },
  {
    id: 9,
    image: speaker,
    category: 'speaker',
    title: 'Speaker M21 Model 2023',
    price: 1200,
  },
  {
    id: 10,
    image: ups,
    category: 'ups',
    title: 'UPS M21 Model 2023',
    price: 1300,
  },
];

const selectedData = [
  {
    id: 1,
    image: laptop,
    category: 'laptop',
    title: 'Laptop M21 Model 2023',
    price: 3000,
  },
  {
    id: 2,
    image: headphone,
    category: 'headphone',
    title: 'Headphone Model 2023',
    price: 1000,
  },
  {
    id: 3,
    image: phone,
    category: 'phone',
    title: 'Phone M21 Model 2023',
    price: 2000,
  },
];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(selectedData);

  const handleSelect = (id) => {
    console.log(id);
  };

  const toggleCheckout = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='container'>
      <div className='home'>
        <Navbar itemAdded={3} onToggle={toggleCheckout} isOpen={isOpen} />
        <CategoryButtons />
        <Products mockData={mockData} onSelect={handleSelect} />
      </div>

      {isOpen && (
        <Checkout selectedItems={selectedItems} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Home;
