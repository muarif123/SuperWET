import React from "react";
import "./collection.css";

import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();

  return (
    <section id="collection-id">
      <div className="collection-container">
        <div className="App">
          <div className="c-section-breaker ">
            <img
              src="..\assets\images\partner\horizontal-line.png"
              alt="sectionbreaker"
            />
          </div>
        </div>

        <div className="collection-content text-center">
          <div className="App">
            <h3>Collections</h3>
            <img src="..\assets\images\collection\Union.png" alt="iamge" />
          </div>

          <div className="collection-bg ">
            <div className="App">
              <div className="text-white row collection-side">
                <div
                  data-aos="collection-left-animation"
                  data-aos-delay="1000"
                  data-aos-duration="3000"
                  className="col-lg-6 collection-side-r-image"
                >
                  <Carousel
                    fade={true}
                    interval={1500}
                    controls={false}
                    indicators={false}
                    pause={false}
                  >
                    <Carousel.Item>
                      <img
                        className="collection-image img-fluid"
                        src="..\..\assets\images\collection\Property 1=Default.png"
                        alt=""
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="collection-image img-fluid"
                        src="..\..\assets\images\collection\Property 1=Variant2.png"
                        alt=""
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="collection-image img-fluid"
                        src="..\..\assets\images\collection\Property 1=Variant3.png"
                        alt=""
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="collection-image img-fluid"
                        src="..\..\assets\images\collection\Property 1=Variant4.png"
                        alt=""
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="collection-image img-fluid"
                        src="..\..\assets\images\collection\Property 1=Variant5.png"
                        alt=""
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="collection-image img-fluid"
                        src="..\..\assets\images\collection\Property 1=Variant6.png"
                        alt=""
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div
                  data-aos="collection-right-animation"
                  data-aos-delay="1000"
                  data-aos-duration="3000"
                  className="col-lg-6 collection-side-text-center"
                >
                  <p className="collection-side-p">
                    Introducing the awe-inspiring Super Vet NFT Collections,
                    where art, gaming, and compassion unite to create an
                    unparalleled digital experience. Each Super Vet NFT
                    collection is a masterpiece in its own right, meticulously
                    crafted with love and precision to bring forth a world where
                    heroes and animals intertwine.
                    <br />
                    <br />
                    The Super NFT Collection encompasses a diverse range of
                    characters, each possessing their own unique traits,
                    personalities, and stories. From courageous veterans to
                    adorable AI companions, these NFTs breathe life into the
                    Super Vet universe, allowing you to forge a deep connection
                    with these virtual beings.
                    <br />
                    <br />
                    Super Vet NFTs are not just collectibles; they are gateways
                    to immersive adventures. As you acquire these digital
                    treasures, you gain access to exclusive in-game content,
                    unlock special missions, and uncover hidden realms within
                    the Super Vet universe. Immerse yourself in thrilling
                    quests, overcome daring challenges, and make a lasting
                    impact on the lives of the innocent animals you save.
                  </p>

                  <button
                    type="button"
                    class="btn mt-4 btn-collection shadow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/collections");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Explore NFT’s Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
