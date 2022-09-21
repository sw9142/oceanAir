import React, { useState, useRef, useEffect } from "react";
import "./Review.css";
import Axios from "axios";
import { useMediaQuery } from "react-responsive";

function Review() {
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(true);
  var [currentPos, setCurrentPos] = useState(0);

  const isPC = useMediaQuery({ query: "(min-width:1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });

  // const retrieveReviews = (e) => {
  //   Axios.get("https://mybusiness.googleapis.com/v4/accounts/oceanair199")
  //     .then((res) => {
  //       if (res) {
  //         console.log("res.data: ", res.data);
  //       }
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         console.log("err ");
  //       }
  //     });
  // };

  // useEffect(() => {
  //   retrieveReviews();
  //   return () => {};
  // }, []);

  const getStyle = useRef();
  const leftClickHandler = (e) => {
    console.log("currentPos: ", currentPos);
    const moveLeft = -430;
    currentPos += moveLeft;
    setCurrentPos(currentPos);
    setDisableRight(false);

    if (currentPos < -1290) {
      setDisableLeft(true);
      currentPos -= moveLeft;
      setCurrentPos(currentPos);
    } else {
      setDisableLeft(false);
      getStyle.current.style = "transform: translateX(" + currentPos + "px)";
    }
  };

  const rightClickHandler = (e) => {
    const moveRight = 430;

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
  return (
    <>
      {" "}
      {isMobile ? (
        <div className="review_container_mobile">
          <div className="review_title">
            Expert Heating & Cooling Service You Can Trust In Toronto
          </div>
          <div className="review_desc">
            When you connect with OceanAir at (416) 720-8795, you’re in very
            capable hands. We alleviate the stress of everyday challenges as
            well as unexpected concerns by putting our depth of resources,
            background, and skills to task for you. Expect a swift, streamlined
            and satisfying process and outcome. Take confidence in clear
            explanations, proficiency in all makes and models, and 24-hour
            emergency service across Toronto, ON.
            <a href="/req_an_estimate">
              <div id="getanestimatebtn">
                <a href="req_an_estimate">
                  GET AN ESTIMATE{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </a>
          </div>

          {/* <div className="reviewbox">
            <button
              className="review_arrow_left"
              onClick={leftClickHandler}
              disabled={disableLeft}
            >
              <i
                className="fa-solid fa-circle-arrow-left"
                id={disableLeft ? "review_disabled_btn" : ""}
              ></i>
            </button>
            <div className="reviews">
              <ul id="ul" ref={getStyle}>
                <li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="reviewcomment">
                    Keivan and his team are exceptionally professional! Needed
                    an A/C installed and they did it in a very timely manner.
                    Very professional clean work with a well working A/C system.
                    Keivan was always very helpful and always had prompt service
                    calls. He even helped in things unrelated to the A/C unit.
                    Highly recommend him and his team! If you want comfort of
                    mind this team is very well trusted and will provide
                    excellent work and service!
                  </div>
                  <div className="reviewer">Hussain Al-Abedy</div>
                </li>
                <li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="reviewcomment">
                    I highly recommend Keivan & his team from Ocean Air Heating
                    & Cooling air . Very professional & reliable. They knew what
                    was the issue, fixed it with no fuss and most importantly it
                    didn’t even cost me a arm and a leg. Will definitely be
                    using them again in the future ! Thank you so much. Nick
                  </div>
                  <div className="reviewer">Nik nik Das</div>
                </li>
                <li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="reviewcomment">
                    Keivan is not only professional and provided us with high
                    quality service installation, he is the nicest and most
                    respectful guy we have come across in this field. We’re very
                    happy and plan on continuing to do business with him.
                  </div>
                  <div className="reviewer">memento mori</div>
                </li>
                <li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="reviewcomment">
                    Only good things can be said about Ocean Air Heating and
                    Cooling. I had such a great impression with a response I
                    received from the initial phone inquiry and decided to
                    choose Ocean Air Heating and Cooling to fix our home heating
                    system. Our heating system had a malfunction and there was
                    no heat or hot water. The technician came on time as
                    planned, diagnosed and identified the problem and made the
                    appropriate suggestions. The technician was so knowledgeable
                    with the system and he was so patient with us so I and my
                    partner could have some time to think and decide what to do
                    within our budge planned for the repair. Everything was
                    handled so well and we are grateful to have found someone so
                    honest and professional. I would recommend 100%! Thank you.
                  </div>
                  <div className="reviewer">Ji Youn Chae</div>
                </li>
                <li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="reviewcomment">
                    Highly recommended Keivan & his team. Very professional &
                    reliable. They did a very clean job for us & we will
                    definitely be using them again in the future ! Thank you so
                    much
                  </div>
                  <div className="reviewer">helen samimy</div>
                </li>
              </ul>
            </div>
            <button className="review_arrow_right" onClick={rightClickHandler}>
              <i
                className="fa-solid fa-circle-arrow-right"
                id={disableRight ? "review_disabled_btn" : ""}
              ></i>
            </button>
          </div> */}

          {/* <button id="leaveareview">
            <a href="https://www.google.com/search?q=ocean+air+heating+and+air+cooling+inc&oq=oce&aqs=chrome.0.69i59j69i57j69i59j46i175i199i512j0i512j69i60l3.9393j0j7&sourceid=chrome&ie=UTF-8#lrd=0x882ad5feedecab6d:0xc712dee5a2418558,3,,,">
              LEAVE A REVIEW <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </button> */}
        </div>
      ) : (
        <div className="review_container">
          <div className="review_title">
            Expert Heating & Cooling Service You Can Trust In Toronto
          </div>
          <div className="review_desc">
            When you connect with OceanAir at (416) 720-8795, you’re in very
            capable hands. We alleviate the stress of everyday challenges as
            well as unexpected concerns by putting our depth of resources,
            background, and skills to task for you. Expect a swift, streamlined
            and satisfying process and outcome. Take confidence in clear
            explanations, proficiency in all makes and models, and 24-hour
            emergency service across Toronto, ON.
            <a href="/req_an_estimate">
              <div id="getanestimatebtn">
                <a href="req_an_estimate">
                  GET AN ESTIMATE{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </a>
          </div>

          <div className="reviewbox">
            <button
              className="review_arrow_left"
              onClick={leftClickHandler}
              disabled={disableLeft}
            >
              <i
                className="fa-solid fa-circle-arrow-left"
                id={disableLeft ? "review_disabled_btn" : ""}
              ></i>
            </button>
            <div className="reviews">
              <ul id="ul" ref={getStyle}>
                <li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="reviewcomment">
                    Keivan and his team are exceptionally professional! Needed
                    an A/C installed and they did it in a very timely manner.
                    Very professional clean work with a well working A/C system.
                    Keivan was always very helpful and always had prompt service
                    calls. He even helped in things unrelated to the A/C unit.
                    Highly recommend him and his team! If you want comfort of
                    mind this team is very well trusted and will provide
                    excellent work and service!
                  </div>
                  <div className="reviewer">Hussain Al-Abedy</div>
                </li>
                <li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="reviewcomment">
                    I highly recommend Keivan & his team from Ocean Air Heating
                    & Cooling air . Very professional & reliable. They knew what
                    was the issue, fixed it with no fuss and most importantly it
                    didn’t even cost me a arm and a leg. Will definitely be
                    using them again in the future ! Thank you so much. Nick
                  </div>
                  <div className="reviewer">Nik nik Das</div>
                </li>
                <li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="reviewcomment">
                    Keivan is not only professional and provided us with high
                    quality service installation, he is the nicest and most
                    respectful guy we have come across in this field. We’re very
                    happy and plan on continuing to do business with him.
                  </div>
                  <div className="reviewer">memento mori</div>
                </li>
                <li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="reviewcomment">
                    Only good things can be said about Ocean Air Heating and
                    Cooling. I had such a great impression with a response I
                    received from the initial phone inquiry and decided to
                    choose Ocean Air Heating and Cooling to fix our home heating
                    system. Our heating system had a malfunction and there was
                    no heat or hot water. The technician came on time as
                    planned, diagnosed and identified the problem and made the
                    appropriate suggestions. The technician was so knowledgeable
                    with the system and he was so patient with us so I and my
                    partner could have some time to think and decide what to do
                    within our budge planned for the repair. Everything was
                    handled so well and we are grateful to have found someone so
                    honest and professional. I would recommend 100%! Thank you.
                  </div>
                  <div className="reviewer">Ji Youn Chae</div>
                </li>
                <li>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="reviewcomment">
                    Highly recommended Keivan & his team. Very professional &
                    reliable. They did a very clean job for us & we will
                    definitely be using them again in the future ! Thank you so
                    much
                  </div>
                  <div className="reviewer">helen samimy</div>
                </li>
              </ul>
            </div>
            <button className="review_arrow_right" onClick={rightClickHandler}>
              <i
                className="fa-solid fa-circle-arrow-right"
                id={disableRight ? "review_disabled_btn" : ""}
              ></i>
            </button>
          </div>

          <button id="leaveareview">
            <a href="https://www.google.com/search?q=ocean+air+heating+and+air+cooling+inc&oq=oce&aqs=chrome.0.69i59j69i57j69i59j46i175i199i512j0i512j69i60l3.9393j0j7&sourceid=chrome&ie=UTF-8#lrd=0x882ad5feedecab6d:0xc712dee5a2418558,3,,,">
              LEAVE A REVIEW <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </button>
        </div>
      )}
    </>
  );
}

export default Review;
