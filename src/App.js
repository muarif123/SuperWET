import Loader from "./components/loader/Loader";
import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Into from "./components/loader/Into";
import Details from "./pages/details/Details";
import Cards from "./pages/cards/Cards";
import Buynowcards from "./pages/cards/Buynowcards";
import ArticleD from "./pages/articlesDetails/ArticleD";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import { etherUnits } from "viem";
import { bscTestnet, sepolia } from "viem/chains";
import About from "./components/about/About";
import Adminform from "./components/admin-routes/adminform";

function App() {
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);

  //useeffect for loader
  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFlag(false);
      // console.log(loading);
    }, 3000);
  }, []);
  useEffect(() => {
    // console.log(loading);
    // console.log(flag);
    setCount(1);
  }, [loading, flag]);

  AOS.init({
    once: true,
    anchorPlacement: "top-bottom",
  });

  // ===========================================

  const { chains, publicClient } = configureChains(
    [bscTestnet],
    [
      // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    // appName: 'My RainbowKit App',
    // projectId: 'YOUR_PROJECT_ID',
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  // ===========================================
  return (
    <>
      {/* {loading == true && flag ? <Loader /> : <Into />} */}

      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({
            // accentColor: '#7b3fe4',
            accentColor: "#ffb921",
            accentColorForeground: "#1a1b1f",

            fontStack: "system",
          })}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Into />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/detail" element={<Details />}></Route>
              <Route path="/about" element={<About />}></Route>

              <Route path="/collections" element={<Cards />}></Route>
              <Route path="/article-detail" element={<ArticleD />}></Route>
              <Route path="/components/admin-form" element={<Adminform />}></Route>

            </Routes>
          </BrowserRouter>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
