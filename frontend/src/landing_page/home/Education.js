import React from "react";
function Education() {
  return (
    <div className="container  p-5" style={{marginTop:"-20px"}} >
      <div className="row p-5 ">
        <div className="col-5 ">
          <img src="media/images/education.svg" style={{width:"90%"}}></img>
        </div>
        <div className="col-6">
          <div className="row">
            <h2 style={{color:"#424242"}}>Free and open market education</h2>
            <p className="mt-4">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" className="mt-2" style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <p className="mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" className="mt-2" style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
