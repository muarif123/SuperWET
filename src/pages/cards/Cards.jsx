import React, { useState,useEffect } from "react";
import Footer from "../../components/footer/Footer";
import "./card.css";
import { useNavigate } from "react-router-dom";
import Web3 from 'web3'
import { Icon } from "@iconify/react";

import { ProSidebarProvider } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Buynowcards from "./Buynowcards";
import AuctionCards from "./AuctionCards";
import OffersCard from "./OffersCard";
import NFTcards from "./NFTcards";
import Navigation2 from "../../components/header/navigation/Navigation2";
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
const vetsData = [
  {
    id: "1",
    url: "https://qazibucket.s3.us-east-2.amazonaws.com/vet/jsons/bruce.json",
    // image: "assets/images/characters/bruce.webp",
    image: "..\\assets\\images\\detailscard\\Mask group (1).png",
    status: "soon",
    catergory: "characters",
  },
  {
    id: "2",
    url: "N/A",
    image: "assets/images/characters/nina.webp",
    status: "soon",
    catergory: "characters",
  },
  {
    id: "3",
    url: "N/A",
    image: "assets/images/characters/wolf.webp",
    status: "soon",
    catergory: "characters",
  },
  {
    id: "4",
    url: "N/A",
    image: "assets/images/characters/steelshot.webp",
    status: "soon",
    catergory: "characters",
  },
  {
    id: "5",
    url: "N/A",
    image: "assets/images/characters/x.webp",
    status: "soon",
    catergory: "characters",
  },
  {
    id: "6",
    url: "N/A",
    image: "assets/images/characters/ivy.webp",
    status: "soon",
    catergory: "characters",
  },
  {
    id: "7",
    url: "N/A",
    image: "assets/images/characters/vision.webp",
    status: "soon",
    catergory: "characters",
  },
  {
    id: "8",
    url: "N/A",
    image: "assets/images/characters/maximus.webp",
    status: "soon",
    catergory: "characters",
  },
  {
    id: "9",
    url: "N/A",
    image: "assets/images/characters/gibran.webp",
    status: "soon",
    catergory: "characters",
  },
  {
    id: "10",
    url: "N/A",
    image: "assets/images/characters/psycho.webp",
    status: "soon",
    catergory: "characters",
  },
  {
    id: "11",
    url: "N/A",
    image: "assets/images/assets_cards/health_potion.webp",
    status: "soon",
    catergory: "serums",
  },
  {
    id: "12",
    url: "N/A",
    image: "assets/images/assets_cards/power_potion.webp",
    status: "soon",
    catergory: "serums",
  },
  {
    id: "13",
    url: "N/A",
    image: "assets/images/assets_cards/flying_potion.webp",
    status: "soon",
    catergory: "serums",
  },
  {
    id: "14",
    url: "N/A",
    image: "assets/images/assets_cards/speed_potion.webp",
    status: "soon",
    catergory: "serums",
  },
  {
    id: "15",
    url: "N/A",
    image: "assets/images/assets_cards/stamina_potion.webp",
    status: "soon",
    catergory: "serums",
  },
  {
    id: "16",
    url: "N/A",
    image: "assets/images/assets_cards/saw.webp",
    status: "soon",
    catergory: "tools",
  },
  {
    id: "17",
    url: "N/A",
    image: "assets/images/assets_cards/knife.webp",
    status: "soon",
    catergory: "tools",
  },
  {
    id: "18",
    url: "N/A",
    image: "assets/images/assets_cards/hammer.webp",
    status: "soon",
    catergory: "tools",
  },
  {
    id: "19",
    url: "N/A",
    image: "assets/images/assets_cards/clamps.webp",
    status: "soon",
    catergory: "tools",
  },
  {
    id: "20",
    url: "N/A",
    image: "assets/images/assets_cards/bottle.webp",
    status: "soon",
    catergory: "tools",
  },
  {
    id: "21",
    url: "N/A",
    image: "assets/images/assets_cards/injections.webp",
    status: "soon",
    catergory: "tools",
  },
  {
    id: "22",
    url: "N/A",
    image: "assets/images/assets_cards/razor.webp",
    status: "soon",
    catergory: "tools",
  },
  {
    id: "23",
    url: "N/A",
    image: "assets/images/assets_cards/rope.webp",
    status: "soon",
    catergory: "tools",
  },
  {
    id: "24",
    url: "N/A",
    image: "assets/images/assets_cards/scope.webp",
    status: "soon",
    catergory: "tools",
  },
  {
    id: "25",
    url: "N/A",
    image: "assets/images/assets_cards/first_aid.webp",
    status: "soon",
    catergory: "tools",
  },
];

const Cards = () => {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [nfts, setnfts] = useState([])
  const [siderbar, setsiderbar] = useState(false);
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


  const navigate = useNavigate();

  const activetab = () => {
    setActive(!active);
    setActive2(false);
    setActive3(false);
  };

  const activetab2 = () => {
    setActive2(!active2);
    setActive(false);
    setActive3(false);
  };

  const activetab3 = () => {
    setActive3(!active3);
    setActive2(false);
    setActive(false);
  };

  const showTabs = () => {
    document.querySelector(".tabs-dropdown").classList.toggle("myStyle");
    document.querySelector(".ico").classList.toggle("myStyle2");
  };

  const showsidebar = () => {
    document
      .querySelector(".mobile-sidebar-animate")
      .classList.toggle("myStyle10");
  };
  console.log(nfts,'LISTlandnfts');

  function Items() {
    return vetsData.map((data) => {
      if (data.url === "N/A") {
        return null;
      }

      return (
      
        <>
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
      </>
      );
    });
  }

  const DummyItems = () => {
    const cardData = [
      {
        imgSrc: "..\\assets\\images\\detailscard\\Mask group.png",
        name: "DR. Ivy ",
        cardColor: "blue",
        humanBody: "Human Body",
      },
      {
        imgSrc: "..\\assets\\images\\detailscard\\Mask group 3.png",
        name: "Steel shot",
        cardColor: "purple",
        humanBody: "Human Body",
      },
      {
        imgSrc: "..\\assets\\images\\detailscard\\Mask group (2).png",
        name: "DR. Ivy",
        cardColor: "Green",
        humanBody: "Human Body",
      },
    ];

    return (
      <>
        {cardData.map((card, index) => (
          <a className="col-lg-3 col-md-6 col-12 mt-4">
            <div class="card card-contents p-3">
              <div>
                <img
                  // src="..\assets\images\detailscard\Mask group (1).png"
                  src={card?.imgSrc}
                  class="card-img-top img-fluid"
                  alt={card?.name}
                />
              </div>
              <div class="card-body  card-content-inner mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="card-name">{card?.name}</span>
                    <span className="card-color">{card.cardColor}</span>
                  </div>
                  <div>
                    <span className="human-body"> Characters </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="card-art"></span>
                    <span className="card-designer">Comming Soon</span>
                  </div>
                  <div>
                    <span className="card-price">Price : </span>
                    <span className="card-value">225SVET </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="cards-header-wrapper">
        <div className="cards-header-navigation">
          <Navigation2 />
        </div>
        <div className="cards-header-content">
          <div className="l-image">
            <img
              className="img-fluid"
              src="..\assets\images\cards\Group 1617.png"
              alt=".."
            />
          </div>
          <div className="r-image">
            <img
              className="img-fluid"
              src="..\assets\images\cards\Ivy green.png"
              alt=".."
            />
          </div>

          <div className="l-blur-color"></div>
          <div className="r-blur-color"></div>

          <div className="title">
            <h3>super collection</h3>
          </div>

          <div className="bottom-image">
            <img
              //   className="img-fluid"
              src="..\assets\images\cards\Blue x.png"
              alt=".."
            />
          </div>

          <div className="bottom-image-line">
            <img
              //   className="img-fluid"
              src="..\assets\images\cards\ColDevider.png"
              alt=".."
            />
          </div>
          <div className="bottom-blur-color"></div>
        </div>
      </div>

      <div className="text-center mt-3 h-c-links">
        <span>Home </span> <span> / Collection</span>
      </div>

      <div className="sidebar-section App text-white">
        <div className="sb-ellipse-3"></div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
           
          
              <div className="simillar-cards-wrapper">
                <div className="mt-4 row">
                 
                  
                  <Items />
                  {/* <DummyItems /> */}
                </div>
              </div>
              
           
          </Row>
        </Tab.Container>
      </div>

      <Footer />
    </>
  );
};

export default Cards;
