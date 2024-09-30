import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div>
      <div className='w-full h-10 text-white text-sm flex items-center justify-center' style={{ backgroundColor: '#0E1422', fontFamily: 'inter' }}>
      <span className='font-light'>Get 25% OFF on your first order.</span>
      <span className='ml-2 cursor-pointer'>Order Now</span>
      </div>
    <header className="bg-white w-full h-20 flex items-center justify-center space-x-36" style={{ color: '#5C5F6A' }}>
      <div>
      <img src="/images/Header.png" alt="Logo" />
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>

          <li className='flex items-center'> {}
            <Link to="/categories" className="flex items-center space-x-1"> {}
              <span>Categories</span>
              <img src="/images/Vector.png" alt="Logo" className="pl-2" /> {}
            </Link>
          </li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/shoppingcart">Shopping Cart</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;