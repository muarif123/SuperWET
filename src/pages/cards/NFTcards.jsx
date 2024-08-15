import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NFTcards = props => {
  const { id, url, image, status, catergory, cardColor } = props;

  const [CardData, setCardData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          props?.url
        );
        setCardData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <div className="col-lg-4 col-md-6 col-12"> */}
      <div>
        <div class="card card-contents p-3">
          <div>
            <img
              // src="..\assets\images\detailscard\Mask group (1).png"
              src={props?.image}
              class="card-img-top img-fluid"
              alt= {props?.image}
            />
          </div>
          <div class="card-body  card-content-inner mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="card-name">{CardData?.name}</span>
                <span className="card-color">{cardColor}</span>
              </div>
              <div>
                <span className="human-body"> {props.catergory} </span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="card-art">Art By</span>
                <span className="card-designer">: zohaib qurash</span>
              </div>
              <div>
                <span className="card-price">Price : </span>
                <span className="card-value">250 SVET </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTcards;
