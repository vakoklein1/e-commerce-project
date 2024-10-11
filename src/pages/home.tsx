import React from 'react';
import '../App.css';

const Home: React.FC = () => {
  return (
    <main>
      <section className='w-full flex items-center justify-center gap-96' style={{ backgroundColor: '#F6F6F6', height: '440px', maxWidth: '1440px', margin: '0 auto' }}>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-semibold pl-0.5' style={{ color: '#202533' }}> Fresh Arrivals Online </h1>
          <p className='text-sm font-normal mt-4' style={{ color: '#474B57' }}> Discover Our Newest Collection Today. </p>
          
          <button className='text-white text-sm flex items-center justify-center rounded mt-12' style={{ backgroundColor: '#0E1422', width: '183px', height: '44px' }}>
            <span> View Collection </span>
            <img src="/images/ArrowRight.png" alt="right-arrow" className='pl-3' />
          </button>
        </div>

        <img src="/images/Man.png" alt="man" style={{ width: '340px', height: '340px', marginTop: '98px' }} />
      </section>
 
      <section className='w-full flex items-center justify-center gap-16' style={{ backgroundColor: '#FFF', height: '440px', maxWidth: '1440px', margin: '0 auto' }}>
        <div className="max-w-sm p-6 bg-white mt-40 mb-40" style={{ height: '218px' }}>
            <img src="/images/HomeCardOne.png" alt="home-card-one" />
            <h1 className='font-semibold text-base mt-6'>Free Shipping</h1>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 mt-4">
              Upgrade your style today and get FREE shipping on all orders! Don't miss out.
            </p>
        </div>

        <div className="max-w-sm p-6 bg-white mt-40 mb-40" style={{ height: '218px' }}>
            <img src="/images/HomeCardTwo.png" alt="home-card-two" />
            <h1 className='font-semibold text-base mt-6'>Satisfaction Guarantee</h1>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 mt-4">
            Shop confidently with our Satisfaction Guarantee: Love it or get a refund.
            </p>
        </div>

        <div className="max-w-sm p-6 bg-white mt-40 mb-40" style={{ height: '218px' }}>
            <img src="/images/HomeCardThree.png" alt="home-card-three" />
            <h1 className='font-semibold text-base mt-6'>Secure Payment</h1>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 mt-4">
            Your security is our priority. Your payments are secure with us.
            </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
