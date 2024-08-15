import React from "react";
import "./articleD.css";
import Footer from "../../components/footer/Footer";
import Navigation2 from "../../components/header/navigation/Navigation2";

const ArticleD = () => {
  return (
    <>
      <section>
        <Navigation2 />

        <div className="App " style={{ marginTop: "100px" }}>
          <div className="row article-container">
            <div className="col-lg-5">
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

                  <div className="d-flex justify-content-around w-85 container mt-4 mb-5">
                    <div className="d-flex justify-content-center align-items-center ">
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
                    <div>
                      <button type="button" class="btn read-more shadow-none ">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 article-D-content">
              <h3>New Feature Launch In Superverse</h3>
              <span>August 09,2022</span>

              <p className="name">BY : James Holand </p>
              {/* <img
                className="img-fluid"
                src="..\..\assets\images\about\Line 1.png"
              /> */}

              <p className="details">
                metus dignissim. Parturient cursus faucibus lobortis sagittis
                dolor, egestas. Fringilla consequat ultrices mi ipsum, sed at.
                Neque, interdum pretium, non posuere egestas. Placerat purus sit
                faucibus vestibulum. Pulvinar sagittis non posuere ornare
                tortor, ac etiam neque. Diam tellus sed leo donec rhoncus
                gravida. Mo rbi nisl in mi a aliquam fringilla malesuada. Orci
                viverra pellentesque non sit. Cras ultrices dolor libero, sed
                nibh. Cras mat tis adipiscing senectus velit. Fermentum nibh
                ornare tincidunt molestie. Pretium pretium aliquet tellus,
                ultricies dapibus tellus felis cras tincidunt. Dictum molestie
                nunc, facilisis nisi, eu donec.
                <br />
                <br />
                Fringilla consequat ultrices mi ipsum, sed at. Neque, interdum
                pretium, non posuere egestas. Placerat purus sit faucibus
                vestibulum. Pulvinar sagittis non posuere ornare tortor, ac
                etiam neque. Diam tellus sed leo donec rhoncus gravida. Mo rbi
                nisl in mi a aliquam fringilla malesuada. Orci viverra
                pellentesque non sit. Cras ultrices dolor libero, sed nibh. Cras
                mat tis adipiscing senectus velit. Fermentum nibh ornare
                tincidunt molestie. Pretium pretium aliquet tellus, ultricies
                dapibus tellus felis cras tincidunt. Dictum molestie nunc,
                facilisis nisi, eu donec.
                <br />
                <br />
                bi nisl in mi a aliquam fringilla malesuada. Orci viverra
                pellentesque non sit. Cras ultrices dolor libero, sed nibh. Cras
                mat tis adipiscing senectus velit. Fermentum nibh ornare
                tincidunt molestie. Pretium pretium aliquet tellus, ultricies
                dapibus tellus felis cras tincidunt. Dictum molestie nunc,
                facilisis nisi, eu donec.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="metaverse ">
              <h3>Metaverse To Superverse</h3>
              <img
                className="img-fluid"
                src="..\..\assets\images\articles\Rectangle 69.png"
                alt="..."
              />

              <div className="row mt-5">
                <div className="col-12">
                  <img
                    className="img-fluid"
                    src="..\..\assets\images\articles\meta-bg.png"
                    alt="..."
                  />
                </div>
                <div className="col-12 mt-5">
                  <p className="meta-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada odio morbi dui interdum. Ultrices auctor vel enim
                    etut curabitur. Orci, nunc dui praesent in. Est lacus
                    imperdiet enim porta. Sit ut et sit eu turpis. Integer fusce
                    faucibus nec metus dignissim. Parturient cursus faucibus
                    lobortis sagittis dolor, egestas.Fringilla consequat
                    ultrices mi ipsum, sed at. Neque, interdum pretium, non
                    posuere egestas. Placerat purus s it faucibus vestibulum.
                    Pulvinar sagittis non posuere ornare tortor, ac etiam neque.
                    Diam tellus sed leo donec rhoncus gravida. Morbi nisl in mi
                    a aliquam fringilla malesuada. Orci viverra pellentesque non
                    sit. Cras ultrices dolor libero, sed nibh. Cras mattis
                    adipiscing senectus velit. Fermentum nibh ornare tincidunt
                    molestie. Pretium pretium aliquet tellus, ultricies dapibus
                    tellus felis cras tincidunt. Dictum molestie nunc, facili
                    sis nisi, eu donec. <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada odio morbi dui interdum. Ultrices auctor vel enim
                    etut curabitur. Orci, nunc dui praesent in. Est lacus
                    imperdiet enim porta. Sit ut et sit eu turpis. Integer fusce
                    faucibus nec metus dignissim. Parturient cursus faucibus
                    lobortis sagittis dolor, egestas.Fringilla consequat
                    ultrices mi ipsum, sed at. Neque, interdum pretium, non
                    posuere egestas. Placerat purus s it faucibus vestibulum.
                    Pulvinar sagittis non posuere ornare tortor, ac etiam neque.
                    Diam tellus sed leo donec rhoncus gravida. Morbi nisl in mi
                    a aliquam fringilla malesuada. Orci viverra pellentesque non
                    sit. Cras ultrices dolor libero, sed nibh. Cras mattis
                    adipiscing senectus velit. Fermentum nibh ornare tincidunt
                    molestie. Pretium pretium aliquet tellus, ultricies dapibus
                    tellus felis cras tincidunt. Dictum molestie nunc, facili
                    sis nisi, eu donec.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Malesuada odio morbi dui interdum. Ultrices
                    auctor vel enim etut curabitur. Orci, nunc dui praesent in.
                    Est lacus imperdiet enim porta. Sit ut it faucibus
                    vestibulum. Pulvinar sagittis non posuere ornare tortor, ac
                    etiam neque. Diam tellus sed leo donec rhoncus gravida.
                    Morbi nisl in mi a aliquam fringilla malesuada. Orci viverra
                    pellentesque non sit. Cras ultrices dolor libero, sed nibh.
                    Cras mattis adipiscing senectus velit. Fermentum nibh ornare
                    tincidunt molestie. Pretium pretium aliquet tellus,
                    ultricies dapibus tellus felis cras tincidunt. Dictum
                    molestie nunc, facili sis nisi, eu donec.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default ArticleD;
