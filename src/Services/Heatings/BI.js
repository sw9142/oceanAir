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
                    company, Belyea Bros. Heating, Cooling & Electrical
                    optimizes hydronic heating system performance by way of
                    radiant in-floor heating, streamlined wall or baseboard
                    radiators, air handlers, domestic hot water tanks, snowmelt
                    systems, and more.
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
                  Drawing from leading manufacturers such as Baxi, Rinnai,
                  Slant/fin, HTP, Triangle Tube, NTI, and Viessmann, we offer
                  modulating boilers to maximize heat extraction and energy
                  efficiency. Condensing, non-condensing and combi options free
                  up space, accommodate zoned control, and provide virtually
                  silent operation, a healthier indoor environment, consistent
                  temperature, gentle heat and won’t overly dry out the indoor
                  air.
                </p>
              </div>

              <div className="second_bi_2">
                <h3 className="h3">Combination Boiler Maintenance Services</h3>
                <p>
                  OceanAir. Heating, Cooling & Electrical gets excited about
                  boilers. Very much like our company, this type of heating
                  system is exceptionally reliable, long-lasting and exceeds
                  expectations in all ways. We’ve been around since 1908 and
                  definitely know our way around all makes and models of
                  hydronic heating. Get in touch with us at (416) 720-8795 for
                  every residential and commercial need, including free
                  estimates on replacements, vital maintenance, skilled repair,
                  and 24/7 emergency service across Toronto, ON.
                </p>
              </div>
              <div className="second_bi_3">
                <h3 className="h3">Non-Condensing Mid-Efficiency Boilers</h3>
                <p>
                  Contact our team to learn more about all of our boiler
                  services!
                </p>
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
                    company, Belyea Bros. Heating, Cooling & Electrical
                    optimizes hydronic heating system performance by way of
                    radiant in-floor heating, streamlined wall or baseboard
                    radiators, air handlers, domestic hot water tanks, snowmelt
                    systems, and more.
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
                  Drawing from leading manufacturers such as Baxi, Rinnai,
                  Slant/fin, HTP, Triangle Tube, NTI, and Viessmann, we offer
                  modulating boilers to maximize heat extraction and energy
                  efficiency. Condensing, non-condensing and combi options free
                  up space, accommodate zoned control, and provide virtually
                  silent operation, a healthier indoor environment, consistent
                  temperature, gentle heat and won’t overly dry out the indoor
                  air.
                </p>
              </div>

              <div className="second_bi_2">
                <h3 className="h3">Combination Boiler Maintenance Services</h3>
                <p>
                  OceanAir. Heating, Cooling & Electrical gets excited about
                  boilers. Very much like our company, this type of heating
                  system is exceptionally reliable, long-lasting and exceeds
                  expectations in all ways. We’ve been around since 1908 and
                  definitely know our way around all makes and models of
                  hydronic heating. Get in touch with us at (416) 720-8795 for
                  every residential and commercial need, including free
                  estimates on replacements, vital maintenance, skilled repair,
                  and 24/7 emergency service across Toronto, ON.
                </p>
              </div>
              <div className="second_bi_3">
                <h3 className="h3">Non-Condensing Mid-Efficiency Boilers</h3>
                <p>
                  Contact our team to learn more about all of our boiler
                  services!
                </p>
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
