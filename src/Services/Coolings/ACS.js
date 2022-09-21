import React from "react";
import Nav from "../../Nav/Nav";
import "./ACS.css";
import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";

import { useMediaQuery } from "react-responsive";

function ACS() {
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
        <div className="acs_mobile">
          <div className="section_first_acs">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">Reliable AC Services in the GTA</h2>
                  <p>
                    At OceanAir. Heating, Cooling & Electrical, our experience
                    makes all the difference. We’ve serviced every make, model,
                    and type of cooling system, and we know what works. There
                    are no surprises and no question of our capabilities. We’ve
                    proven our worth again and again, year after year. Our
                    maintenance strategies are the culmination of 114 years of
                    innovation, determination, and successful outcomes across
                    greater Toronto and the surrounding area.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_acs">
            <div className="container">
              <div className="second_acs_1">
                <p>
                  While you can choose any number of contractors to handle the
                  upkeep of your essential cooling system, the workmanship
                  provided and results vary greatly. When you call (416)
                  720-8795 for a convenient appointment time, you can be sure of
                  maximum return from your investment. Our team follows exacting
                  protocols to optimize system performance, efficiency,
                  reliability, and longevity. We make sure every component is
                  working at its best, pinpoint any concerns, and keep you
                  informed. In other words, we do everything right and you’ll
                  save money and be more comfortable because of it.
                </p>
              </div>
              <div className="second_acs_2">
                <h3 className="h3">Annual A/C Service Save on Energy Costs</h3>
                <p>
                  Your equipment needs seasonal tune-ups in order to continue to
                  work properly. If neglected, wear and tear and dirt build-up
                  will eventually lead to patchy cooling, system failure, and
                  possibly even safety issues. For your continued comfort and
                  good health, schedule a service plan with Belyea Bros.
                  Heating, Cooling & Electrical. Our courteous staff is standing
                  by to answer your call. We are a family-owned and operated
                  company, keeping your best interests as our focus since 1908.
                  The lasting reliability of your air conditioning equipment is
                  in good hands when you trust Belyea Bros. Heating, Cooling &
                  Electrical with your seasonal service needs.
                </p>
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="section_fourth_acs">
            <Review />
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="acs_pc">
          <div className="section_first_acs">
            <div className="container_section_first">
              <div className="section_first_left">
                <div className="container">
                  <h2 className="h2">Reliable AC Services in the GTA</h2>
                  <p>
                    At OceanAir. Heating, Cooling & Electrical, our experience
                    makes all the difference. We’ve serviced every make, model,
                    and type of cooling system, and we know what works. There
                    are no surprises and no question of our capabilities. We’ve
                    proven our worth again and again, year after year. Our
                    maintenance strategies are the culmination of 114 years of
                    innovation, determination, and successful outcomes across
                    greater Toronto and the surrounding area.
                  </p>
                </div>
              </div>
              <div className="section_first_pic"></div>
            </div>
          </div>
          <div className="section_second_acs">
            <div className="container">
              <div className="second_acs_1">
                <p>
                  While you can choose any number of contractors to handle the
                  upkeep of your essential cooling system, the workmanship
                  provided and results vary greatly. When you call (416)
                  720-8795 for a convenient appointment time, you can be sure of
                  maximum return from your investment. Our team follows exacting
                  protocols to optimize system performance, efficiency,
                  reliability, and longevity. We make sure every component is
                  working at its best, pinpoint any concerns, and keep you
                  informed. In other words, we do everything right and you’ll
                  save money and be more comfortable because of it.
                </p>
              </div>
              <div className="second_acs_2">
                <h3 className="h3">Annual A/C Service Save on Energy Costs</h3>
                <p>
                  Your equipment needs seasonal tune-ups in order to continue to
                  work properly. If neglected, wear and tear and dirt build-up
                  will eventually lead to patchy cooling, system failure, and
                  possibly even safety issues. For your continued comfort and
                  good health, schedule a service plan with Belyea Bros.
                  Heating, Cooling & Electrical. Our courteous staff is standing
                  by to answer your call. We are a family-owned and operated
                  company, keeping your best interests as our focus since 1908.
                  The lasting reliability of your air conditioning equipment is
                  in good hands when you trust Belyea Bros. Heating, Cooling &
                  Electrical with your seasonal service needs.
                </p>
                <a href="/req_an_estimate" role="link" alt="getanestimate">
                  <button class="btn btn-req-estimate" type="button">
                    Request An Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="section_fourth_acs">
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

export default ACS;
