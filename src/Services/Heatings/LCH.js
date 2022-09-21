import React from "react";
import Nav from "../../Nav/Nav";
import "./LCH.css";

import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";
import { useMediaQuery } from "react-responsive";

function LCH() {
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
        <div className="lch_mobile">
          <div className="section_first_lch">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">
                    Contact us today for professional Heating & Furnace repairs!
                  </h2>
                  <p>
                    No one is excited about heater malfunctions. That’s not
                    entirely true. While we certainly don’t wish problems on
                    home and business owners in greater Toronto and the
                    surrounding area, we at Belyea Bros. Heating, Cooling &
                    Electrical are always happy to help and eager to tackle and
                    resolve challenges. We look forward to putting our
                    experience, skills, and innovation to good use, and there’s
                    nothing better than earning a happy smile from our clients.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_lch">
            <div className="container">
              <div className="second_lch_1">
                <h2 className="h2"> Toronto's Heating Repair Experts</h2>
                <h3 className="h3">
                  Do you need immediate heating repairs? Call now
                </h3>
                <p>
                  Start by getting in touch at (416) 000-0000, and we’ll handle
                  the rest swiftly, seamlessly, and successfully. We’ve spent
                  every day of the last 114 years making sure our services are
                  the very best across Toronto, ON. Our expert techs are always
                  prepared for the task and available for unexpected emergencies
                  24 hours a day, 365 days a year.
                </p>
              </div>
              <div className="second_lch_2">
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

          <div className="section_fourth_lch">
            <Review />
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="lch_pc">
          <div className="section_first_lch">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">
                    Contact us today for professional Heating & Furnace repairs!
                  </h2>
                  <p>
                    No one is excited about heater malfunctions. That’s not
                    entirely true. While we certainly don’t wish problems on
                    home and business owners in greater Toronto and the
                    surrounding area, we at Belyea Bros. Heating, Cooling &
                    Electrical are always happy to help and eager to tackle and
                    resolve challenges. We look forward to putting our
                    experience, skills, and innovation to good use, and there’s
                    nothing better than earning a happy smile from our clients.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_lch">
            <div className="container">
              <div className="second_lch_1">
                <h2 className="h2"> Toronto's Heating Repair Experts</h2>
                <h3 className="h3">
                  Do you need immediate heating repairs? Call now
                </h3>
                <p>
                  Start by getting in touch at (416) 000-0000, and we’ll handle
                  the rest swiftly, seamlessly, and successfully. We’ve spent
                  every day of the last 114 years making sure our services are
                  the very best across Toronto, ON. Our expert techs are always
                  prepared for the task and available for unexpected emergencies
                  24 hours a day, 365 days a year.
                </p>
              </div>
              <div className="second_lch_2">
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

          <div className="section_fourth_lch">
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

export default LCH;
