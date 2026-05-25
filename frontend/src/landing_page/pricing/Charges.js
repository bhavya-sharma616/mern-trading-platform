import React from "react";
function Charges() {
  return (
    <div className="container p-4" style={{ width: "87%" ,color:"#424242"}}>
      <div className="row p-4 mt-5 mb-5">
        <h2>Charges for account opening</h2>
        <table class="table table-striped mt-4 ">
          <thead>
            <tr>
              <th scope="col">Type of account</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span className="free-tag">Free</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span className="free-tag">Free</span>
              </td>
            </tr>
            <tr>
              <td>NRI account(Offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row p-4 mt-5 ">
        <h2>Demat AMC (Annual Maintenance Charge)</h2>
        <table class="table table-striped mt-4 ">
          <thead>
            <tr>
              <th scope="col">Value of holdings</th>
              <th scope="col">AMC</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span className="free-tag">Free</span>
              </td>
            </tr>
            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>
        <p className="text-muted mb-5">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a href="">click here.</a>
        </p>

<div className="row p-4 mt-5 ">
        <h2>Charges for optional value added services</h2>
        <table class="table mt-4 ">
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Billing Frequency</th>
              <th scope="col">Charges</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>
                Monthly / Annual
              </td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>    </div>
  );
}

export default Charges;
