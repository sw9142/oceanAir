import React, { useState, useRef } from "react";
import "./Nav.css";
import logo from "../Images/logo2.png";

import { useMediaQuery } from "react-responsive";
import $ from "jquery";

function Nav() {
  const sub_menu = useRef();

  const [heatingMenuOpen, setHeatingMenuOpen] = useState(false);
  const [coolingMenuOpen, setCoolingMenuOpen] = useState(false);

  const isPC = useMediaQuery({ query: "(min-width:1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });

  function MouseEnterHandler(e) {
    e.target.innerText === "Heating"
      ? setHeatingMenuOpen((heatingMenuOpen) => !heatingMenuOpen)
      : setCoolingMenuOpen((coolingMenuOpen) => !coolingMenuOpen);
  }

  function MouseLeaveHandler() {
    setHeatingMenuOpen((heatingMenuOpen) => !heatingMenuOpen);
  }

  function mobileNavClickHandler() {
    if (sub_menu.current.style.display === "none") {
      sub_menu.current.style.display = "block";
    } else {
      sub_menu.current.style.display = "none";
    }
  }

  function mobileHeatingClickHandler() {
    if (!heatingMenuOpen) {
      $("#sub_menu_heating").slideDown();
      setHeatingMenuOpen(true);
    } else {
      $("#sub_menu_heating").slideUp();
      setHeatingMenuOpen(false);
    }
  }

  function mobileCoolingClickHandler() {
    if (!coolingMenuOpen) {
      $("#sub_menu_cooling").slideDown();
      setCoolingMenuOpen(true);
    } else {
      $("#sub_menu_cooling").slideUp();
      setCoolingMenuOpen(false);
    }
  }

  return (
    <>
      {isMobile ? (
        /* it is mobile */
        <div className="wrap">
          <div className="nav nav_mobile">
            <div className="nav_first">
              <div className="nav_first_left">📞 (416) 720-8795</div>
              <div></div>
            </div>
            <div className="nav_second nav_second_mobile">
              <div className="nav_second_row_first">
                <div className="nav_second_left logo_wrap">
                  <div className="logo">
                    <a href="/">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                </div>

                <div
                  className="nav_second_right_mobile"
                  onClick={mobileNavClickHandler}
                >
                  <i class="fa-solid fa-bars"></i>
                </div>
              </div>
              <div ref={sub_menu} className="nav_second_row_second">
                <ul className="menus_mobile">
                  <li>
                    <a href="/">
                      <p>Home</p>
                    </a>
                  </li>
                  <li onClick={mobileHeatingClickHandler}>
                    <p>Heating</p>
                    <ul
                      id="sub_menu_heating"
                      className={
                        heatingMenuOpen
                          ? "sub-menus heating active"
                          : "sub-menus heating"
                      }
                    >
                      <li>
                        <a href="/hfi"> Heating & Furnace Installation</a>
                      </li>
                      <li>
                        <a href="hfr">Heating & Furnace Repair</a>
                      </li>
                      <li>
                        <a href="bi">Boiler Installation</a>
                      </li>
                      <li>
                        <a href="twh">Tankless Water Heaters</a>
                      </li>
                      <li>
                        <a href="rih">Radiant In-Floor Heating</a>
                      </li>
                    </ul>
                  </li>
                  <li onClick={mobileCoolingClickHandler}>
                    <p>Cooling</p>
                    <ul
                      id="sub_menu_cooling"
                      className={
                        coolingMenuOpen
                          ? "sub-menus cooling active"
                          : "sub-menus cooling"
                      }
                    >
                      <li>
                        <a href="aci">Air Conditioning Installation</a>
                      </li>
                      <li>
                        <a href="acs">Air Conditioning Service</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      <a href="/contactme"> Contact </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : isTablet ? (
        /* it is tablet*/
        <div className="wrap">
          <div className="nav">
            <div className="nav_first">
              <div className="nav_first_left">📞 (416) 720-8795</div>

              <div className="nav_first_right">
                <div className="requestservice">
                  <a href="contactme">🔨 Request Service </a>
                </div>
                <div className="getanestimate">
                  <a href="req_an_estimate">💰 Get An Estimate</a>
                </div>
              </div>
            </div>
            <div className="nav_second">
              <div className="nav_second_left logo_wrap">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
              </div>

              <div className="nav_second_right">
                <ul className="menus">
                  <li>
                    <a href="/">
                      <p>Home</p>
                    </a>
                  </li>
                  <li
                    onMouseEnter={MouseEnterHandler}
                    onMouseLeave={MouseLeaveHandler}
                  >
                    <p>Heating</p>
                    <ul
                      className={
                        heatingMenuOpen
                          ? "sub-menus heating active"
                          : "sub-menus heating"
                      }
                    >
                      <li>
                        <a href="/hfi"> Heating & Furnace Installation</a>
                      </li>
                      <li>
                        <a href="hfr">Heating & Furnace Repair</a>
                      </li>
                      <li>
                        <a href="bi">Boiler Installation</a>
                      </li>
                      <li>
                        <a href="twh">Tankless Water Heaters</a>
                      </li>
                      <li>
                        <a href="rih">Radiant In-Floor Heating</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    onMouseEnter={MouseEnterHandler}
                    onMouseLeave={MouseLeaveHandler}
                  >
                    <p>Cooling</p>
                    <ul
                      className={
                        coolingMenuOpen
                          ? "sub-menus cooling active"
                          : "sub-menus cooling"
                      }
                    >
                      <li>
                        <a href="aci">Air Conditioning Installation</a>
                      </li>
                      <li>
                        <a href="acs">Air Conditioning Service</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p>
                      <a href="/contactme"> Contact </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* it is pc */
        <div className="wrap">
          <div className="nav">
            <div className="nav_first">
              <div className="nav_first_left">📞 (416) 720-8795</div>

              <div className="nav_first_right">
                <div className="requestservice">
                  <a href="contactme">🔨 Request Service </a>
                </div>
                <div className="getanestimate">
                  <a href="req_an_estimate">💰 Get An Estimate</a>
                </div>
              </div>
            </div>
            <div className="nav_second">
              <div className="nav_second_left logo_wrap">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
              </div>

              <div className="nav_second_right">
                <ul className="menus">
                  <li>
                    <a href="/">
                      <p>Home</p>
                    </a>
                  </li>
                  <li
                    onMouseEnter={MouseEnterHandler}
                    onMouseLeave={MouseLeaveHandler}
                  >
                    <p>Heating</p>
                    <ul
                      className={
                        heatingMenuOpen
                          ? "sub-menus heating active"
                          : "sub-menus heating"
                      }
                    >
                      <li>
                        <a href="/hfi"> Heating & Furnace Installation</a>
                      </li>
                      <li>
                        <a href="hfr">Heating & Furnace Repair</a>
                      </li>
                      <li>
                        <a href="bi">Boiler Installation</a>
                      </li>
                      <li>
                        <a href="twh">Tankless Water Heaters</a>
                      </li>
                      <li>
                        <a href="rih">Radiant In-Floor Heating</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    onMouseEnter={MouseEnterHandler}
                    onMouseLeave={MouseLeaveHandler}
                  >
                    <p>Cooling</p>
                    <ul
                      className={
                        coolingMenuOpen
                          ? "sub-menus cooling active"
                          : "sub-menus cooling"
                      }
                    >
                      <li>
                        <a href="aci">Air Conditioning Installation</a>
                      </li>
                      <li>
                        <a href="acs">Air Conditioning Service</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p>
                      <a href="/contactme"> Contact </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
