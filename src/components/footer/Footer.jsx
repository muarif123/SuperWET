import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="text-white App">
      <div className="footer-container">
        <div className="f-section-breaker">
          <img
            src="..\assets\images\footer\horizontal-line.png"
            alt="sectionbreaker"
          />
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center text-white mb-4">
          <div className="owner">
            Owned By : <span className="supervet-text">Super Vet NFT'S</span>
          </div>
          <div className="owner">
            created by : <span className="supervet-text">super vet team</span>
          </div>
        </div>
        <div className="">
          <div className="row footerRowSplit">
            <div className="col-lg-2 f-logo">
              <img
                className="img-fluid "
                src="..\assets\images\footer\f-logo2.png"
                alt="f-logo"
              />
            </div>
            <div className="col-lg-2 col-md-6 col-12  learn-more">
              <h3>learn More</h3>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="https://play.supervet.io/" target="_blank">
                      Gameplay
                    </a>
                  </li>
                  <li>
                    <Link to="/">Roadmap</Link>
                  </li>
                  <li>
                    <Link to="/">Superverse</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 learn-more">
              <h3>Marketplace</h3>
              <div>
                <ul>
                  <li>Charcters</li>
                  <li>In-Game Assets</li>
                  <li>
                    <Link to="/collections">Buy/Sell</Link>
                  </li>
                  <li>NFT Staking</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 learn-more">
              <h3>Quick Links</h3>
              <div>
                <ul>
                  <li>
                    <a
                      href="https://super-vet.gitbook.io/super-vet-white-paper"
                      target=""
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1WjbaIJXYHe4vkDI08GsEHPp7j5RV6D3w/view"
                      target=""
                    >
                      Pitch Deck
                    </a>
                  </li>
                  <li>
                    <Link to="/collections">Marketplace</Link>
                  </li>
                  <li>
                    <Link to="#">Smart comtract</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 learn-more"
              style={{
                marginTop: "22px",
              }}
            >
              <h3 className="Subscribe-us">Subscribe Us</h3>
              <div className="email-field mt-4">
                <input type="text" placeholder="info@yourgmail.com" />
                {/* <span> */}
                <img src="..\assets\images\footer\subscribe-us.png" />
                {/* </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
