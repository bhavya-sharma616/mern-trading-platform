import React, { useState } from "react";

function CreateTicket() {
  const [open, setOpen] = useState({});

  const toggle = (key) => {
    setOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="container p-5">
      <div className="row">
<div className="col-9">
      
      <div className="accordion-section">

        {/* Account Opening */}
        <button
          className={`accordion-btn ${open.account ? "active" : ""}`}
          onClick={() => toggle("account")}
        >
          <span><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
          Account Opening
          <span className="arrow">
            <i className="fa fa-angle-down" />
          </span>
        </button>

        {open.account && (
          <div className="accordion-content">
            <ul>
              <li><a href="#">Resident individual</a></li>
              <li><a href="#">Minor</a></li>
              <li><a href="#">Non Resident Indian</a></li>
              <li><a href="#">Company, Partnership, HUF and LLP</a></li>
              <li><a href="#">Glossary</a></li>
            </ul>
          </div>
        )}

        {/* Your Zerodha Account */}
        <button
          className={`accordion-btn mt-4 ${open.profile ? "active" : ""}`}
          onClick={() => toggle("profile")}
        >
          <span>
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </span>
          Your Zerodha Account
          <span className="arrow">
            <i className="fa fa-angle-down" />
          </span>
        </button>

        {open.profile && (
          <div className="accordion-content">
            <ul>
              <li><a href="#">Your Profile</a></li>
              <li><a href="#">Account Modification</a></li>
              <li><a href="#">Client Master Report (CMR) & DP</a></li>
              <li><a href="#">Nomination</a></li>
              <li><a href="#">Transfer and conversion of securities</a></li>
            </ul>
          </div>
        )}

        {/* Kite */}
        <button
          className={`accordion-btn mt-4 ${open.kite ? "active" : ""}`}
          onClick={() => toggle("kite")}
        >
          <span><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></span>
          Kite
          <span className="arrow">
            <i className="fa fa-angle-down" />
          </span>
        </button>

        {open.kite && (
          <div className="accordion-content">
            <ul>
              <li><a href="#">IPO</a></li>
              <li><a href="#">Trading FAQs</a></li>
              <li><a href="#">Margin Trading and Margins</a></li>
              <li><a href="#">Charts and orders</a></li>
              <li><a href="#">Alerts and Nudges</a></li>
              <li><a href="#">General</a></li>
            </ul>
          </div>
        )}

        {/* Funds */}
        <button
          className={`accordion-btn mt-4 ${open.funds ? "active" : ""}`}
          onClick={() => toggle("funds")}
        >
          <span><i class="fa fa-inr" aria-hidden="true"></i></span>
          Funds
          <span className="arrow">
            <i className="fa fa-angle-down" />
          </span>
        </button>

        {open.funds && (
          <div className="accordion-content">
            <ul>
              <li><a href="#">Add money</a></li>
              <li><a href="#">Withdraw money</a></li>
              <li><a href="#">Add bank accounts</a></li>
              <li><a href="#">eMandates</a></li>
            </ul>
          </div>
        )}

        {/* Console */}
        <button
          className={`accordion-btn mt-4 ${open.console ? "active" : ""}`}
          onClick={() => toggle("console")}
        >
          <span><i class="fa fa-sun-o" aria-hidden="true"></i></span>
          Console
          <span className="arrow">
            <i className="fa fa-angle-down" />
          </span>
        </button>

        {open.console && (
          <div className="accordion-content">
            <ul>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Corporate actions</a></li>
              <li><a href="#">Funds statement</a></li>
              <li><a href="#">Reports</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Segments</a></li>
            </ul>
          </div>
        )}

        {/* Coin */}
        <button
          className={`accordion-btn mt-4 ${open.coin ? "active" : ""}`}
          onClick={() => toggle("coin")}
        >
          <span><i class="fa fa-circle-o-notch" aria-hidden="true"></i></span>
          Coin
          <span className="arrow">
            <i className="fa fa-angle-down" />
          </span>
        </button>

        {open.coin && (
          <div className="accordion-content">
            <ul>
              <li><a href="#">Mutual funds</a></li>
              <li><a href="#">NPS</a></li>
              <li><a href="#">FD</a></li>
              <li><a href="#">Features on Coin</a></li>
              <li><a href="#">Payments and Orders</a></li>
              <li><a href="#">General</a></li>
            </ul>
          </div>
        )}

      </div>
      </div>
      <div className="col-3">
        <div className="additionalLinks">
          <ul>
            <li><a href="">Additional exposure margin on securities under MWPL</a></li>
            <li><a href="">Adjustment of F&O contracts of WIPRO due to dividend</a></li>
          </ul>
        </div>
        
          <table className="quick-links table table-bordered p-5 mt-5" style={{width:"100%"}}>
             <thead>
    <tr>
      <th style={{backgroundColor: "#f1f1f1"}}>Quick Links</th>
    </tr>
  </thead>
            <tbody>
              <tr><td><a href="">1. Track account opening</a></td></tr>
              <tr><td><a href="">2. Track segment activation</a></td></tr>
              <tr><td><a href="">3. Intraday margins</a></td></tr>
              <tr><td><a href="">4. Kite user manual</a></td></tr>
              <tr><td><a href="">5. Learn how to create a ticket</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}

export default CreateTicket;
