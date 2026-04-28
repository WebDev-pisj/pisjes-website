import React from "react";
import Link from "next/link";

const ctaImg = "/home_1/calendar.png";


export const CtaSlc = () => {
  return (
    <section className="td_cta td_style_3 td_accent_bg">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_cta_img">
              <img src={ctaImg} alt="CTA" />
            </div>
          </div>
          
              
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_cta_in">
              <h2 className="td_fs_48 td_white_color td_mb_25">
               SLC Procedure Guide
              </h2>
              <p className="td_mb_30 td_white_color td_opacity_7 td_fs_18">
                Please Click below button to view/download Download SLC form.
              <ul className="td_list td_style_2 td_type_2 td_fs_18 td_medium td_heading_color td_mp_0">
                     
                      <li className="td_white_color">
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="currentColor"
                          ></circle>
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        Fill the SLC form
                      </li>
                       <li className="td_white_color">
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="currentColor"
                          ></circle>
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        Save file
                      </li>
                      <li className="td_white_color">
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="currentColor"
                          ></circle>
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                       Scan required documents (mentioned in SLC form)
                      </li>
                        <li className="td_white_color">
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="currentColor"
                          ></circle>
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                     Send email with filled SLC form and scanned documents on slc@pisjes.edu.sa
            </li>
                      </ul>   
              </p>
              <Link
                href="/home_1/slc-form-26.pdf"
                className="td_btn td_style_1 td_radius_10 td_medium"
              >
                <span className="td_btn_in td_accent_color td_white_bg">
                  <span>Download School Leaving Certificate</span>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M15.1575 4.34302L3.84375 15.6567"
                      stroke="currentColor"
                    />
                    <path
                      d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                      stroke="currentColor"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
