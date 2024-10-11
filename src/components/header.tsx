import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div>

        <div className='w-full h-12 text-white text-sm flex items-center justify-center' style={{ backgroundColor: '#0E1422', fontFamily: 'inter' }}>
          <span className='font-light'>Get 25% OFF on your first order.</span>
          <span className='ml-2 cursor-pointer underline'>Order Now</span>
        </div>

      
    <header className="bg-white w-full h-20 flex items-center justify-center space-x-36" style={{ color: '#5C5F6A' }}>
      <div>
         <Link to="/"> <img src="/images/Header.png" alt="Logo" className='cursor-pointer'/> </Link>
      </div>

      <nav>
        <ul className="flex space-x-8">
          
          <li><Link to="/">Home</Link></li>


          <li className='relative group'>
                  <Link to="/categories" className="flex items-center space-x-1">
                    <span>Categories</span>
                    <img src="/images/Vector.png" alt="Dropdown" className="pl-2" />
                  </Link>

            <div className="absolute hidden group-hover:block bg-white shadow-lg">
              <div className="p-2 flex space-x-8">

                <div>
                  <h1 className='text-black font-semibold mb-2 mx-4 mt-2 cursor-pointer'>Female</h1>
                  <ul>
                    <li className="block px-4 py-2 cursor-pointer">Tops</li>
                    <li className="block px-4 py-2 cursor-pointer">Bottoms</li>
                    <li className="block px-4 py-2 cursor-pointer">Dresses</li>
                    <li className="block px-4 py-2 cursor-pointer">Two-Piece</li>
                    <li className="block px-4 py-2 cursor-pointer">Jackets + Coats</li>
                    <li className="block px-4 py-2 cursor-pointer">Sportswear</li>
                    <li className="block px-4 py-2 cursor-pointer">Swimwear</li>
                    <li className="block px-4 py-2 cursor-pointer">Shoes</li>
                  </ul>
                </div>


                <div>
                  <h1 className='text-black font-semibold mb-2 mx-4 mt-2 cursor-pointer'>Male</h1>
                  <ul>
                    <li className="block px-4 py-2 cursor-pointer">Tops</li>
                    <li className="block px-4 py-2 cursor-pointer">Bottoms</li>
                    <li className="block px-4 py-2 cursor-pointer">Two-Piece</li>
                    <li className="block px-4 py-2 cursor-pointer">Jackets + Coats</li>
                    <li className="block px-4 py-2 cursor-pointer">Sportswear</li>
                    <li className="block px-4 py-2 cursor-pointer">Swimwear</li>
                    <li className="block px-4 py-2 cursor-pointer">Shoes</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>


          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className='flex space-x-4 items-center'>

        <div className='flex w-64 h-11 items-center border border-gray-200 rounded-md'>
          <img src="/images/Search.png" alt="search-icon" className='h-6 w-6 ml-4 cursor-pointer' />
          <input type="text" placeholder='Search products' className='ml-4 focus:outline-none focus:border-none'/>
        </div>

        <ul className="flex space-x-4">
          <li className='pl-9'><Link to="/shoppingcart"> <img src="/images/ShoppingCart.png" alt="shopping-cart" /> </Link></li>
          <li className='pl-3'><Link to="/profile"> <img src="/images/Profile.png" alt="profile" /> </Link></li>
        </ul>
      </div>

    </header>
    </div>
  );
};

export default Header;