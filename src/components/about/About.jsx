import React from "react";
import "./about.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const openWebsite = () => {
    // Replace 'https://www.example.com' with the URL you want to open
    window.open(
      "https://super-vet.gitbook.io/super-vet-white-paper/super-vet-ai-gameplay/nft-marketplace",
      "_blank"
    );
  };
  return (
    <section className="App about-total-wrapper">
      <div
        data-aos="aboutcounter-toptobottom-animation"
        data-aos-delay="200"
        data-aos-duration="3000"
        className="counter-wrapper"
      >
        <div collection-right-animation>
          <h3>1200</h3>
          <p>Total Item</p>
        </div>
        <div>
          <img
            src="..\assets\images\about\clarity_connect-line.png"
            alt="connect-line"
          />
        </div>
        <div>
          <h3>3.9k+</h3>
          <p>total owners</p>
        </div>
        <div>
          <img
            src="..\assets\images\about\clarity_connect-line.png"
            alt="connect-line"
          />
        </div>
        <div>
          <h3>2.4k</h3>
          <p>total price (svet)</p>
        </div>
        <div>
          <img
            src="..\assets\images\about\clarity_connect-line.png"
            alt="connect-line"
          />
        </div>
        <div>
          <h3>144k+</h3>
          <p>volume trade</p>
        </div>
      </div>
      <div className="yellow-line-breaker">
        <img
          data-aos="about-left-animation"
          data-aos-delay="1000"
          data-aos-duration="3000"
          src="..\assets\images\about\Line 1.png"
          alt="yellow-line"
        />
      </div>

      <div className="row about-wrapper">
        <div className="col-lg-7  about-wrapper-l-side">
          <img
            className="img-fluid about-under-1024"
            src="..\assets\images\about\About.png"
            alt="about"
          />

          <div className="about-image-wrpaeer">
            <div>
              <img
                data-aos="about-left-animation"
                data-aos-delay="1000"
                data-aos-duration="3000"
                className="img-fluid"
                src="..\..\assets\images\about\Frame 56.png"
                alt="about"
              />
            </div>
            <div className="about-nft-text">
              <img
                data-aos="about-toptobottom-animation"
                data-aos-delay="1000"
                data-aos-duration="3000"
                className="img-fluid"
                src="..\..\assets\images\about\Group 1677.png"
                alt="about"
              />
            </div>
            <div className="about-nft-nina">
              <img
                data-aos="about-left-animation"
                data-aos-delay="1000"
                data-aos-duration="3000"
                className="img-fluid"
                src="..\..\assets\images\about\Frame 59.png"
                alt="about"
              />
            </div>
          </div>
        </div>
        <div
          data-aos="about-toptobottom-animation"
          data-aos-delay="1000"
          data-aos-duration="3000"
          className="col-lg-4 about-wrapper-r-side "
        >
          <div className="ellipse-1"></div>
          <h3>Rise of Super Vet</h3>
          <img
            className="img-fluid"
            src="..\assets\images\collection\Union.png"
            alt="union"
          />

          <p>
            Welcome to the thrilling realm of Super Vet, the groundbreaking NFT
            GameFi experience that will ignite your imagination. Prepare to dive
            into a vibrant world where the power of NFTs and animal rescue
            converge in an unprecedented way.
            <br />
            <br />
            Discover a treasure trove of captivating digital assets that bring
            the Super Vet universe to life. From stunning artwork to dynamic
            animations, each NFT in the marketplace is a masterpiece in its own
            right, crafted by talented artists who pour their creativity into
            every brushstroke and pixel.
            <br />
            <br />
            Explore the diverse Super Vet NFT Collections and unlock a world of
            possibilities. Choose your favorite character NFTs and embark on
            thrilling adventures, each with its own unique abilities and
            personalities. Equip your heroes with powerful NFTs, amplifying
            their strength and capabilities. Whether you're a seasoned collector
            or new to the world of NFTs, the Super Vet NFT Marketplace offers a
            welcoming space where you can embark on a transformative journey.
          </p>

          <button
            type="button"
            class="btn mt-4 btn-collection shadow-none w-50"
            // onClick={(e) => {
            //   e.preventDefault();
            //   navigate("");
            //   // window.scrollTo(0, 0);
            // }}
            onClick={openWebsite}
          >
            {/* <a href="/detail" style={{ color: "white" }}> */}
            More to Know
            {/* </a> */}
          </button>
        </div>
      </div>

      <div className="intro-wrapper">
        <div className="i-ellipse-1"></div>

        <div
          data-aos="aboutintro-toptobottom-animation"
          data-aos-delay="500"
          data-aos-duration="3000"
          className="intro-wrapper-upper"
        >
          <h3>introduction</h3>
          <p>welcome to world of super vet</p>
          <p>
            A 3D finest world of Super Vet heroes with extraordinary
            supernatural powers
          </p>
        </div>

        <div
          // data-aos="aboutintro-toptobottom-animation"
          // data-aos-delay="10"
          // data-aos-duration="3000"
          style={{ marginTop: "70px" }}
          className="row d-flex justify-content-center align-items-center"
        >
          <div className="col-lg-2 ms-4 me-5 intro-card">
            <div>
              <div className="about-particle-image-wrapper">
                <img
                  className="img-fluid about-particle-image-wrapper"
                  src="..\assets\images\about\Group 1526.png"
                  alt="aboutpic"
                />
              </div>
              <div className="about-particle-image">
                <img
                  className="img-fluid"
                  src="..\..\assets\images\about\giphy (1).gif"
                  alt="connect-line"
                />
              </div>
            </div>
            <h3 className="intro-card-heading">Fight</h3>
            <p>Fight for innocent souls in an epic battle of compassion </p>
          </div>
          <div className="col-lg-2 ms-4 me-5 intro-card">
            <div>
              <div className="about-particle-image-wrapper">
                <img
                  className="img-fluid about-particle-image-wrapper"
                  src="..\assets\images\about\Group 1526.png"
                  alt="aboutpic"
                />
              </div>
              <div className="about-particle-image">
                <img
                  className="img-fluid"
                  src="..\..\assets\images\about\giphy (1).gif"
                  alt="connect-line"
                />
              </div>
            </div>
            <h3 className="intro-card-heading">win & earn</h3>
            <p>Rescue, conquer, and earn endless rewards</p>
          </div>
          <div className="col-lg-2 ms-4 me-5 intro-card">
            <div>
              <div className="about-particle-image-wrapper">
                <img
                  className="img-fluid about-particle-image-wrapper"
                  src="..\assets\images\about\Group 1526.png"
                  alt="aboutpic"
                />
              </div>
              <div className="about-particle-image">
                <img
                  className="img-fluid"
                  src="..\..\assets\images\about\giphy (1).gif"
                  alt="connect-line"
                />
              </div>
            </div>
            <h3 className="intro-card-heading">upgrade</h3>
            <p>Upgrade your heroic journey with power in-game assets</p>
          </div>
          <div className="col-lg-2 ms-4 me-5 intro-card">
            <div>
              <div className="about-particle-image-wrapper">
                <img
                  className="img-fluid about-particle-image-wrapper"
                  src="..\assets\images\about\Group 1526.png"
                  alt="aboutpic"
                />
              </div>
              <div className="about-particle-image">
                <img
                  className="img-fluid"
                  src="..\..\assets\images\about\giphy (1).gif"
                  alt="connect-line"
                />
              </div>
            </div>
            <h3 className="intro-card-heading">read & earn</h3>
            <p>Turn the pages, unlock treasures with Super Vet comic series</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
