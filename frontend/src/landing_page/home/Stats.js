import React from "react";
function Stats() {
  return (
    <div className="container mt-5 p-5" style={{color:"#424242"}}>
      <div className="row p-5">
        <div className="col-5 ">
          <h2 className=" mb-5 fs-3">Trust with Confidence</h2>
          
            <h4 className="fs-4">Customer-first always</h4>
            <p className="text-muted mb-4">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          
          
            <h4 className="fs-4">No spam or gimmicks</h4>
            <p className="text-muted mb-4">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          
          
            <h4 className="fs-4">No spam or gimmicks</h4>
            <p className="text-muted mb-4">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
         

          
            <h4 className="fs-4">The Zerodha universe</h4>
            <p className="text-muted mb-4">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          
          
            <h4 >Do better with money</h4>
            <p className="text-muted ">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          
        </div>
        <div className="col-6 mx-5 p-3">
          <img
            src="media/images/ecosystem.png"
            style={{ width: "100%" }}
            className="p-4 mt-5"
          />
          <div className="text-center p-5">
            {" "}
            <a href="" className="mx-4" style={{textDecoration:"none"}}>
              Explore our products
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;
            <a href="" style={{textDecoration:"none"}}>
              Try Kite demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
          </div>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <img src="media/images/pressLogos.png" />
      </div>
    </div>
  );
}

export default Stats;
