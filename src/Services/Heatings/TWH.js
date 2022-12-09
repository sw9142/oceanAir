import React from "react";
import Nav from "../../Nav/Nav";
import "./TWH.css";

import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";

import { useMediaQuery } from "react-responsive";

function TWH() {
  const isPC = useMediaQuery({ query: "(min-width:1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });

  return (
    <div>
      <Nav />
      <div className="gap"></div>
      {isMobile ? (
        <div className="twh_mobile">
          <div className="section_first_twh">
            <div className="container_section_first">
              <div className="section_first_pic"></div>
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">
                    Tankless Hot Water Heater Installation in Toronto
                  </h2>
                  <p>
                    Tankless hot water heaters can supply an endless supply of
                    hot water, with greater energy savings than conventional
                    tanks.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section_second_twh">
            <div className="container">
              <div className="second_twh_1"></div>
              <div className="second_twh_2">
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="section_fourth_twh">
            <Review />
          </div>
        </div>
      ) : (
        <div className="twh_pc">
          <div className="section_first_twh">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">
                    Tankless Hot Water Heater Installation in Toronto
                  </h2>
                  <p>
                    Tankless hot water heaters can supply an endless supply of
                    hot water, with greater energy savings than conventional
                    tanks.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_twh">
            <div className="container">
              <div className="second_twh_1"></div>
              <div className="second_twh_2">
                <p></p>
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="section_fourth_twh">
            <Review />
          </div>
        </div>
      )}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default TWH;
