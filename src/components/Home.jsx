import React from "react";
import About from "./about/About";
import Article from "./article/Article";
import Collection from "./collection/Collection";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Into from "./loader/Into";
import Partner from "./partners/Partner";
import Power from "./powers/Power";
import { useAccount, useBalance, useNetwork } from "wagmi";

const Home = () => {
  const { address, balance } = useAccount();
  const { chain, chains } = useNetwork();
  return (
    <div>
      <Header />
      <div id="about">
        <About />
      </div>
      <Collection />
      <Power />
      <Article />
      <Partner />
      <Footer />
    </div>
  );
};

export default Home;
