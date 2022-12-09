import React from "react";
import Nav from "../../Nav/Nav";
import "./HFR.css";

import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";
import { useMediaQuery } from "react-responsive";

function HFR() {
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
        <div className="hfr_mobile">
          <div className="section_first_hfr">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">
                    Contact us today for professional Heating & Furnace repairs!
                  </h2>
                  <p>
                    No one is excited about heater malfunctions. we at OceanAir.
                    Heating & Cooling are always happy to help. We look forward
                    to putting our experience and skills to good use.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_hfr">
            <div className="container">
              <div className="second_hfr_1">
                <h2 className="h2"> Toronto's Heating Repair Experts</h2>
              </div>
              <div className="second_hfr_2">
                <h2 className="h2">
                  Repair & Installation Service for Radiators, Boilers, Hot
                  Water Heating & Heat Pumps
                </h2>
                <p>
                  OceanAir is knowledgeable in all makes and models of heating
                  systems, including furnaces, boilers, heat pumps,
                  high-velocity HVAC, ductless mini splits, and every possible
                  type of equipment. When we insist that we will deliver a
                  rewarding end result, it’s because we’ve proven our
                  capabilities time and again. We hold the very first heating
                  license issued in Toronto.
                </p>
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="section_fourth_hfr">
            <Review />
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="hfr_pc">
          <div className="section_first_hfr">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">
                    Contact us today for professional Heating & Furnace repairs!
                  </h2>
                  <p>
                    No one is excited about heater malfunctions. we at OceanAir.
                    Heating & Cooling are always happy to help. We look forward
                    to putting our experience and skills to good use.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_hfr">
            <div className="container">
              <div className="second_hfr_1">
                <h2 className="h2"> Toronto's Heating Repair Experts</h2>
              </div>
              <div className="second_hfr_2">
                <h3 className="h3">
                  Repair & Installation Service for Radiators, Boilers, Hot
                  Water Heating & Heat Pumps
                </h3>
                <p>
                  OceanAir is knowledgeable in all makes and models of heating
                  systems, including furnaces, boilers, heat pumps,
                  high-velocity HVAC, ductless mini splits, and every possible
                  type of equipment. When we insist that we will deliver a
                  rewarding end result, it’s because we’ve proven our
                  capabilities time and again. We hold the very first heating
                  license issued in Toronto.
                </p>
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="section_fourth_hfr">
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

export default HFR;
