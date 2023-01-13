import React from 'react';

import './categoryButtons.scss';
const CategoryButtons = ({ categories, selectedCategory, onClick }) => {
  return (
    <ul className='category__list'>
      <li
        className={selectedCategory === 'all' ? 'selected' : ''}
        onClick={() => onClick('all')}
      >
        All
      </li>
      {categories.map((category) => (
        <li
          className={selectedCategory === category ? 'selected' : ''}
          key={category}
          onClick={() => onClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryButtons;
