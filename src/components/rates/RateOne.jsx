import React from "react";

const rateIcon1 = "/home_2/acc-1.png";
const rateIcon2 = "/home_2/acc-2.png";
const rateIcon3 = "/home_2/acc-3.png";
const rateIcon4 = "/home_2/acc-4.png";
const rateIcon5 = "/home_2/acc-5.png";
const rateIcon6 = "/home_2/acc-6.png";

export const RateOne = () => {
  return (
    <section
      className="td_accent_bg td_rate_section wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.2s"
    >
      <div className="td_rate_heading td_fs_20 td_semibold td_white_color">
        School Accredation
        <div className="td_rating_wrap">
          <div className="td_rating" data-rating="5">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <div className="td_rating_percentage">
              <i className="fa-solid fa-star fa-fw"></i>
              <i className="fa-solid fa-star fa-fw"></i>
              <i className="fa-solid fa-star fa-fw"></i>
              <i className="fa-solid fa-star fa-fw"></i>
              <i className="fa-solid fa-star fa-fw"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="td_rate_feature_list_wrap" style={{ overflowY: "auto" }}>
        <div className="td_moving_box_wrap">
          <div className="td_moving_box_in">
            <div className="td_moving_box">
              <ul className="td_rate_feature_list td_mp_0">
                <li>
                  <div className="td_rate_feature_icon td_center">
                    <img src={rateIcon1} alt="Online Courses Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                     Cambridge Early Years Centre
                    </h3>
                   {/*<p className="mb-0 td_white_color td_opacity_7">
                      Solid Questions Solving & Fresh Topics
                    </p> */}
                  </div>
                </li>


                <li>
                  <div className="td_rate_feature_icon td_center ">
                    <img src={rateIcon3} alt="Lifetime Access Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                     Ministry of Education
                    </h3>
                    
                  </div>
                </li>

                <li>
                  <div className="td_rate_feature_icon td_center ">
                    <img src={rateIcon4} alt="Certificate Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                     UCAS Registered Centre
                    </h3>
                    
                  </div>
                </li>

                 <li>
                  <div className="td_rate_feature_icon td_center ">
                    <img src={rateIcon6} alt="Certificate Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      SAT College Board
                    </h3>
                    
                  </div>
                </li>
                
                <li>
                  <div className="td_rate_feature_icon td_center ">
                    <img src={rateIcon2} alt="Expert Instructor Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                    Cambridge International Education
                    </h3>
                    
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center ">
                    <img src={rateIcon5} alt="Certificate Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                     Oxford Admission Test Centre
                    </h3>
                    
                  </div>
                </li>
              </ul>
            </div>

         {/*    <div className="td_moving_box">
              <ul className="td_rate_feature_list td_mp_0">
                
                <li>
                  <div className="td_rate_feature_icon td_center ">
                    <img src={rateIcon1} alt="Online Courses Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                     Cambridge Early Years Centre
                    </h3>
                    
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center ">
                    <img src={rateIcon1} alt="Online Courses Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                     Cambridge International Education
                    </h3>
                    
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center ">
                    <img src={rateIcon1} alt="Online Courses Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                     Ministry of Education
                    </h3>
                    
                  </div>
                </li>
                
                
                <li>
                  <div className="td_rate_feature_icon td_center ">
                    <img src={rateIcon1} alt="Online Courses Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                     SAT College Board
                    </h3>
                    
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center ">
                    <img src={rateIcon2} alt="Expert Instructor Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      Authorised Open Centre for Oxford Admission Tests
                    </h3>
                    
                  </div>
                </li>
                
                
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <div className="td_height_112 td_height_lg_75" />
    </section>
  );
};
