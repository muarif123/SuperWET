import React from "react";
import "./header.css";
import Navbar from "./navigation/Navbar";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="header-wrapper">
        <Navbar />

        <div className="header-light-bg">
          <img src="..\..\assets\images\header\1 (20).gif" alt=".." />
        </div>

        <div className="header-birds-bg">
          <img src="..\..\..\..\assets\images\header\giphy (10).gif" alt=".." />
        </div>

        <div className="header-arrow-bg">
          <a href="#collection-id" style={{ color: "white" }}>
            <img src="..\..\assets\images\header\Union.png" alt=".." />
          </a>
        </div>

        <div className="header-man-bg">
          <img src="..\..\assets\images\loader\into-men.png" alt=".." />
        </div>

        <div className="header-man-overlay"></div>

        <div className="header-content-wrapper">
          <div className="text">
            <img
              className="img-fluid"
              src="..\assets\images\header\supermarket logo 3.png"
              alt=""
            />
            <p className="text-center text-para">
              A WORLD FULL OF THRILL,DANGER & EXCITING REWARDS
            </p>

            <div className="into-center">
              <button
                type="button"
                class="btn goto shadow-none"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/collections");
                  window.scrollTo(0, 0);
                }}
              >
                Marketplace
              </button>
            </div>
          </div>
          <div className="social-icon">
            <div className="social-icon-wrapper">
              {/* <Icon
                icon="fa-brands:facebook-f"
                color="white"
                width="32"
                height="32"
                className="ico"
              /> */}
              <a href="https://twitter.com/SuperVet_io" target="blank">
                <Icon
                  icon="brandico:twitter"
                  color="white"
                  width="32"
                  height="32"
                  className="ico"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/supervet-io/?viewAsMember=true"
                target="_blank"
              >
                <Icon
                  icon="brandico:linkedin"
                  color="white"
                  width="32"
                  height="32"
                  className="ico"
                />
              </a>
              <a href="https://medium.com/@SuperVet" target="blank">
                <Icon
                  icon="bxl:medium"
                  color="white"
                  width="48"
                  height="48"
                  className="ico"
                />
              </a>
              <a href="https://discord.com/invite/J3rywtphjz" target="blank">
                <Icon
                  icon="akar-icons:discord-fill"
                  color="white"
                  width="38"
                  height="38"
                  className="ico"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
