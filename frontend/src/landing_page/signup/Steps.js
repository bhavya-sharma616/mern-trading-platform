import React from 'react';
function Steps() {
    return ( 
        <div className='container p-5 mt-3 ' style={{backgroundColor:"#fafafb"}}>
            <div className='row text-center mb-5 '>
            <h3>Steps to open a demat account with Zerodha</h3>
            </div>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col mt-5 p-3'>
                    <img src='media/images/steps-acop.svg'/>
                </div>
                <div className='col fs-5 mt-5 p-4' >
                    <ol>
                        <li>Enter the requested details</li><hr/>
                        <li>Complete e-sign & verification</li><hr/>
                        <li>Start investing!</li>
                    </ol>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
     );
}

export default Steps;