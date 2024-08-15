import React, { useEffect, useState } from "react";
import "./navibar.css";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const Navbar = () => {
  const [show, setShow] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const { address } = useAccount();

  const currentUrl = window.location.href;

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-transparent ">
        <div
          className="container-fluid align-items-start"
          style={{ overflow: "hidden" }}
        >
          <a className="navbar-brand text-white " href="/home">
            <div className="logo-wrapper">
              <img
                className="img-fluid"
                src="..\assets\images\header\Supervet logo.png"
                alt="Logo"
              />
            </div>
          </a>

          <button
            className="navbar-toggler collapsed d-flex d-lg-none  flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0 ">
              {/* <li className="nav-item  "> */}
              <li
                className={`${
                  currentUrl.includes("home") ? "nav-item navClick" : "nav-item"
                }`}
              >
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="/collections">
                  Collection
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link text-white"
                  href="https://comics.supervet.io/"
                  target="_blank"
                >
                  Comics
                </a>
              </li>
            </ul>

            <button
              type="button"
              class="rainbowBtn btn btn-dark shadow-none connect-wallet RainbowBtnFix"
            >
              <ConnectButton
                className="rainbowBtn btn btn-dark shadow-none connect-wallet RainbowBtnFix"
                // accountStatus="address"
                // chainStatus="name"
                showBalance={false}
                chainStatus="none"
                // accountStatus={{
                //   smallScreen: "address",
                //   largeScreen: "address",
                // }}
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
