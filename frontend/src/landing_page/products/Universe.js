import React from "react";
function Universe() {
  return (
    <div className="container " style={{ color: "#424242",width:"70%" }}>
      <div className="row p-3 text-center ">
        <h5>
          Want to know more about our technology stack? Check out the{" "}
          <a href="">Zerodha.tech</a> blog.
        </h5>
      </div>
      <div className="row p-5 text-center">
        <h2 className="mb-3">The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row p-3 mt-3 text-center text-muted">
        <div className="col-4">
          <div className="mb-5">
            <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}} />
            <p className="mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div>
            <img src="media/images/streakLogo.png" style={{width:"50%"}} />
            <p className="mt-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col-4 ">
          <div className="mb-5">
            <img src="media/images/sensibullLogo.svg" style={{width:"50%"}}/>
            <p className="mt-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div>
            <img   src="media/images/smallcaseLogo.png" style={{width:"50%"}}/>
            <p className="mt-3" >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col-4" style={{marginTop:"-20px"}}>
          <div className="mb-5">
            <img src="media/images/tijori.svg" style={{width:"45%"}}/>
            <p className="mt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div>
            <img src="media/images/dittoLogo.png" style={{width:"45%"}}/>
            <p className="mt-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      <div className="row mt-5">
        <div className="col-2"></div>
        <div className="col">
      <button className="btn btn-primary p-2" style={{width:"30%"}}>Sign up for free</button>
        </div>
        <div className="col-2"></div>
      </div>
      
      </div>
    </div>
  );
}

export default Universe;
