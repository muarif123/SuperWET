import React, { useEffect, useState } from "react";
import "./into.css";
import Loader from "./Loader";
import Home from "../Home";

const Into = () => {
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
  return <>{loading && flag ? <Loader /> : <Home />}</>;
};

export default Into;
