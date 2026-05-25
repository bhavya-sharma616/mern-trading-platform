import React from 'react';
function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
    return ( 
    <div className="container p-3 " style={{color:"#424242"}}>
        <div className="row ">
            
            <div className="col-4 mt-5 p-5">
                <h1 className=" fs-4">{productName}</h1>
                <p>{productDescription}</p>
                
                <a href={learnMore}> Learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br/>
                
            </div>
            <div className="col-7 text-center">
                <img src={imageUrl}/>
            </div>
        </div>
    </div>

     );
}

export default RightSection;