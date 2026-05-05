"use client";

import React from "react";
import { useAccordion } from "../../lib/hooks/useAccordion";
import { useHobble } from "../../lib/hooks/useHobble";

const faqShape5 = "/home_4/faq_shape_5.svg";
const faqShape1 = "/home_4/faq_shape_1.svg";
const faqShape2 = "/home_4/faq_shape_2.svg";
const testimonialImg1 = "/home_5/testimonial_img_1.png";
const pol3 = "/home_1/pol3.jpg";
const busp = "/home_1/policy/bus-policy.pdf";
const unifomp = "/home_1/policy/unifom-policy.pdf";
const scoc = "/home_1/policy/Student-Code-of-Conduct.pdf";
const sawr = "/home_1/policy/Student-Annual-Award-Rubric.pdf";
const policys = "/home_1/policy/policy-statement.pdf";
const leavep = "/home_1/policy/leave-policy.pdf";
const sspolicy = "/home_1/policy/ss-policy.pdf";
const mspolicy = "/home_1/policy/ms-policy.pdf";
const jspolicy = "/home_1/policy/js-policy.pdf";

export const PisjesPolicies = () => {
  useAccordion();
  useHobble();

  return (
    <div className="td_shape_section_4 td_hobble">
      <div className="td_shape td_shape_position_5 td_hover_layer_3">
        <img src={faqShape5} alt="FAQ Shape" />
      </div>
      <div className="td_shape td_shape_position_6 td_hover_layer_5">
        <img src={faqShape5} alt="FAQ Shape" />
      </div>
      <div className="td_shape td_shape_position_7 td_hover_layer_3">
        <img src={faqShape1} alt="FAQ Shape" />
      </div>
      <div className="td_shape td_shape_position_8 td_hover_layer_5">
        <img src={faqShape2} alt="FAQ Shape" />
      </div>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-xl-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_section_heading td_style_1">
              <p className="td_section_subtitle_up_2 td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_6">
                Please check the following links for the policies:
              </p>
              <h2 className="td_section_title td_fs_48 mb-0">
               
              </h2>
            </div>
            <div className="td_height_50 td_height_lg_50" />
            <div className="td_accordians td_style_1 td_color_1 td_type_1">
              <div className="td_accordian active">
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                    Student Code of Conduct
                  </h2>
                  <span className="td_accordian_toggle">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.355 9L7 3.43725L1.645 9L0 7.28745L7 -9.53674e-07L14 7.28745L12.355 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="td_accordian_body">
                  <p>
                    <u><a href="/home_1/policy/Student-Code-of-Conduct.pdf">Student Code of Conduct</a></u>
                  </p>
                </div>
              </div>

              <div className="td_accordian">
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                   Uniform Policy
                  </h2>
                  <span className="td_accordian_toggle">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.355 9L7 3.43725L1.645 9L0 7.28745L7 -9.53674e-07L14 7.28745L12.355 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="td_accordian_body">
                  <p>
                     <u><a href="/home_1/policy/unifom-policy.pdf">  Uniform Policy</a></u>
                  </p>
                </div>
              </div>

              <div className="td_accordian">
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                    Leave Policy
                  </h2>
                  <span className="td_accordian_toggle">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.355 9L7 3.43725L1.645 9L0 7.28745L7 -9.53674e-07L14 7.28745L12.355 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="td_accordian_body">
                  <p>
                    <u><a href="/home_1/policy/leave-policy.pdf">   Leave Policy</a></u>
                  </p>
                </div>
              </div>

              <div className="td_accordian">

                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                  Bus Transport Policy
                  </h2>
                  <span className="td_accordian_toggle">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.355 9L7 3.43725L1.645 9L0 7.28745L7 -9.53674e-07L14 7.28745L12.355 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="td_accordian_body">
                  <p>
                   <u><a href="/home_1/policy/bus-policy.pdf">Bus Transport Policy</a></u> 
                  </p>
                </div>
              </div> 
               <div className="td_accordian">
                
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                 Student Award Rubric
                  </h2>
                  <span className="td_accordian_toggle">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.355 9L7 3.43725L1.645 9L0 7.28745L7 -9.53674e-07L14 7.28745L12.355 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="td_accordian_body">
                  <p>
                   <u><a href="/home_1/policy/Student-Annual-Award-Rubric.pdf">Student Award Rubric</a></u> 
                  </p>
                </div>
              </div>
                <div className="td_accordian">
                
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                Policy Statement
                  </h2>
                  <span className="td_accordian_toggle">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.355 9L7 3.43725L1.645 9L0 7.28745L7 -9.53674e-07L14 7.28745L12.355 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="td_accordian_body">
                  <p>
                   <u><a href="/home_1/policy/policy-statement.pdf">Policy Statement</a></u> 
                  </p>
                </div>
              </div>

               <div className="td_accordian">
                
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
              Junior School Academic Policy
                  </h2>
                  <span className="td_accordian_toggle">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.355 9L7 3.43725L1.645 9L0 7.28745L7 -9.53674e-07L14 7.28745L12.355 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="td_accordian_body">
                  <p>
                   <u><a href="/home_1/policy/js-policy.pdf">Junior School Academic Policy</a></u> 
                  </p>
                </div>
              </div>

               <div className="td_accordian">
                
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
              Middle School Academic Policy
                  </h2>
                  <span className="td_accordian_toggle">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.355 9L7 3.43725L1.645 9L0 7.28745L7 -9.53674e-07L14 7.28745L12.355 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="td_accordian_body">
                  <p>
                   <u><a href="/home_1/policy/ms-policy.pdf">Middle School Academic Policy</a></u> 
                  </p>
                </div>
              </div>
               <div className="td_accordian">
                
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
              Senior School Academic Policy
                  </h2>
                  <span className="td_accordian_toggle">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.355 9L7 3.43725L1.645 9L0 7.28745L7 -9.53674e-07L14 7.28745L12.355 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="td_accordian_body">
                  <p>
                   <u><a href="/home_1/policy/ss-policy.pdf">Senior School Academic Policy</a></u> 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_image_box td_style_10">
              <img src={pol3} alt="Testimonial" />
              
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </div>
  );
};
