import React from "react";
function Pricing() {
  return (
    <div className="container ml-5 p-5" style={{marginTop:"-75px"}}>
      <div className="row p-5 ">
        <div className="col-5 ">
          <h1 className="mb-3 fs-2 ">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="row">
            <div className="col">
              <img src="media/images/pricing0.svg" style={{width:"50%"}} />
              <p className="">Free account opening</p>
            </div>
            <div className="col">
              <img src="media/images/pricing0.svg" style={{width:"50%"}} />
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col">
              <img src="media/images/other-trades.svg" style={{width:"50%"}}></img>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
