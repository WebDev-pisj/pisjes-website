"use client";

import React from "react";
import { useAccordion } from "../../lib/hooks/useAccordion";
import { useHobble } from "../../lib/hooks/useHobble";

const faqShape5 = "/home_4/faq_shape_5.svg";
const faqShape1 = "/home_4/faq_shape_1.svg";
const faqShape2 = "/home_4/faq_shape_2.svg";
const testimonialImg1 = "/home_5/testimonial_img_1.png";

export const PisjesDuesClear = () => {
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
              
              <h2 className="td_section_title td_fs_48 mb-0">
                Clearance of Dues
              </h2>
            </div>
            <div className="td_height_50 td_height_lg_50" />
            <div className="td_accordians td_style_1 td_color_1 td_type_1">
              <div className="td_accordian active">
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                   Withdrawal / SLC 
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
                    1) In case the SLC is applied during the Mid of the session, He/she will be charged till the Month the Student has attended the school.<br/>
2) In case the SLC is applied after receiving the final result card, He/she will be charged till the end of the complete session.<br/>
3) In case the student has attended classes for one (Single day) or two days of the month, he/she will be charged for the entire month.<br/>
4) In case the SLC is applied late (after 2 weeks or a month), the student will be charged till the Month he attended classes.<br/>
5) Security Deposit will be withheld in case of non-collection till 6months of SLC issuance.<br/>
6) If withdrawal notice is received after the beginning of the new term, previous term’s complete dues will be charged to obtain clearance.<br/>
                  </p>
                </div>
              </div>

              <div className="td_accordian">
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                    No Show
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
                    In case the SLC is applied long after the child has left the school (e.g. after one year or so), Security Deposit will be forfeited in case student leaves the school without proper withdrawal notice.
                  </p>
                </div>
              </div>

              <div className="td_accordian">
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                    SLC Cancellation
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
                   In case the request for cancellation of SLC is placed after issuance of SLC, complete admission charges as that of new admission under new student ID will be charged. The student will be enrolled after going through the complete admission (test/interview) procedure, however, the resumption will be subject to the availability of seats/session.
                  </p>
                </div>
              </div>

              <div className="td_accordian">
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                    Admission in Mid-Session (Walk-in)
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
                   1) If a child is admitted during the mid of the session, his/her fee would be charged from the month of Form Submission. <br/>
2) If a child gets admission (form submission) after 25th of any month, his/her fee will be charged from following month, as it takes at least three days to enroll his/her name in the class list.<br/>
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
             <div class="td_height_50 td_height_lg_50"></div>
            <div className="td_accordians td_style_1 td_color_1 td_type_1">
              <div className="td_accordian active">
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                   Re-enrollment in Mid-Session
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
                  Fee defaulter: <br/> If a removed fee defaulter student resumes/re-enrolls, the parent has to first clear all the pending dues, pay SR 500/- as re-enrollment under the same student ID.<br/>
Complete clearance of outstanding dues till June of every year against the Parent ID is a prerequisite for continued School enrolment in next academic session.<br/>
No Show/Leave: <br/>
If a no-show (more than 30days absence/unapproved leave) intends to resume after being removed from the system, admission policy will be implied, i.e., The student will be enrolled after going through the complete admission (test/interview) procedure, however, the resumption will be subject to the availability of seats/session.   </p>
        <br/>        </div>
              </div>

              <div className="td_accordian">
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                    CAIE
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
                    If registration as a regular candidate is done through school, but student takes SLC during Mid-Session, fee for full session will be charged. (statement of entry will not be issued until full session fee is cleared).         </p>
                </div>
              </div>

              <div className="td_accordian">
                <div className="td_accordian_head">
                  <h2 className="td_accordian_title td_fs_20 td_medium">
                    Mid /Final Term Result 
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
                 -Mid Term result issuance is subject to clearance of dues up to the month of December each year. <br/>
-Final Term result issuance requires complete clearance of dues of the academic session.    <br/>    </p>
                </div>
              </div>

             

            </div>
            
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </div>
  );
};
