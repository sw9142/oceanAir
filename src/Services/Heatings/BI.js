import React from "react";
import Nav from "../../Nav/Nav";
import "./BI.css";
import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";
import { useMediaQuery } from "react-responsive";

function BI() {
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
        <div className="bi_mobile">
          <div className="section_first_bi">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">Get A New Boiler Installed In Toronto!</h2>
                  <p>
                    Versatile, energy-efficient and plenty powerful enough for
                    the severe cold in greater Toronto and the surrounding area,
                    boilers make an excellent choice for both the residential
                    and commercial setting. As an authorized boiler installation
                    company, OceanAir Heating & Cooling optimizes hydronic
                    heating system performance by way of radiant in-floor
                    heating, streamlined wall or baseboard radiators.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_bi">
            <div className="container">
              <div className="second_bi_1">
                <h3 className="h3">
                  High Efficiency Boiler Installation & Service
                </h3>
                <p>
                  Drawing from leading manufacturers such as Rinnai, Navien,
                  NTI, and Viessmann, we offer modulating boilers to maximize
                  heat extraction and energy efficiency. Condensing,
                  non-condensing and combi options free up space.
                </p>
              </div>

              <div className="second_bi_2">
                <h3 className="h3">Combination Boiler Maintenance Services</h3>
                <p>
                  OceanAir Heating & Cooling gets excited about boilers. Very
                  much like our company, this type of heating system is
                  exceptionally reliable, long-lasting and exceeds expectations
                  in all ways. Get in touch with us at (416) 720-8795 for every
                  residential and commercial need.{" "}
                </p>
              </div>
              <div className="second_bi_3">
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="section_fourth_bi">
            <Review />
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="bi_pc">
          <div className="section_first_bi">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">Get A New Boiler Installed In Toronto!</h2>
                  <p>
                    Versatile, energy-efficient and plenty powerful enough for
                    the severe cold in greater Toronto and the surrounding area,
                    boilers make an excellent choice for both the residential
                    and commercial setting. As an authorized boiler installation
                    company, OceanAir Heating & Cooling optimizes hydronic
                    heating system performance by way of radiant in-floor
                    heating, streamlined wall or baseboard radiators.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_bi">
            <div className="container">
              <div className="second_bi_1">
                <h3 className="h3">
                  High Efficiency Boiler Installation & Service
                </h3>
                <p>
                  Drawing from leading manufacturers such as Rinnai, Navien,
                  NTI, and Viessmann, we offer modulating boilers to maximize
                  heat extraction and energy efficiency. Condensing,
                  non-condensing and combi options free up space.
                </p>
              </div>

              <div className="second_bi_2">
                <h3 className="h3">Combination Boiler Maintenance Services</h3>
                <p>
                  OceanAir Heating & Cooling gets excited about boilers. Very
                  much like our company, this type of heating system is
                  exceptionally reliable, long-lasting and exceeds expectations
                  in all ways. Get in touch with us at (416) 720-8795 for every
                  residential and commercial need.{" "}
                </p>
              </div>
              <div className="second_bi_3">
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="section_fourth_bi">
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

export default BI;
