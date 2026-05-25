import React from 'react';
function LeftImage({imageUrl,title,description}) {
    return ( 
        <div className='container mt-4 mx-3'>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-4'>
                    <img src={imageUrl}/>
                </div>
                <div className='col-5'>
                    <h4>{title}</h4>
                    <p className='text-muted mt-2'>{description}</p>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
     );
}

export default LeftImage;