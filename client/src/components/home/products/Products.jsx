import React from 'react';
import defaultImage from '../../../assets/default.png';

import './products.scss';

const Products = ({ products, onSelect }) => {
  return (
    <div className='products'>
      {products.map((data) => (
        <div
          className='product__card'
          key={data._id}
          onClick={() => onSelect(data._id)}
        >
          <div className='product__card-img'>
            <img
              src={
                data.image
                  ? `https://mini-pos-system.onrender.com/images/${data.image}`
                  : defaultImage
              }
              alt={data.name}
            />
          </div>
          <div className='product__card-title'>{data.name}</div>
          <div className='product__card-price'>
            ks <span>{data.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
