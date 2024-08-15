import React from "react";
import "./partner.css";

const Partner = () => {
  return (
    <section className="App">
      <div className="partner-container ">
        <div className="p-section-breaker">
          <img
            src="..\assets\images\partner\horizontal-line.png"
            alt="sectionbreaker"
          />
        </div>
        <div className="partner-title">
          <h3>our partners</h3>
        </div>
        <div className="partners-logo">
          <marquee width="100%">
            <div className="row ">
              <div className="partners-logo-img d-flex">
                <div className="col-xxl-2 col-lg-3 col-md-5 col-sm-12 col-8">
                  <img src="..\assets\images\partner\solidity 1.svg" />
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-5 col-sm-12 col-8">
                  <img src="..\assets\images\partner\aws 1.svg" />
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-5 col-sm-12 col-8">
                  <img src="..\assets\images\partner\ocu 1.svg" />
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-5 col-sm-12 col-8">
                  <img src="..\assets\images\partner\unreal 1.svg" />
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-5 col-sm-12 col-8">
                  <img src="..\assets\images\partner\unity 1.svg" />
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-5 col-sm-12 col-8">
                  <img src="..\assets\images\partner\binance 1.svg" />
                </div>
              </div>
            </div>
          </marquee>
        </div>
      </div>
    </section>
  );
};

export default Partner;
