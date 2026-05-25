import React from 'react';
function Benefits() {
    return ( 
        <div className='container p-5 mt-3 '>
            
            <div className='row'>
                
                <div className='col  text-center' style={{marginTop:"120px"}}>
                    <img src='media/images/acop-benefits.svg' style={{width:"80%"}}/>
                    <h5>Benefits of opening a Zerodha demat account</h5>
                </div>
                <div className='col mt-5 p-4' >
                    <div className='row '>
                    <h3>Unbeatable pricing</h3>
                    <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                    </div>
                    <div className='row mt-3'>
                    <h3>Best investing experience</h3>
                    <p>Simple and intuitive trading platform with an easy-to-understand user interface.

</p>
                    </div>

                    <div className='row mt-3'>
                    <h3>Unbeatable pricing</h3>
<p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>                    </div>
                    <div className='row mt-3'>
                    <h3>The Zerodha universe</h3>
                    <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Benefits;