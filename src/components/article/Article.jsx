import React from "react";
import "./article.css";

const Article = () => {
  return (
    <div className="outermost-article-container">
      <section className="App">
        <div className="article-container  ">
          <div className="ellipse-4"></div>
          <div className="ellipse-5"></div>
          <div className="ellipse-6"></div>

          <div className="a-section-breaker">
            <img
              src="..\assets\images\partner\horizontal-line.png"
              alt="sectionbreaker"
            />
          </div>
          <div className="article-title">
            <h3>Latest Articles</h3>
          </div>
          <div className="row a-content-container">
            <div
              data-aos="article-left-animation"
              data-aos-delay="1000"
              data-aos-duration="2000"
              className="col-lg-6"
            >
              <div class="card a-content-left-side">
                <div class="card-body">
                  <div className="d-flex">
                    <img
                      className="img-fluid one"
                      src="..\assets\images\articles\Group 1677.png "
                    />
                    <div className="d-flex flex-column l-upper-content">
                      <span className="a-content-l-date">
                        August 09,2022/superverse/4 comments
                      </span>
                      <span className="a-content-l-launch">
                        New Feature Launch In Superverse
                      </span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <img
                      // className="img-fluid"
                      className="vr-boy"
                      src="..\assets\images\articles\Mask group.webp"
                    />
                  </div>

                  <div className="d-flex justify-content-around w-85 container mt-4 mb-5 lineBtn left-lineBtn">
                    <div className="d-flex justify-content-center align-items-center LineAlign">
                      <img
                        className="img-fluid article-line-left-side"
                        src="..\assets\images\articles\Vector 15.png"
                        alt="line"
                      />
                      <span className="superverse ms-2 me-2">Super Verse</span>
                      <img
                        className="img-fluid"
                        src="..\assets\images\articles\Vector 16.png"
                        alt="line"
                      />
                    </div>
                    <div className="readMore-Border">
                      {/* <button type="button" class="btn read-more shadow-none "> */}
                      <a
                        className="btn read-more shadow-none"
                        href="/article-detail"
                      >
                        Read More
                      </a>
                      {/* </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                data-aos="article-right-animation"
                data-aos-delay="1000"
                data-aos-duration="1500"
                class="card a-content-left-side r-side-img-bg"
              >
                <div class="card-body ">
                  <div className="d-flex">
                    <img
                      className="img-fluid one"
                      src="..\assets\images\articles\2.png "
                    />
                    <div className="d-flex flex-column l-upper-content">
                      <span className="a-content-l-date">
                        August 09,2022/superverse/4 comments
                      </span>
                      <span className="a-content-l-launch">The Mighty Zeo</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between w-85 container mt-4 mb-4 lineBtn">
                    <div className="d-flex justify-content-center align-items-center LineAlign">
                      <img
                        className="img-fluid article-line-left-side"
                        src="..\assets\images\articles\Vector 15.png"
                        alt="line"
                      />
                      <span className="superverse ms-2 me-2">
                        The Mighty Zeo
                      </span>
                      <img
                        className="img-fluid"
                        src="..\assets\images\articles\Vector 16.png"
                        alt="line"
                      />
                    </div>
                    <div className="readMore-Border">
                      {/* <button type="button" class="btn read-more shadow-none "> */}
                      <a
                        className="btn read-more shadow-none"
                        href="/article-detail"
                      >
                        Read More
                      </a>
                      {/* </button> */}
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="article-right-animation"
                data-aos-delay="1000"
                data-aos-duration="2000"
                class="card a-content-left-side r-side-img-bg mt-3 "
              >
                <div class="card-body">
                  <div className="d-flex">
                    <img
                      className="img-fluid one"
                      src="..\assets\images\articles\3.png "
                    />
                    <div className="d-flex flex-column l-upper-content">
                      <span className="a-content-l-date">
                        August 09,2022/superverse/4 comments
                      </span>
                      <span className="a-content-l-launch">
                        Inferno Death Drop
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between w-85 container mt-4 mb-4 lineBtn">
                    <div className="d-flex justify-content-center align-items-center LineAlign">
                      <img
                        className="img-fluid article-line-left-side"
                        src="..\assets\images\articles\Vector 15.png"
                        alt="line"
                      />
                      <span className="superverse ms-2 me-2">Death Drop</span>
                      <img
                        className="img-fluid"
                        src="..\assets\images\articles\Vector 16.png"
                        alt="line"
                      />
                    </div>
                    <div className="readMore-Border">
                      {/* <button type="button" class="btn read-more shadow-none "> */}
                      <a
                        className="btn read-more shadow-none"
                        href="/article-detail"
                      >
                        Read More
                      </a>
                      {/* </button> */}
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="article-right-animation"
                data-aos-delay="1000"
                data-aos-duration="2500"
                class="card a-content-left-side r-side-img-bg mt-3"
              >
                <div class="card-body">
                  <div className="d-flex">
                    <img
                      className="img-fluid one"
                      src="..\assets\images\articles\4.png "
                    />
                    <div className="d-flex flex-column l-upper-content">
                      <span className="a-content-l-date">
                        August 09,2022/superverse/4 comments
                      </span>
                      <span className="a-content-l-launch">AMA</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between w-85 container mt-4 mb-2 pb-3 lineBtn">
                    <div className="d-flex justify-content-center align-items-center LineAlign">
                      <img
                        className="img-fluid article-line-left-side"
                        src="..\assets\images\articles\Vector 15.png"
                        alt="line"
                      />
                      <span className="superverse ms-2 me-2">Kommunitas</span>
                      <img
                        className="img-fluid"
                        src="..\assets\images\articles\Vector 16.png"
                        alt="line"
                      />
                    </div>
                    <div className="readMore-Border">
                      {/* <button type="button" class="btn read-more shadow-none "> */}
                      <a
                        className="btn read-more shadow-none"
                        href="/article-detail"
                      >
                        Read More
                      </a>
                      {/* </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
