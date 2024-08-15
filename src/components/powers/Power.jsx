import React from "react";
import "./power.css";

const Power = () => {
  return (
    <section className="App">
      <div className="power-container ">
        <div className="p-section-breaker">
          <img
            src="..\assets\images\partner\horizontal-line.png"
            alt="sectionbreaker"
          />
        </div>
        <div className="row power-content">
          <div
            data-aos="power-slideleft-animation"
            data-aos-delay="10"
            data-aos-duration="2500"
            className="powerLeft col-xxl-6 col-lg-7">
            <h3>super powers</h3>
            <img src="..\assets\images\power\Union.png" alt="image" />

            <p>
              Prepare to unleash the extraordinary Super Powers within the Super
              Vet NFT Collections. These awe-inspiring abilities are at your
              disposal as you embark on daring rescue missions and become the
              ultimate hero of the animal kingdom.
              <br />
              <br />
              Within the vast universe of Super Vet, each character possesses
              their own unique set of Super Powers. But these Super Powers
              aren't limited to the characters alone. The Super Vet NFT
              Collections bring forth a tapestry of Super Powers that ignite
              your imagination and empower you to make a profound impact on the
              lives of innocent animals. The Super Powers are more than just
              digital art; they grant you access to exclusive in-game bonuses,
              power-ups, and unique experiences that enhance your Super Vet
              adventure.
              <br />
              <br />
              It's not just a game; it's an opportunity to embody the hero
              you've always aspired to be. Whether it's the ability to
              communicate with animals telepathically, harnessing the energy of
              nature to heal, or even summoning incredible strength and speed,
              these powers elevate your character to new heights of heroism. The
              Super Vet universe is waiting for you to unleash your true
              potential and leave an indelible mark on the world.
            </p>

            <div className="p-bottom-content mt-5">
              <span>1: super Sense</span>
              <span>2: surgeory specialist</span>
              <span>3: super fighter</span>
              <span>4: nursing</span>
              <span>5: animal friends</span>
              <span>6: fast learner</span>
            </div>
          </div>
          <div
            data-aos="power-slideright-animation"
            data-aos-delay="10"
            data-aos-duration="2500"
            className="powerRight col-xxl-6 col-lg-5 power-right-img flex justify-content-center align-items-center">
            <div className="flex justify-content-center align-items-center">
              <div className="p-image-container">
                <div className="p-circle-image">
                  <img
                    className="img-fluid"
                    src="..\..\assets\images\power\giphy (4).gif"
                    alt="pica"
                  />
                </div>
                <div className="p-smoke-image">
                  <img
                    className="img-fluid"
                    src="..\..\assets\images\power\giphy (5).gif"
                    alt="pica"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="..\assets\images\power\Group 1599.png"
                    alt="pica"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Power;
