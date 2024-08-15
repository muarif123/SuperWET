import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./card.css";
import { useNavigate } from "react-router-dom";

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

  const [siderbar, setsiderbar] = useState(false);

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

  function Items() {
    return vetsData.map((data) => {
      if (data.url === "N/A") {
        return null;
      }

      return (
        <a
          className="col-lg-4 col-md-6 col-12 mt-4"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            navigate("/detail", {
              state: {
                data: data,
              },
            });
            window.scrollTo(0, 0);
          }}
        >
          <NFTcards
            id={data.id}
            url={data.url}
            image={data.image}
            status={data.status}
            catergory={data.catergory}
            cardColor={"Red"}
          />
        </a>
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
          <a className="col-lg-4 col-md-6 col-12 mt-4">
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
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ position: "relative", zIndex: "4" }}
            >
              <div className="Show-Category">Collections</div>
              <Icon
                icon="eva:arrow-ios-forward-fill"
                color="white"
                width="48"
                className="Show-Category"
                x
                onClick={showsidebar}
              />
            </div>
            <Col className="mobile-sidebar-animate" sm={3}>
              <button
                className="shadow-none sidebar-btn mt-5"
                onClick={showTabs}
              >
                <span className="d-flex justify-content-between ">
                  <span>Status</span>
                  <span>
                    <Icon
                      className="ico"
                      icon="ep:arrow-down-bold"
                      color="white"
                      width="20"
                    />
                  </span>
                </span>
              </button>

              <Nav variant="pills" className="flex-column tabs-dropdown">
                <Nav.Item>
                  <Nav.Link onClick={activetab} eventKey="first">
                    {active ? (
                      <Icon
                        icon="akar-icons:check-box-fill"
                        color="#ffc810"
                        width="32"
                      />
                    ) : (
                      <Icon
                        icon="akar-icons:check-box"
                        color="#ffc810"
                        width="32"
                      />
                    )}
                    &nbsp; Buy Now
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={activetab2} eventKey="second">
                    {active2 ? (
                      <Icon
                        icon="akar-icons:check-box-fill"
                        color="#ffc810"
                        width="32"
                      />
                    ) : (
                      <Icon
                        icon="akar-icons:check-box"
                        color="#ffc810"
                        width="32"
                      />
                    )}
                    &nbsp;On Auction
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={activetab3} eventKey="third">
                    {active3 ? (
                      <Icon
                        icon="akar-icons:check-box-fill"
                        color="#ffc810"
                        width="32"
                      />
                    ) : (
                      <Icon
                        icon="akar-icons:check-box"
                        color="#ffc810"
                        width="32"
                      />
                    )}
                    &nbsp; Has Offer
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <button className="shadow-none sidebar-btn-2">
                <span className="d-flex justify-content-between ">
                  <span>CATEGORY</span>
                  <span>
                    <Icon icon="ep:arrow-right-bold" color="white" width="20" />
                  </span>
                </span>
              </button>
              <button className="shadow-none sidebar-btn-2">
                <span className="d-flex justify-content-between ">
                  <span>CHAIN</span>
                  <span>
                    <Icon icon="ep:arrow-right-bold" color="white" width="20" />
                  </span>
                </span>
              </button>
              <button className="shadow-none sidebar-btn-2">
                <span className="d-flex justify-content-between ">
                  <span>COLLECTION</span>
                  <span>
                    <Icon icon="ep:arrow-right-bold" color="white" width="20" />
                  </span>
                </span>
              </button>
              <button className="shadow-none sidebar-btn-2">
                <span className="d-flex justify-content-between ">
                  <span> BACKGROUND</span>
                  <span>
                    <Icon icon="ep:arrow-right-bold" color="white" width="20" />
                  </span>
                </span>
              </button>
              <button className="shadow-none sidebar-btn-2">
                <span className="d-flex justify-content-between ">
                  <span> BACKGROUND</span>
                  <span>
                    <Icon icon="ep:arrow-right-bold" color="white" width="20" />
                  </span>
                </span>
              </button>
              <button className="shadow-none sidebar-btn-2">
                <span className="d-flex justify-content-between ">
                  <span> OUTFITS</span>
                  <span>
                    <Icon icon="ep:arrow-right-bold" color="white" width="20" />
                  </span>
                </span>
              </button>

              <button className="shadow-none sidebar-btn-2">
                <span className="d-flex justify-content-between ">
                  <span> HEROS</span>
                  <span>
                    <Icon icon="ep:arrow-right-bold" color="white" width="20" />
                  </span>
                </span>
              </button>
              <button className="shadow-none sidebar-btn-2">
                <span className="d-flex justify-content-between ">
                  <span> HEROS</span>
                  <span>
                    <Icon icon="ep:arrow-right-bold" color="white" width="20" />
                  </span>
                </span>
              </button>
            </Col>
            <Col sm={9}>
              <div className="simillar-cards-wrapper">
                <div className="row mt-4">
                  {/* <div className="col-lg-4 col-md-6 col-12">
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
                            <span className="card-designer">
                              : zohaib qurash
                            </span>
                          </div>
                          <div>
                            <span className="card-price">Price : </span>
                            <span className="card-value">2.25SVET </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <Items />
                  <DummyItems />
                </div>
              </div>
              {/* <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Buynowcards />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <AuctionCards />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <OffersCard />
                </Tab.Pane>
              </Tab.Content> */}
            </Col>
          </Row>
        </Tab.Container>
      </div>

      <Footer />
    </>
  );
};

export default Cards;
