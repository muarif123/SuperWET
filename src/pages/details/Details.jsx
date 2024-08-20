import React, { useState } from "react";
import "./details.css";
import Navbar from "../../components/header/navigation/Navbar";
import Footer from "../../components/footer/Footer";

import { Icon } from "@iconify/react";
import Navigation2 from "../../components/header/navigation/Navigation2";
import { useLocation, useNavigate } from "react-router-dom";
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
import NFTcards from "../cards/NFTcards.jsx";
const marketplaceAddress = '0x7bACcD4253A37eABBF967B293Af07FC6ec740705'
const abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "initialOwner",
                "type": "address"
            },
            {
                "internalType": "contract IERC721",
                "name": "_NftMinting",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_USDCAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            }
        ],
        "name": "AddressEmptyCode",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "AddressInsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "listIndex",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "buyNft",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "listIndex",
                "type": "uint256"
            }
        ],
        "name": "CancelListForSale",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "FailedInnerCall",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_mintContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "listNft",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "SafeERC20FailedOperation",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllNftListedNfts",
        "outputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "count",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bool",
                                "name": "listed",
                                "type": "bool"
                            }
                        ],
                        "internalType": "struct NFTMarketplace.ListNft",
                        "name": "listedData",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint256",
                        "name": "listCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "uriData",
                        "type": "string"
                    }
                ],
                "internalType": "struct NFTMarketplace.ListedNftNftTokenId[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "listCount",
        "outputs": [
            {
                "internalType": "address",
                "name": "contractAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nextNftListId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "NftContract",
        "outputs": [
            {
                "internalType": "contract IERC721",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userListCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userNftListings",
        "outputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "count",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "listed",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

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
  console.log(data,'data');
  const [nfts, setnfts] = useState([])
  
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
  const getAllLandNfts = async () => {
    
    if (typeof window.ethereum === 'undefined') {
        console.error("MetaMask is not installed");
        return;
    }
    try {

        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts,'metamask acc');
        
    
        const marketContract = new web3.eth.Contract(abi, marketplaceAddress);

        if (typeof marketContract.methods.getAllNftListedNfts !== 'function') {
            throw new Error('Method getAllLandListedNfts not found in ABI');
        }
    
        const GetAllLandNfts = await marketContract.methods.getAllNftListedNfts().call();
        const nftsWithMetadata = await Promise.all(
            GetAllLandNfts.map(async (nft) => {
                try {
                    const response = await fetch(nft[2]); // Assuming `nft[2]` is the URI
                    const metadata = await response.json();
                    return {
                        ...nft,
                        metadata
                    };
                } catch (error) {
                    console.error('Error fetching metadata for NFT:', nft, error);
                    return null;
                }
            })
        );

        // Filter out any NFTs that failed to fetch metadata
        setnfts(nftsWithMetadata.filter(nft => nft !== null));

    
        
    } catch (error) {
        console.error('Error fetching NFTs:', error);
        
    }
    
};
useEffect(()=>{
    

    getAllLandNfts();
},[])
const handleAccountsChanged = () => {
getAllLandNfts();
};

const handleChainChanged = () => {
getAllLandNfts();
};

window.ethereum.on('accountsChanged', handleAccountsChanged);
window.ethereum.on('chainChanged', handleChainChanged);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(data?.url);
  //       setCardData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
  console.log(CardData,'');
  const navigate = useNavigate();
  

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
                  <img style={{height:"450px",width:"350px"}}
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
                {data?.name + " "}
                {/* Green */}
              </p>
              <h3 className="d-title"> {data?.name} </h3>
              <p className="d-description mb-4">{data?.description}</p>

              <span style={{ color: "#ffc810" }}>Price</span>: {Web3.utils.fromWei(data?.price, 'ether')} ETH
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
          {nfts.map((item, index) => (
          <a
            key={index}
            className="col-lg-3 col-md-6 col-12 mt-4"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/detail", {
                state: {
                  data: {
                    id:item[0].tokenId,
                    url:item.uriData,
                    name:item.metadata.name,
                    description:item.metadata.description,
                    image:item.metadata.image,
                    status:data.status,
                    catergory:data.catergory,
                    cardColor:"Red",
                    price:item.listedData.price

                  },
                },
              });
              window.scrollTo(0, 0);
            }}
          >
            <NFTcards
              id={item[0].tokenId}
              url={item.uriData}
              image={item.metadata.image}
              status={data.status}
              catergory={data.catergory}
              cardColor={"Red"}
              price={item.listedData.price}
            />
          </a>
        ))}
          </div>

        
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Details;
