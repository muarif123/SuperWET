import React, { useState } from "react";
import "./details.css";
import Navbar from "../../components/header/navigation/Navbar";
import Footer from "../../components/footer/Footer";

import { Icon } from "@iconify/react";
import Navigation2 from "../../components/header/navigation/Navigation2";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import NFTCollection from "../../abi/contracts/contracts/NFTCollection.json";
import Token from "../../abi/contracts/contracts/SvetToken.json";

import { useAccount, useBalance, useNetwork, useWalletClient } from "wagmi";

import Web3Context from "../../store/web3-context";
import CollectionContext from "../../store/collection-context.js";
import MarketplaceContext from "../../store/marketplace-context";
import TokenContext from "../../store/token-context";
import { useContext } from "react";

import Web3 from "web3";

const contract_address = "0x07B255e36b4D83e8ACd6B44d463cE07834330DE3";
// const token_contract_address = "0x8372FaCF3B163B7A8CfC387B5C62db0cAb050274";
const token_contract_address = "0x07abc4bd96b8fc3c2eb57fd1aec3e6e030f050f2";
let contract;
let token_contract;

let web3;
// if (window.ethereum) {
//   web3 = new Web3(window.ethereum);
// }

const Details = () => {
  const location = useLocation();
  const { data } = location.state;
  const [CardData, setCardData] = useState();

  const { address, balance } = useAccount();
  const { chain, chains } = useNetwork();

  const { data: signer } = useWalletClient();
  const { connector, isConnected } = useAccount();
  const [provider, setProvider] = useState("");

  useEffect(() => {
    const loadBlockchainData = async () => {
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // console.log("contract~~~~~~~~~~~~~`");
      web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
      web3.eth.setProvider(Web3.givenProvider);
      contract = new web3.eth.Contract(NFTCollection.abi, contract_address);
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // console.log("contract```````````");
      token_contract = new web3.eth.Contract(Token.abi, token_contract_address);
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    };

    loadBlockchainData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(data?.url);
        setCardData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const buyCard = () => {
    const price = "250";
    const owner = "0x67349e618A9bb9B64A1f3aBdc345025136392886";


    const transactionParameters = {
      to: owner, // Required except during contract publications.
      from: address, // must match user's active address.
      data: "",
    };

    // transaction without contract
    {
      /*
   try {
       web3.eth
         .sendTransaction({
           from: address,
           to: owner,
           value: "1000000000000000",
         })
         .then(function (receipt) {
           console.log(receipt, "receipt");
         });
     } catch (error) {
       console.log(error, "error");
     }
    */
    }

    // transaction with contract
    if(address){
      try {
        const weiValue = Web3.utils.toWei(price);
        token_contract.methods
          .transfer(owner, weiValue)
          .send({
            from: address,
            gasLimit: web3.utils.toHex(8000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
          })
          .then(receipt => {
            // console.log(receipt);
          })
          .catch("error", error => {
            console.log(error);
          });
      } catch (error) {
        console.log("Error While Buying: " + error);
        // toast("Error While Buying: " + error);
      }
    }else{
      alert("Connect Wallet")
    }
    
  };

  return (
    <>
      <Navigation2 />

      <section className=" App text-white" style={{width:"70%"}}>
        <div className=" details-wrapper">
          <div className="d-ellipse-1"></div>
          <div className="d-ellipse-2"></div>
          <div className="row details-content ">
            <div className="col-lg-6 ">
              <div className="d-flex justify-content-start align-items-center">
                <div className="NftCardImage">
                  <img
                    className="img-fluid"
                    // src="..\assets\images\detailscard\Ivy green.png"
                    src={data?.image}
                    alt="imagee"
                  />

                  <img
                    className="img-fluid"
                    src="..\assets\images\detailscard\emptyCard.png"
                    // src= {data?.image}
                    alt="imagee"
                  />
                </div>
              </div>
            </div>
            
            {/* share */}
            <div className="col-lg-6 details-r-side">
              {/* <p className="mt-4 socail-icon">
                Share : &nbsp;
                <Icon
                  className="ico"
                  icon="akar-icons:twitter-fill"
                  color="white"
                />
                &nbsp;
                <Icon className="ico" icon="bxl:facebook" color="white" />
                &nbsp;
              </p> */}

              <p className="pages-links">
                <span> Home / </span> <span>Collection /</span>{" "}
                {CardData?.name + " "}
                {/* Green */}
              </p>
              <h3 className="d-title"> {CardData?.name} </h3>
              <p className="d-description mb-4">{CardData?.description}</p>

              <span style={{ color: "#ffc810" }}>Price</span>: 250 SVET
              <span
                className="d-btn ms-3"
                onClick={e => {
                  e.preventDefault();
                  buyCard();
                }}>
                <span style={{ color: "#ffc810" }}>Buy Now</span>
              </span>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="category-wrapper mb-5">
          <div className="row category-inner-wrapper">
            {/* <div className="col-lg-3 ">
              <p>Clothing</p>
              <p>Green Leaf Frok</p>
              <img
                className="img-fluid"
                src="..\assets\images\detailscard\Line 11.png"
                alt="..."
              />
            </div> */}

            {CardData?.attributes.map(data => {
              return (
                <div className="col-lg-3 ">
                  <p> {data?.superpower} </p>
                  <p> {data?.rating} </p>
                  <img
                    className="img-fluid"
                    src="..\assets\images\detailscard\Line 11.png"
                    alt="..."
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="simillar-cards-wrapper">
          <div className="s-ellipse-1"></div>

          <div>
            <img
              className="cards-line-breaker"
              src="..\assets\images\footer\horizontal-line.png"
              alt="..."
            />
          </div>

          <h3 className="cards-title">Similar items</h3>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card card-contents p-3">
                <img
                  src="..\assets\images\detailscard\Mask group.png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body  card-content-inner mt-3">
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

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card card-contents p-3">
                <img
                  src="..\assets\images\detailscard\Mask group 3.png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body  card-content-inner mt-3">
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

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card card-contents p-3">
                <img
                  src="..\assets\images\detailscard\Mask group (1).png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body  card-content-inner mt-3">
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

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card card-contents p-3">
                <img
                  src="..\assets\images\detailscard\Mask group (2).png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body  card-content-inner mt-3">
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

          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card card-contents p-3">
                <img
                  src="..\assets\images\detailscard\Mask group.png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body  card-content-inner mt-3">
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

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card card-contents p-3">
                <img
                  src="..\assets\images\detailscard\Mask group 3.png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body  card-content-inner mt-3">
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

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card card-contents p-3">
                <img
                  src="..\assets\images\detailscard\Mask group (1).png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body  card-content-inner mt-3">
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

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card card-contents p-3">
                <img
                  src="..\assets\images\detailscard\Mask group (2).png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body  card-content-inner mt-3">
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
      </section>

      <Footer />
    </>
  );
};

export default Details;
