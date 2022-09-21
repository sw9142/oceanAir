import React, { useState, useRef } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Review from "../Review/Review";
import "./ReqAnEstimate.css";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";

function ReqAnEstimate() {
  const form = useRef();

  const isPC = useMediaQuery({ query: "(min-width:1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hdh, setHdh] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [msg, setMsg] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const streetHandler = (e) => {
    setStreet(e.target.value);
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const provinceHandler = (e) => {
    setProvince(e.target.value);
  };

  const postalCodeHandler = (e) => {
    setPostal(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const hdhHandler = (e) => {
    setHdh(e.target.value);
  };

  const inquiryHandler = (e) => {
    setInquiry(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("click!");

    if (firstName === "" || lastName === "" || email === "" || phone === "") {
      if (firstName === "" || lastName === "") {
        setMsg("Please enter your name");
      } else if (email === "") {
        setMsg("Please enter your email");
      } else if (phone === "") {
        setMsg("Please enter your phone");
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
    <div>
      <Nav />
      {isMobile ? (
        <div className="req_an_estimate req_an_estimate_container_mobile">
          <section className="page-header">
            <div className="container">
              <div className="text-center">Get An Estimate</div>
            </div>
          </section>
          <section className="page-content">
            <div className="page-content-section-first">
              <div className="h1">Get An HVAC Estimate</div>
              <div className="row">
                <div className="col">
                  <div className="h3">
                    <i className="fas fa-map-marker-alt accent"></i>
                    <span>Address</span>
                  </div>
                  <p className="details">
                    123 Abc Street, <br />
                    Richmond Hill, ON M3M 2R9
                  </p>
                </div>
                <div className="col">
                  <div className="h3">
                    <i className="fa-regular fa-clock"></i>
                    <span>Business Hours</span>
                  </div>
                  <p className="details">
                    Monday-Friday: 8:30am-4:30pm <br />
                    Saturday-Sunday: Emergency Service Only
                  </p>
                </div>
                <div className="col">
                  <div className="h3">
                    <i className="fas fa-mobile-alt accent"></i>
                    <span>Give me a call</span>
                  </div>
                  <p className="details">(416) 720-8795</p>
                </div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="page-content-section-second">
              <div className="h1">Schedule an Appointment</div>
              <div className="h3">
                <p className="details">
                  If you are experiencing an emergency, no heat or no hot water,
                  situation please call (416) 720-8795 to speak directly to our
                  emergency service.
                </p>
              </div>
              <div className="schedule-form">
                <form action="/contact-form" ref={form} method="post">
                  <label for="fname">
                    Name <span>*</span>
                  </label>
                  <div className="name">
                    <input
                      type="text"
                      placeholder="First"
                      className="fname"
                      name="fname"
                      onChange={firstNameHandler}
                    />
                    <input
                      type="text"
                      placeholder="Last"
                      className="lname"
                      name="lname"
                      onChange={lastNameHandler}
                    />
                  </div>
                  <br />
                  <label for="address">Address</label>
                  <input
                    type="text"
                    placeholder="Street"
                    id="street"
                    name="street"
                    onChange={streetHandler}
                  />
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    name="address"
                    id="address"
                    onChange={addressHandler}
                  />
                  <div className="city-state">
                    <input
                      type="text"
                      placeholder="City"
                      onChange={cityHandler}
                      id="city"
                      name="city"
                    />
                    <input
                      type="text"
                      placeholder="State / Province"
                      className="state"
                      name="province"
                      id="province"
                      onChange={provinceHandler}
                    />
                  </div>
                  <div className="zip-country">
                    <input
                      type="text"
                      onChange={postalCodeHandler}
                      placeholder="ZIP/ Postal Code"
                      className="zip"
                      id="postal"
                      name="postal"
                    />
                  </div>
                  <br />
                  <label for="email">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={emailHandler}
                    placeholder="Email"
                    name="email"
                  />
                  <br />
                  <label for="phone">
                    Phone <span>*</span>
                  </label>
                  <input
                    type="phone"
                    className="phone"
                    id="phone"
                    name="phone"
                    onChange={phoneHandler}
                    placeholder="Phone"
                  />
                  <br />
                  <label for="hdh">How Did You Hear About Us?</label>
                  <textarea
                    rows="3"
                    className="hdh"
                    id="hdh"
                    name="hdh"
                    onChange={hdhHandler}
                  ></textarea>
                  <br />
                  <label for="inquiry">How Can We Help You?</label>
                  <textarea
                    rows="10"
                    className="inquiry"
                    id="inquiry"
                    name="inquiry"
                    onChange={inquiryHandler}
                  ></textarea>

                  <div className="warningMsg">{msg} </div>
                  <input
                    type="submit"
                    value="Submit"
                    id="submit"
                    onClick={submitHandler}
                  />
                </form>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="req_an_estimate">
          <section className="page-header">
            <div className="container">
              <div className="text-center">Get An Estimate</div>
            </div>
          </section>
          <section className="page-content">
            <div className="page-content-section-first">
              <div className="h1">Get An HVAC Estimate</div>
              <div className="row">
                <div className="col">
                  <div className="h3">
                    <i className="fas fa-map-marker-alt accent"></i>
                    <span>Address</span>
                  </div>
                  <p className="details">
                    123 Abc Street, <br />
                    Richmond Hill, ON M3M 2R9
                  </p>
                </div>
                <div className="col">
                  <div className="h3">
                    <i className="fa-regular fa-clock"></i>
                    <span>Business Hours</span>
                  </div>
                  <p className="details">
                    Monday-Friday: 8:30am-4:30pm <br />
                    Saturday-Sunday: Emergency Service Only
                  </p>
                </div>
                <div className="col">
                  <div className="h3">
                    <i className="fas fa-mobile-alt accent"></i>
                    <span>Give me a call</span>
                  </div>
                  <p className="details">(416) 720-8795</p>
                </div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="page-content-section-second">
              <div className="h1">Schedule an Appointment</div>
              <div className="h3">
                <p className="details">
                  If you are experiencing an emergency, no heat or no hot water,
                  situation please call (416) 720-8795 to speak directly to our
                  emergency service.
                </p>
              </div>
              <div className="schedule-form">
                <form action="/contact-form" ref={form} method="post">
                  <label for="fname">
                    Name <span>*</span>
                  </label>
                  <div className="name">
                    <input
                      type="text"
                      placeholder="First"
                      className="fname"
                      name="fname"
                      onChange={firstNameHandler}
                    />
                    <input
                      type="text"
                      placeholder="Last"
                      className="lname"
                      name="lname"
                      onChange={lastNameHandler}
                    />
                  </div>
                  <br />
                  <label for="address">Address</label>
                  <input
                    type="text"
                    placeholder="Street"
                    id="street"
                    name="street"
                    onChange={streetHandler}
                  />
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    name="address"
                    id="address"
                    onChange={addressHandler}
                  />
                  <div className="city-state">
                    <input
                      type="text"
                      placeholder="City"
                      onChange={cityHandler}
                      id="city"
                      name="city"
                    />
                    <input
                      type="text"
                      placeholder="State / Province"
                      className="state"
                      name="province"
                      id="province"
                      onChange={provinceHandler}
                    />
                  </div>
                  <div className="zip-country">
                    <input
                      type="text"
                      onChange={postalCodeHandler}
                      placeholder="ZIP/ Postal Code"
                      className="zip"
                      id="postal"
                      name="postal"
                    />
                  </div>
                  <br />
                  <label for="email">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={emailHandler}
                    placeholder="Email"
                    name="email"
                  />
                  <br />
                  <label for="phone">
                    Phone <span>*</span>
                  </label>
                  <input
                    type="phone"
                    className="phone"
                    id="phone"
                    name="phone"
                    onChange={phoneHandler}
                    placeholder="Phone"
                  />
                  <br />
                  <label for="hdh">How Did You Hear About Us?</label>
                  <textarea
                    rows="3"
                    className="hdh"
                    id="hdh"
                    name="hdh"
                    onChange={hdhHandler}
                  ></textarea>
                  <br />
                  <label for="inquiry">How Can We Help You?</label>
                  <textarea
                    rows="10"
                    className="inquiry"
                    id="inquiry"
                    name="inquiry"
                    onChange={inquiryHandler}
                  ></textarea>

                  <div className="warningMsg">{msg} </div>
                  <input
                    type="submit"
                    value="Submit"
                    id="submit"
                    onClick={submitHandler}
                  />
                </form>
              </div>
            </div>
          </section>
        </div>
      )}

      <div className="container_reviews">
        <Review />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default ReqAnEstimate;
