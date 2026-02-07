import React from 'react';
import LeftImage from './LeftImage';
function Investments() {
    return ( 
        <div className='container p-5 '>
            <div className='row mb-5 text-center'>
            <h2>Investment options with Zerodha demat account</h2>
            </div>
            <div className='row mt-4'>
                <div className='col'>
                    <LeftImage imageUrl={"media/images/stocks-acop.svg"} title={"Stocks"} description={"Invest in all exchange-listed securities"}/>
                </div>
                <div className='col'>
                    <LeftImage imageUrl={"media/images/mf-acop.svg"} title={"Mutual Funds"} description={"Invest in commission-free direct mutual funds"}/>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col'>
                    <LeftImage imageUrl={"media/images/ipo-acop.svg"} title={"IPO"} description={"Apply to the latest IPOs instantly via UPI"}/>
                </div>
                <div className='col'>
                    <LeftImage imageUrl={"media/images/fo-acop.svg"} title={"Futures & options"} description={"Hedge and mitigate market risk through simplified F&O trading"}/>
                </div>
            </div>
            <div className='row mt-4 text-center'>
                <div className='col-4'></div>
                <div className='col-4'><button className='btn btn-primary p-2' style={{width:"50%"}}>
                    Explore Investments
                </button></div>
                <div className='col-4'></div>
            </div>
        </div>
     );
}

export default Investments;