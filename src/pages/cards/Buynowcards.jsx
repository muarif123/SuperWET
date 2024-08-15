import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buynowcards = () => {
  return (
    <>
      <div className="simillar-cards-wrapper">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div class="card card-contents p-3">
              <img
                src="..\assets\images\detailscard\Mask group.png"
                class="card-img-top img-fluid"
                alt="..."
              />
              <div class="card-body  card-content-inner mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="card-name">Maximus</span>
                    <span className="card-color">Yellow</span>
                  </div>
                  <div>
                    <span className="human-body">Human Body</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="card-art">Art By</span>
                    <span className="card-designer">: zohaib qurash</span>
                  </div>
                  <div>
                    <span className="card-price">Price : </span>
                    <span className="card-value">2.25SVET </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buynowcards;
