import React from "react";
import Nav from "../../Nav/Nav";
import "./HFI.css";
import sectionThirdPic from "../../Images/hero1.jpg";
import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";
import { useMediaQuery } from "react-responsive";
function HFI() {
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
        <div className="hfi_mobile">
          <div className="section_first_hfi">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">
                    Contact our team for professional installation services
                  </h2>
                  <p>
                    OceanAir strives to maintain a legacy of superior heating
                    services and solutions
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_hfi">
            <div className="container">
              <p>
                We only install quality equipment from manufacturers with a
                proven track record. Our team has the knowledge and hands-on
                experience to accurately install and maintain a range of heating
                technology, including:
              </p>
              <ul>
                <li>
                  <a href="" role="link">
                    Forced Air Furnaces
                  </a>
                </li>
                <li>
                  <a href="" role="link">
                    Heat Pumps
                  </a>
                </li>
                <li>
                  <a href="" role="link">
                    Radiators
                  </a>
                </li>
                <li>
                  <a href="" role="link">
                    High-Efficiency Boilers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="section_third_hfi">
            <div className="container">
              <h2>
                Heating and Furnace Installation you can count on in the GTA
              </h2>
              <h3>Get an Estimate on Heating Installation</h3>
              <p>
                <img
                  src={sectionThirdPic}
                  width="560"
                  height="300"
                  alt="hfi_desc"
                />
                For modern and older homes in greater Toronto and the
                surrounding area, the requirements might be very different but
                the goals are the same. You need a heating system capable of
                handling the severe cold in greater Toronto and the surrounding
                area. Along with perfect comfort, aspects such as energy
                efficiency, air quality, reliability, and the sustainability of
                the equipment are all priorities. Best results are often
                achieved through trial and error. When you call OceanAir
                Heating, Cooling &amp; Electrical for service, you skip ahead to
                a successful outcome. Our personalized approach to heating
                system design is the culmination of 114 years of knowledge and
                experience. We’re familiar with all options, happy to explain
                them, and make sure you take advantage of innovation to achieve
                best possible results. We are the capable hands to guide and
                accomplish where others fall short.
              </p>
              <h3 class="h3">
                Heating Installation in Toronto, ON | Heating System Replacement
              </h3>
              <p></p>
              <a href="/req_an_estimate" role="link" alt="getanestimate">
                <button class="btn btn-req-estimate" type="button">
                  Request An Estimate
                </button>
              </a>
            </div>
          </div>

          <div className="section_fourth_hfi">
            <Review />
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="hfi_pc">
          <div className="section_first_hfi">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">
                    Contact our team for professional installation services
                  </h2>
                  <p>
                    OceanAir strives to maintain a legacy of superior heating
                    services and solutions
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_hfi">
            <div className="container">
              <p>
                We only install quality equipment from manufacturers with a
                proven track record. Our team has the knowledge and hands-on
                experience to accurately install and maintain a range of heating
                technology, including:
              </p>
              <ul>
                <li>
                  <a href="" role="link">
                    Forced Air Furnaces
                  </a>
                </li>
                <li>
                  <a href="" role="link">
                    Heat Pumps
                  </a>
                </li>
                <li>
                  <a href="" role="link">
                    Radiators
                  </a>
                </li>
                <li>
                  <a href="" role="link">
                    High-Efficiency Boilers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="section_third_hfi">
            <div className="container">
              <h2>
                Heating and Furnace Installation you can count on in the GTA
              </h2>
              <h3>Get an Estimate on Heating Installation</h3>
              <p>
                <img
                  src={sectionThirdPic}
                  width="560"
                  height="300"
                  alt="hfi_desc"
                />
                For modern and older homes in greater Toronto and the
                surrounding area, the requirements might be very different but
                the goals are the same. You need a heating system capable of
                handling the severe cold in greater Toronto and the surrounding
                area. Along with perfect comfort, aspects such as energy
                efficiency, air quality, reliability, and the sustainability of
                the equipment are all priorities. Best results are often
                achieved through trial and error. When you call OceanAir
                Heating, Cooling &amp; Electrical for service, you skip ahead to
                a successful outcome. Our personalized approach to heating
                system design is the culmination of 114 years of knowledge and
                experience. We’re familiar with all options, happy to explain
                them, and make sure you take advantage of innovation to achieve
                best possible results. We are the capable hands to guide and
                accomplish where others fall short.
              </p>
              <h3 class="h3">
                Heating Installation in Toronto, ON | Heating System Replacement
              </h3>
              <p></p>
              <a href="/req_an_estimate" role="link" alt="getanestimate">
                <button class="btn btn-req-estimate" type="button">
                  Request An Estimate
                </button>
              </a>
            </div>
          </div>

          <div className="section_fourth_hfi">
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

export default HFI;
