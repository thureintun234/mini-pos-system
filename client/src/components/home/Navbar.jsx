import React from 'react';
import logo from '../../assets/main-logo.png';
import { BiSearch } from 'react-icons/bi';
import { HiShoppingCart } from 'react-icons/hi';

import './navbar.scss';

const Navbar = ({ itemAdded = 0, onToggle, isOpen = false }) => {
  return (
    <nav className='nav'>
      <img src={logo} alt='logo' />

      <div className='nav-left'>
        {/* search bar */}
        <div className='nav-search'>
          <input type='text' placeholder='Search' />
          <button>
            <BiSearch />
          </button>
        </div>

        {/* checkout */}
        {!isOpen && (
          <div className='checkout' onClick={onToggle}>
            <span>
              <HiShoppingCart size='26px' />
            </span>
            <span className='badge'>{itemAdded}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
