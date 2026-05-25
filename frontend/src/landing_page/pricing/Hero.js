import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
    <div className='container'>
        <div className='row p-5 mt-5 text-center mb-5 '>
            <h1 className='fs-2'>Charges</h1>
            <p className='fs-4 text-muted' >List of all charges and taxes</p>
        </div>
        <div className="row text-center p-5 mb-5">
        <div className="col">
          <img src="media/images/pricing-eq.svg" style={{width:"68%"}}/>
          <h3 className="mb-3 mt-3">Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col">
          <img src="media/images/other-trades.svg" style={{width:"68%"}} />
          <h3 className="mb-3 mt-3">Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img src="media/images/pricing-eq.svg" style={{width:"68%"}} />
          <h3 className="mb-3 mt-3">Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div> 
    );
}

export default Hero;