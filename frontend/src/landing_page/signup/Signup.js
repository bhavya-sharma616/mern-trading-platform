import React from "react";
function Signup() {
  return (
    <div className="container p-3  " style={{ color: "#424242" }}>
      <div className="row mb-5 mt-3 text-center">
        <h2>Open a free demat and trading account online</h2>
        <p className="fs-4 text-muted mt-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row mb-5">
        <div className="col"></div>
        <div className="col-5 text-center  p-5">
          <img src="media/images/account_open.svg" />
        </div>
        <div className="col-5 mt-5">
          <h2>Sign up now</h2>
          <p>Or track your existing application</p>
          <div
            className="input-group input-group-lg mt-5"
            style={{ width: "100%" }}
          >
            <div className="input-group-prepend">
              <span className="input-group-text p-2">
                <img src="media/images/india-flag.svg"></img>+91
              </span>
            </div>
            <input
              type="tel"
              pattern="[0-9]{10}"
              maxLength="10"
              placeholder="Enter your mobile number"
              required
              style={{ width: "60%" }}
            />
          </div>

          <button
            className="btn btn-primary get-otp mt-4 p-3"
            style={{
              width: "50%",
              backgroundcColor: " #387ed1",
              borderRadius: "0",
            }}
          >
            GET OTP
          </button>
          <div className="mt-4 text-muted" style={{fontSize:"12px"}}>
            <p>By proceeding, you agree to the Zerodha <a href="">terms & privacy policy</a></p>
            <hr/><p>
                Looking to open NRI account? <a href="">Click here</a>
            </p>
        </div>
        </div>
        
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Signup;
