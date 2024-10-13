import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='mx-auto max-w-[1440px] flex flex-col items-center justify-center'>
            <section className='flex items-center justify-between' style={{height:'200px', backgroundColor:'#F6F6F6'}}>
                <div className='pl-40' style={{width:'720px'}}>
                    <h1 className='font-bold text-2xl mb-6'> Join Our Newsletter </h1>
                    <span className='font-light' style={{ color: '#5C5F6A' }}> We love to surprise our subscribers with occasional gifts. </span>
                </div>

                <div className='flex items-center justify-center' style={{width:'720px'}}>
                    <input type="text" placeholder='Your email address' className='w-80 h-11 pl-4 border border-gray-200 rounded-md focus:outline-none focus:border-none'/>
                    <button className='text-white text-sm flex items-center justify-center rounded ml-4' style={{ backgroundColor: '#0E1422', width: '116px', height: '44px' }}> Subscribe </button>
                </div>
            </section>



            <section className='w-full flex flex-col items-center justify-between bg-white' style={{height:'429px'}} >
                <div className='flex items-center gap-32 py-20'>
                    <div className='flex flex-col gap-8' style={{width:'272px', height:'160px'}}>
                        <div><img src="/images/Footer.png" alt="Logo" className='cursor-pointer'/></div>
                        <div><span className='font-light' style={{ color: '#5C5F6A' }}>DevCut is a YouTube channel for practical project-based learning.</span></div>
                        <div className='flex gap-6'>
                            <img src="/images/Github.png" alt="github-logo" className='cursor-pointer'/>
                            <img src="/images/Instagram.png" alt="github-logo" className='cursor-pointer'/>
                            <img src="/images/Youtube.png" alt="github-logo" className='cursor-pointer'/>
                        </div>
                    </div>




                    <div className='flex gap-20 items-center'>
                        <div className='flex flex-col'>
                            <span className='font-light mb-8 cursor-pointer' style={{ color: '#5C5F6A' }}>SUPPORT</span>

                            <span className='font-light mb-4 text-slate-700 cursor-pointer'>FAQ</span>
                            <span className='font-light mb-4 text-slate-700 cursor-pointer'>Terms of use</span>
                            <span className='font-light mb-4 text-slate-700 cursor-pointer'>Privacy Policy</span>
                        </div>


                        <div className='flex flex-col'>
                            <span className='font-light mb-8 cursor-pointer' style={{ color: '#5C5F6A' }}>COMPANY</span>

                            <span className='font-light mb-4 text-slate-700 cursor-pointer'>About us</span>
                            <span className='font-light mb-4 text-slate-700 cursor-pointer'>Contact</span>
                            <span className='font-light mb-4 text-slate-700 cursor-pointer'>Careers</span>
                        </div>


                        <div className='flex flex-col'>
                            <span className='font-light mb-8 cursor-pointer' style={{ color: '#5C5F6A' }}>SHOP</span>

                            <span className='font-light mb-4 text-slate-700 cursor-pointer'>My Account</span>
                            <span className='font-light mb-4 text-slate-700 cursor-pointer'>Checkout</span>
                            <span className='font-light mb-4 text-slate-700 cursor-pointer'>Cart</span>
                        </div>
                    </div>



                    <div className='flex flex-col gap-8 ml-8' style={{width:'176px', height:'97px'}}>
                        <div><span className='font-light' style={{ color: '#5C5F6A' }}>ACCEPTED PAYMENTS</span></div>
                            <div className='flex gap-6'>
                                <img src="/images/Mastercard.png" alt="github-logo" className='cursor-pointer'/>
                                <img src="/images/Amex.png" alt="github-logo" className='cursor-pointer'/>
                                <img src="/images/Visa.png" alt="github-logo" className='cursor-pointer'/>
                            </div>
                    </div>
                </div>

                <div className='w-full border-t border-t-gray flex items-center justify-center' style={{height:'79px'}}> 
                    <span className='font-light' style={{ color: '#5C5F6A' }}>© 2023 DevCut. All rights reserved.</span>
                </div>
            </section>
        </div>
    );
}; 


export default Footer;