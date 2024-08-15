import React, { useEffect } from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      {/* <img src="..\..\assets\images\loader\Marketplaceone.webp" alt=".." /> */}

      <video playsInline autoPlay muted loop>
        <source
          src="../../../../assets/images/loader/Comp 1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
