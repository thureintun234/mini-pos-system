import React from 'react';
import defaultImage from '../../../assets/default.png';

const Checkout = ({
  closeModal,
  selectedItems,
  handleRemove,
  onAdd,
  onRemove,
  onOrder,
}) => {
  const totalPrice = selectedItems.reduce(
    (accu, item) => accu + item.price * (item.count || 1),
    0
  );
  const taxPercentage = 5 / 100;
  const taxPrice = Math.floor(totalPrice * taxPercentage);

  return (
    <>
      <div className='checkout__form'>
        {/* header */}
        <div className='checkout__form-title'>
          <h2>Order Details</h2>
          <div className='close' onClick={closeModal}>
            X
          </div>
        </div>
        {/* item info */}
        <div className='checkout-items'>
          {selectedItems.map((data) => (
            <div className='checkout__item' key={data._id}>
              {/* item image */}
              <div className='checkout__item-img'>
                <img
                  src={
                    data.image
                      ? `https://mini-pos-system.onrender.com/images/${data.image}`
                      : defaultImage
                  }
                  crossOrigin='anonymous'
                  alt={data.name}
                />
              </div>
              {/* item details */}
              <div className='checkout__item-data'>
                <div className='checkout-title'>
                  <div>{data.name}</div>
                  <div className='close' onClick={() => handleRemove(data._id)}>
                    X
                  </div>
                </div>
                <div className='checkout-btns'>
                  <div className='btn add-btn' onClick={() => onAdd(data)}>
                    +
                  </div>
                  <div>{data.count}</div>
                  <div
                    className='btn remove-btn'
                    onClick={() => onRemove(data)}
                  >
                    -
                  </div>
                  <h5>
                    <small>Ks</small> {Number(data.price) * Number(data.count)}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* total */}
        <div className='checkout-total'>
          <div>
            <div>Subtotal</div>
            <div className='price-amount'>Ks {totalPrice}</div>
          </div>
          <div>
            <div>Tax (5%)</div>
            <div className='price-amount'>Ks {taxPrice}</div>
          </div>
          <div className='total'>
            <div>Total</div>
            <div className='total-amount'>Ks {totalPrice + taxPrice}</div>
          </div>
          <button onClick={onOrder}>Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
