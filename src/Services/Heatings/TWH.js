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
                    Tankless hot water heaters are common in Europe and Japan.
                    They can supply an endless supply of hot water, with greater
                    energy savings than conventional tanks. They are, however,
                    limited in the amount of hot water that can be produced at
                    one time and the upfront costs are higher.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section_second_twh">
            <div className="container">
              <div className="second_twh_1">
                <p>
                  OceanAir. Limited installs Rinnai units that are up to 98%
                  efficient and can provide up to 4.5 gallons per minute at a
                  25°C temperature rise (the temp rise we require in Toronto to
                  heat our incoming water). OceanAir. services all manufacturers
                  of tankless units including Navien, Noritz, Bosch, Takagi &
                  Bradford White.
                </p>
              </div>
              <div className="second_twh_2">
                <h2 className="h2">
                  Your Hometown Tankless Water Heater Company
                </h2>
                <p>
                  In our experience, the most successful applications of these
                  units are in households where the whole family is committed to
                  being more energy-efficient. This may include the use of
                  high-efficiency dishwashers and washing machines (that heat
                  their own water), low-flow shower heads, and a willingness to
                  adapt water usage.
                </p>
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
                    Tankless hot water heaters are common in Europe and Japan.
                    They can supply an endless supply of hot water, with greater
                    energy savings than conventional tanks. They are, however,
                    limited in the amount of hot water that can be produced at
                    one time and the upfront costs are higher.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_twh">
            <div className="container">
              <div className="second_twh_1">
                <p>
                  OceanAir. Limited installs Rinnai units that are up to 98%
                  efficient and can provide up to 4.5 gallons per minute at a
                  25°C temperature rise (the temp rise we require in Toronto to
                  heat our incoming water). OceanAir. services all manufacturers
                  of tankless units including Navien, Noritz, Bosch, Takagi &
                  Bradford White.
                </p>
              </div>
              <div className="second_twh_2">
                <h2 className="h2">
                  Your Hometown Tankless Water Heater Company
                </h2>
                <p>
                  In our experience, the most successful applications of these
                  units are in households where the whole family is committed to
                  being more energy-efficient. This may include the use of
                  high-efficiency dishwashers and washing machines (that heat
                  their own water), low-flow shower heads, and a willingness to
                  adapt water usage.
                </p>
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
