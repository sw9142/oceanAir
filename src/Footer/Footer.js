import React from "react";
import "./Footer.css";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isPC = useMediaQuery({ query: "(min-width:1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });

  return (
    <div className="footer">
      {isMobile ? (
        <div className="footer1 footer1_mobile">
          <ul>
            <li className="address_box">
              <div className="footer_service">Contact Info</div>

              <div className="address">
                (416) 720-8795
                <br />
                oceanair199@gmail.com
              </div>
              <div className="socialmedia">
                <a href="https://www.facebook.com">
                  <i className="social fab fa-facebook-square"></i>
                </a>
                <a href="https://www.google.com">
                  <i className="social far fa-envelope"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i className="social fab fa-instagram"></i>
                </a>
                <a href="https://www.github.com">
                  <i className="social fab fa-github"></i>
                </a>
              </div>
            </li>
            <div className="footer1_mobile_services">
              <li className="heatingandcooling">
                <div className="footer_service">Heating Services</div>
                <ul className="footer_subservices">
                  <div>
                    <li>
                      <a href="/hfi"> Heating & Furnace Installation</a>
                    </li>
                    <li>
                      <a href="hfr">Heating & Furnace Repair</a>
                    </li>
                    <li>
                      <a href="bi">Boiler Installation</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="twh">Tankless Water Heaters</a>
                    </li>
                    <li>
                      <a href="rih">Radiant In-Floor Heating</a>
                    </li>
                    <li>
                      <a href="lc">Light Commercial HVAC</a>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="moreservices">
                <div className="footer_service cooling_services">
                  Cooling Services
                </div>
                <ul className="footer_subservices cooling_list">
                  <div>
                    <li>
                      <a href="aci">Air Conditioning Installation</a>
                    </li>
                    <li>
                      <a href="acs">Air Conditioning Service</a>
                    </li>
                  </div>
                </ul>
              </li>
            </div>
          </ul>
        </div>
      ) : (
        <div className="footer1 footer_pc">
          <ul>
            <li className="address_box">
              <div className="footer_service contact_info">Contact Info</div>

              <div className="address">
                (416) 720-8795
                <br />
                oceanair199@gmail.com
              </div>
              <div className="socialmedia">
                <a href="https://www.facebook.com">
                  <i className="social fab fa-facebook-square"></i>
                </a>
                <a href="https://www.google.com">
                  <i className="social far fa-envelope"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i className="social fab fa-instagram"></i>
                </a>
                <a href="https://www.github.com">
                  <i className="social fab fa-github"></i>
                </a>
              </div>
            </li>
            <li className="heatingandcooling">
              <div className="footer_service">Heating Services</div>
              <ul className="footer_subservices">
                <div>
                  <li>
                    <a href="/hfi"> Heating & Furnace Installation</a>
                  </li>
                  <li>
                    <a href="hfr">Heating & Furnace Repair</a>
                  </li>
                  <li>
                    <a href="bi">Boiler Installation</a>
                  </li>
                </div>
                <div>
                  <li>
                    <a href="twh">Tankless Water Heaters</a>
                  </li>
                  <li>
                    <a href="rih">Radiant In-Floor Heating</a>
                  </li>
                  <li>
                    <a href="lc">Light Commercial HVAC</a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="moreservices">
              <div className="footer_service cooling_services">
                Cooling Services
              </div>
              <ul className="footer_subservices cooling_list">
                <div>
                  <li>
                    <a href="aci">Air Conditioning Installation</a>
                  </li>
                  <li>
                    <a href="acs">Air Conditioning Service</a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      )}

      <div className="footer2">
        © 2022 OceanAir All rights reserved. Website Designed by MTA360 -
        Privacy Policy
      </div>
    </div>
  );
}

export default Footer;
