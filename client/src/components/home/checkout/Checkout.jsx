import React from 'react';

const Checkout = ({ closeModal, selectedItems }) => {
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
            <div className='checkout__item' key={data.id}>
              {/* item image */}
              <div className='checkout__item-img'>
                <img src={data.image} alt={data.title} />
              </div>
              {/* item details */}
              <div className='checkout__item-data'>
                <div className='checkout-title'>
                  <div>{data.title}</div>
                  <div className='close'>X</div>
                </div>
                <div className='checkout-btns'>
                  <div className='btn add-btn'>+</div>
                  <div>{1}</div>
                  <div className='btn remove-btn'>-</div>
                  <h5>Ks 3000</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* total */}
        <div className='checkout-total'>
          <div>
            <div>Subtotal</div>
            <div className='price-amount'>Ks 9000</div>
          </div>
          <div>
            <div>Tax (5%)</div>
            <div className='price-amount'>Ks 450</div>
          </div>
          <div className='total'>
            <div>Total</div>
            <div className='total-amount'>Ks 9450</div>
          </div>
          <button>Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
