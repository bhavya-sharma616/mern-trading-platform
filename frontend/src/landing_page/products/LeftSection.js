import React from "react";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return( 
    <div className="container p-3 " style={{color:"#424242"}}>
        <div className="row mb-5">
            <div className="col-7 text-center  p-5">
                <img src={imageUrl}/>
            </div>
            
            <div className="col-4 mt-5 p-5">
                <h1 className="mb-4 fs-4">{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}> Learn More</a><br/>
                </div>
                <div className="mt-3">
                <a href={googlePlay}>
                    <img src="media/images/googlePlayBadge.svg"/>
                </a>
                <a href={appleStore}>
                    <img src="media/images/appStore-badge.svg"/>
                </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
