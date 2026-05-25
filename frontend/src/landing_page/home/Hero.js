import React from "react";
function Hero() {
  return (
    <div className="container p-1 mb-5">
      <div className="row">
        <div style={{textAlign:"center"}}>
          <img src="media/images/landing.svg" style={{ width: "750px",marginTop:"30px" ,height:"60%" }} className="mb-5"></img>
          <div style={{textAlign:"center",marginTop:"-6px"}}>
            <h1 style={{color:"#424242",font:"28px",lineHeight:"1.25",fontSize:"1.75rem"}}>Invest in everything</h1>
          <p className="mb-3" style={{color:"#424242",font:"20px Inter Serif",margin:"10px 0 15px"}}>
            Online platform to invest in stocks,derivatives,mutual funds,and
            more
          </p>
          <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",backgroundColor:"#387ED1", margin:"25px 0px 0"}}>Signup for free</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
