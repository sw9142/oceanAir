import React from "react";
import Nav from "../../Nav/Nav";
import "./RIH.css";

import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";

import { useMediaQuery } from "react-responsive";

function RIH() {
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
        <div className="rih_mobile">
          <div className="section_first_rih">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">
                    Radiant In-Floor Heating Installation in Toronto
                  </h2>
                  <h3>Hot Water Heating System & Heating Service</h3>
                  <p>
                    The radiant-in-floor heating is still the most comfortable
                    way to heat a home in winter
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_rih">
            <div className="container">
              <div className="second_rih_1">
                <h2 className="h2">
                  Professional In-Floor Heating Installation
                </h2>
                <h3 className="h3">Contact us today in GTA for services</h3>
                <p>
                  ‘In-floor’ heating system. Of course, there have been enormous
                  improvements in technology and equipment since then. The last
                  ten years have seen a huge resurgence in hot water heating,
                  particularly in new construction and in whole house
                  renovations. The building and renovation process can also be
                  an appropriate time to extend your existing hot water systems
                  or install a new system and upgrade any hard surface area
                  (mudroom, entrance lobby, kitchen, bathrooms) to ‘in-floor’
                  heating.
                </p>
              </div>
              <div className="second_rih_2">
                <h2 className="h2">
                  Timely Radiant In-Floor Heating Services and Repair
                </h2>
                <h3>Radiant In-Floor Heating Maintenance</h3>
                <br></br>
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="section_fourth_rih">
            <Review />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="rih_pc">
          <div className="section_first_rih">
            <div className="container_section_first">
              <div className="section_first_pic"></div>
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">
                    Radiant In-Floor Heating Installation in Toronto
                  </h2>
                  <h3>Hot Water Heating System & Heating Service</h3>
                  <p>
                    The radiant-in-floor heating is still the most comfortable
                    way to heat a home in winter
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section_second_rih">
            <div className="container">
              <div className="second_rih_1">
                <h2 className="h2">
                  {" "}
                  Professional In-Floor Heating Installation
                </h2>
                <h3 className="h3">Contact us today in GTA for services</h3>
                <p>
                  ‘In-floor’ heating system. Of course, there have been enormous
                  improvements in technology and equipment since then. The last
                  ten years have seen a huge resurgence in hot water heating,
                  particularly in new construction and in whole house
                  renovations. The building and renovation process can also be
                  an appropriate time to extend your existing hot water systems
                  or install a new system and upgrade any hard surface area
                  (mudroom, entrance lobby, kitchen, bathrooms) to ‘in-floor’
                  heating.
                </p>
              </div>
              <div className="second_rih_2">
                <br></br>
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="section_fourth_rih">
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

export default RIH;
