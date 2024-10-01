import React from 'react';
import '../App.css';

const Home: React.FC = () => {
  return (
    <main>
      <section className='w-full flex items-center justify-center gap-96' style={{ backgroundColor: '#F6F6F6', height: '440px' }}>


        <div className='flex flex-col'>

          <h1 className='text-3xl font-semibold pl-0.5' style={{ color: '#202533' }}> Fresh Arrivals Online </h1>
          <p className='text-sm font-normal mt-4' style={{ color: '#474B57' }}> Discover Our Newest Collection Today. </p>
        
        <button className='text-white text-sm flex items-center justify-center rounded mt-12' style={{ backgroundColor: '#0E1422', width: '183px', height: '44px'}}>
          <span> View Collection </span>
          <img src="/images/ArrowRight.png" alt="right-arrow" className='pl-3' />
        </button>

        </div>


        <img src="/images/Man.png" alt="man" style={{ width: '340px', height: '340px', marginTop: '98px' }}/>
      </section>
    </main>
  );
};

export default Home;