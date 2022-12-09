import React from "react";
import Nav from "../../Nav/Nav";
import "./ACS.css";
import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";

import { useMediaQuery } from "react-responsive";

function ACS() {
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
        <div className="acs_mobile">
          <div className="section_first_acs">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">Reliable AC Services in the GTA</h2>
                  <p>
                    At OceanAir. Heating & Cooling, our experience makes all the
                    difference. We service every make, model, and type of
                    cooling systems.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_acs">
            <div className="container">
              <div className="second_acs_1"></div>
              <div className="second_acs_2">
                <h3 className="h3">Annual A/C Service </h3>
                <p>
                  Your equipment requires seasonal maintenance in order to avoid
                  malfunctions. Your AC isn’t designed to last forever but you
                  can keep yours running smoothly for longer with the proper
                  maintence and repairs if necessary. To learn more about our
                  maintenance services, call Ocean Air Heating & Cooling today.
                </p>
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="section_fourth_acs">
            <Review />
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="acs_pc">
          <div className="section_first_acs">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">Reliable AC Services in the GTA</h2>
                  <p>
                    At OceanAir Heating & Cooling, our experience makes all the
                    difference. We service every make, model, and type of
                    cooling systems.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_acs">
            <div className="container">
              <div className="second_acs_1"></div>
              <div className="second_acs_2">
                <h3 className="h3">Annual A/C Service </h3>
                <p>
                  Your equipment requires seasonal maintenance in order to avoid
                  malfunctions. Your AC isn’t designed to last forever but you
                  can keep yours running smoothly for longer with the proper
                  maintence and repairs if necessary. To learn more about our
                  maintenance services, call OceanAir Heating & Cooling today.
                </p>
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="section_fourth_acs">
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

export default ACS;
