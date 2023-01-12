import React from 'react';

import './categoryButtons.scss';
const CategoryButtons = () => {
  return (
    <ul className='category__list'>
      <li className='selected'>All</li>
      <li>Category 1</li>
      <li>Category 2</li>
      <li>Category 3</li>
      <li>Category 4</li>
      <li>Category 5</li>
    </ul>
  );
};

export default CategoryButtons;
