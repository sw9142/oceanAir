import React from "react";
import Nav from "../../Nav/Nav";
import "./ACI.css";
import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";

import { useMediaQuery } from "react-responsive";

function ACI() {
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
        <div className="aci_mobile">
          <div className="section_first_aci">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">Central Air Conditioning Installation</h2>
                  <p>
                    Central Air Conditioning Installation Considering the
                    addition of central cooling to your home. Thinking it’s time
                    to replace an outdated air conditioner? OceanAir Heating &
                    Cooling provides choices, and solutions for new air
                    conditioner unit.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_aci">
            <div className="container">
              <div className="second_aci_1">
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="section_fourth_aci">
            <Review />
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="aci_pc">
          <div className="section_first_aci">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">Central Air Conditioning Installation</h2>
                  <p>
                    Central Air Conditioning Installation Considering the
                    addition of central cooling to your home. Thinking it’s time
                    to replace an outdated air conditioner? OceanAir Heating &
                    Cooling provides choices, and solutions for new air
                    conditioner unit.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_aci">
            <div className="container">
              <div className="second_aci_1">
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="section_fourth_aci">
            <Review />
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default ACI;
