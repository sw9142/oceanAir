import React, { useState, useRef } from "react";
import Nav from "../Nav/Nav";
import "./Main.css";
import hero1 from "../Images/hero1.jpg";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";

function Main() {
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(true);
  var [currentPos, setCurrentPos] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [msg, setMsg] = useState("");

  const isPC = useMediaQuery({ query: "(min-width:1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });

  const getStyle = useRef();
  const form = useRef();

  const leftClickHandler = (e) => {
    const moveLeft = -325;
    currentPos += moveLeft;
    setCurrentPos(currentPos);

    setDisableRight(false);
    if (currentPos < -650) {
      setDisableLeft(true);
      currentPos -= moveLeft;
      setCurrentPos(currentPos);
    } else {
      setDisableLeft(false);
      getStyle.current.style = "transform: translateX(" + currentPos + "px)";
    }
  };

  const rightClickHandler = (e) => {
    const moveRight = 325;

    currentPos += moveRight;
    setCurrentPos(currentPos);

    if (currentPos > 0) {
      setDisableLeft(false);
      setDisableRight(true);
      setCurrentPos(0);
    } else {
      getStyle.current.style = "transform: translateX(" + currentPos + "px)";
    }
  };

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const inquiryHandler = (e) => {
    setInquiry(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("click!");

    if (firstName === "" || email === "" || phone === "" || inquiry === "") {
      if (firstName === "") {
        setMsg("Please enter your name");
      } else if (email === "") {
        setMsg("Please enter your email");
      } else if (phone === "") {
        setMsg("Please enter your phone");
      } else {
        setMsg("Please enter your message");
      }
    } else {
      console.log("validated");
      emailjs
        .sendForm(
          "service_rkdu506",
          "template_r9u1ss4",
          form.current,
          "4oZTfmP1C0kQNsWND"
        )
        .then(
          (result) => {
            console.log("result.text: ", result.text);
            window.alert("Your Message Has Sent :)");
          },
          (error) => {
            console.log("error.text: ", error.text);
          }
        );
    }
  };

  return (
    <div className="main">
      <Nav />
      {isMobile ? (
        <div className="main_container main_container_mobile">
          <div className="blank"></div>
          <div className="section_first">
            <div className="backgroundimage"></div>
            <div className="row">
              <div className="hero-content">
                <div className="hero-title">
                  Proudly Serving GTA and Surroundings For Over{" "}
                  <span> 22 Years</span>
                </div>
                <p>
                  Our team of expert technicians is highly trained and ready to
                  offer solutions to any problems you&#8217;re currently facing.
                </p>

                <button id="requestbtn">
                  <a href="/req_an_estimate">
                    REQUEST SERVICE{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="section_third">
            <div className="wrap_contactme_contents">
              <div className="contactme_container">
                <div className="contactme_title">Contact Me</div>
                <div className="contactme_desc">
                  <p>
                    If you are experiencing an emergency, please call (416)
                    720-8795 to speak directly to the technician
                  </p>

                  <form action="" method="post" ref={form}>
                    <label for="name">
                      Your Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="fname"
                      onChange={firstNameHandler}
                    />
                    <label for="phone">
                      Your Phone <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="phone number"
                      onChange={phoneHandler}
                      name="phone"
                    />
                    <label for="email">
                      Your Email Address <span>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email address"
                      onChange={emailHandler}
                      name="email"
                    />
                    <label for="message">
                      Message <span>*</span>
                    </label>
                    <textarea
                      name="inquiry"
                      onChange={inquiryHandler}
                    ></textarea>

                    <div className="warningMsg">{msg} </div>
                    <input
                      type="submit"
                      value="SEND"
                      id="send"
                      onClick={submitHandler}
                    />
                  </form>
                </div>
              </div>
              <div className="section_third_contents">
                <div className="title">
                  Heating and A/C Repair & Maintenance
                </div>
                <div className="desc">
                  OceanAir is your HVAC hydronic specialist in greater Toronto
                  and the surrounding area. We represent the comprehensive
                  knowledge that only experiences achieve. we have earned our
                  spot as the premier provider of residential and light
                  commercial solutions. Our legacy is built on the proof of our
                  commitment to customers, long-term partnerships, and a
                  determination to evolve, improve and innovate.
                </div>

                <button id="requestbtn">
                  <a href="req_an_estimate">
                    REQUEST SERVICE{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : isTablet ? (
        <div className="main_container main_container_tablet">
          <div className="blank"></div>
          <div className="section_first">
            <div className="backgroundimage"></div>
            <div className="row">
              <div className="hero-content">
                <div className="hero-title">
                  Proudly Serving GTA and Surroundings For Over{" "}
                  <span> 22 Years</span>
                </div>
                <p>
                  Our team of expert technicians is highly trained and ready to
                  offer solutions to any problems you&#8217;re currently facing.
                </p>

                <button id="requestbtn">
                  <a href="/req_an_estimate">
                    REQUEST SERVICE{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="section_second">
            <div className="services_container">
              <button
                className="arrowleft"
                onClick={leftClickHandler}
                disabled={disableLeft}
              >
                <i className="fa-solid fa-arrow-left-long"></i>
              </button>
              <div className="services">
                <ul id="ul" ref={getStyle}>
                  <li>
                    <div className="card">
                      <div className="servicepic">
                        <img src={hero1} alt="service" />
                      </div>
                      <div className="servicecontent">
                        <div className="servicetitle">Furnace Installation</div>
                        <div className="desc">
                          OceanAir strives to maintain a legacy of superior
                          heating services and solutions.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <div className="servicepic">
                        <img src={hero1} alt="service" />
                      </div>
                      <div className="servicecontent">
                        <div className="servicetitle">A/C Installation</div>
                        <div className="desc">
                          Have you considered the installation of a home air
                          conditioning system? You’ll enjoy the Toronto summer
                          like never before.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <div className="servicepic">
                        <img src={hero1} alt="service" />
                      </div>
                      <div className="servicecontent">
                        <div className="servicetitle">Water Heaters</div>
                        <div className="desc">
                          We supply, install, rent, and service a wide array of
                          domestic hot water equipment.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <div className="servicepic">
                        <img src={hero1} alt="service" />
                      </div>
                      <div className="servicecontent">
                        <div className="servicetitle"> Boiler Installation</div>
                        <div className="desc">
                          Boilers can be used to operate and heat radiators,
                          radiant in-floor heating, air handlers and domestic
                          hot water tanks. A boiler is a highly versatile and
                          efficient heating system.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <div className="servicepic">
                        <img src="./hero1.jpg" alt="service" />
                      </div>
                      <div className="servicecontent">
                        <div className="servicetitle">
                          Radiant In-Floor Heating
                        </div>
                        <div className="desc">
                          The radiant-in-floor heating is still the most
                          comfortable way to heat a home in winter
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button
                className="arrowright"
                onClick={rightClickHandler}
                disabled={disableRight}
              >
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
          <div className="section_third">
            <div className="wrap_contactme_contents">
              <div className="contactme_container">
                <div className="contactme_title">Contact Me</div>
                <div className="contactme_desc">
                  <p>
                    If you are experiencing an emergency, please call (416)
                    720-8795 to speak directly to the technician
                  </p>

                  <form action="" method="post" ref={form}>
                    <label for="name">
                      Your Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="fname"
                      onChange={firstNameHandler}
                    />
                    <label for="phone">
                      Your Phone <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="phone number"
                      onChange={phoneHandler}
                      name="phone"
                    />
                    <label for="email">
                      Your Email Address <span>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email address"
                      onChange={emailHandler}
                      name="email"
                    />
                    <label for="message">
                      Message <span>*</span>
                    </label>
                    <textarea
                      name="inquiry"
                      onChange={inquiryHandler}
                    ></textarea>

                    <div className="warningMsg">{msg} </div>
                    <input
                      type="submit"
                      value="SEND"
                      id="send"
                      onClick={submitHandler}
                    />
                  </form>
                </div>
              </div>
              <div className="section_third_contents">
                <div className="title">
                  Heating and A/C Repair & Maintenance
                </div>
                <div className="desc">
                  OceanAir is your HVAC hydronic specialist in greater Toronto
                  and the surrounding area. We represent the comprehensive
                  knowledge that only experiences achieve. we have earned our
                  spot as the premier provider of residential and light
                  commercial solutions. Our legacy is built on the proof of our
                  commitment to customers, long-term partnerships, and a
                  determination to evolve, improve and innovate.
                </div>

                <button id="requestbtn">
                  <a href="req_an_estimate">
                    REQUEST SERVICE{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main_container main_container_pc">
          <div className="blank"></div>
          <div className="section_first">
            <div className="backgroundimage"></div>
            <div className="row">
              <div className="hero-content">
                <div className="hero-title">
                  Proudly Serving GTA and Surroundings For Over{" "}
                  <span> 22 Years</span>
                </div>
                <p>
                  Our team of expert technicians is highly trained and ready to
                  offer solutions to any problems you&#8217;re currently facing.
                </p>

                <button id="requestbtn">
                  <a href="/req_an_estimate">
                    REQUEST SERVICE
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="section_second">
            <div className="services_container">
              <button
                className="arrowleft"
                onClick={leftClickHandler}
                disabled={disableLeft}
              >
                <i className="fa-solid fa-arrow-left-long"></i>
              </button>
              <div className="services">
                <ul id="ul" ref={getStyle}>
                  <li>
                    <div className="card">
                      <div className="servicepic">
                        <img src={hero1} alt="service" />
                      </div>
                      <div className="servicecontent">
                        <div className="servicetitle">Furnace Installation</div>
                        <div className="desc">
                          OceanAir strives to maintain a legacy of superior
                          heating services and solutions.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <div className="servicepic">
                        <img src={hero1} alt="service" />
                      </div>
                      <div className="servicecontent">
                        <div className="servicetitle">A/C Installation</div>
                        <div className="desc">
                          Have you considered the installation of a home air
                          conditioning system? You’ll enjoy the Toronto summer
                          like never before.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <div className="servicepic">
                        <img src={hero1} alt="service" />
                      </div>
                      <div className="servicecontent">
                        <div className="servicetitle">Water Heaters</div>
                        <div className="desc">
                          We supply, install, rent, and service a wide array of
                          domestic hot water equipment.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <div className="servicepic">
                        <img src={hero1} alt="service" />
                      </div>
                      <div className="servicecontent">
                        <div className="servicetitle"> Boiler Installation</div>
                        <div className="desc">
                          Boilers can be used to operate and heat radiators,
                          radiant in-floor heating, air handlers and domestic
                          hot water tanks. A boiler is a highly versatile and
                          efficient heating system.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <div className="servicepic">
                        <img src="./hero1.jpg" alt="service" />
                      </div>
                      <div className="servicecontent">
                        <div className="servicetitle">
                          Radiant In-Floor Heating
                        </div>
                        <div className="desc">
                          The radiant-in-floor heating is still the most
                          comfortable way to heat a home in winter
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button
                className="arrowright"
                onClick={rightClickHandler}
                disabled={disableRight}
              >
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
          <div className="section_third">
            <div className="wrap_contactme_contents">
              <div className="contactme_container">
                <div className="contactme_title">Contact Me</div>
                <div className="contactme_desc">
                  <p>
                    If you are experiencing an emergency, please call (416)
                    720-8795 to speak directly to the technician
                  </p>

                  <form action="" method="post" ref={form}>
                    <label for="name">
                      Your Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="fname"
                      onChange={firstNameHandler}
                    />
                    <label for="phone">
                      Your Phone <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="phone number"
                      onChange={phoneHandler}
                      name="phone"
                    />
                    <label for="email">
                      Your Email Address <span>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email address"
                      onChange={emailHandler}
                      name="email"
                    />
                    <label for="message">
                      Message <span>*</span>
                    </label>
                    <textarea
                      name="inquiry"
                      onChange={inquiryHandler}
                    ></textarea>

                    <div className="warningMsg">{msg} </div>
                    <input
                      type="submit"
                      value="SEND"
                      id="send"
                      onClick={submitHandler}
                    />
                  </form>
                </div>
              </div>
              <div className="section_third_contents">
                <div className="title">
                  Heating and A/C Repair & Maintenance
                </div>
                <div className="desc">
                  OceanAir is your HVAC hydronic specialist in greater Toronto
                  and the surrounding area. We represent the comprehensive
                  knowledge that only experiences achieve. we have earned our
                  spot as the premier provider of residential and light
                  commercial solutions. Our legacy is built on the proof of our
                  commitment to customers, long-term partnerships, and a
                  determination to evolve, improve and innovate.
                </div>

                <button id="requestbtn">
                  <a href="req_an_estimate">
                    REQUEST SERVICE
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="section_fourth">
        <Review />
      </div>

      <div className="section_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
