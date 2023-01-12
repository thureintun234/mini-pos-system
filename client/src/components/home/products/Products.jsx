import React from 'react';

import './products.scss';

const Products = ({ mockData, onSelect }) => {
  return (
    <div className='products'>
      {mockData.map((data) => (
        <div
          className='product__card'
          key={data.id}
          onClick={() => onSelect(data.id)}
        >
          <div className='product__card-img'>
            <img src={data.image} alt={data.title} />
          </div>
          <div className='product__card-title'>{data.title}</div>
          <div className='product__card-price'>
            ks <span>{data.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
