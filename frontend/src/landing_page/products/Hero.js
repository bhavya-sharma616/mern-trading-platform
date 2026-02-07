import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-5 p-5 border-bottom' style={{color:"#424242",width:"80%"}}>
            <div className='row text-center mb-3'>
                <h1 className='fs-2'>Zerodha Products</h1>
                <p className='mb-3 text-muted fs-5'>Sleek, modern, and intuitive trading platforms</p>
                <p >Check out our <a href=''>investment offerings →</a></p>
            </div>

        </div>
     );
}

export default Hero;