import React from "react";

const contactBg = "/home_6/contact_bg.svg";
const numberBoxBg = "/home_6/img_number_box_number_bg.jpg";

export const ContactPisjes = () => {
  return (
    <section
      className="td_bg_filed td_heading_bg"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_30">
          <div
            className="col-lg-7 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div class="td_contact_box td_style_1  td_radius_10">
              
             <p className=" mb-0 td_fs_20 td_white_color">
           
                <b>Administration: </b> principal@pisjes.edu.sa <br />

 <b>IT Coordinator:</b> it.coordinator@pisjes.edu.sa<br />


 <b>Admin Coordinator:</b> admin.coordinator@pisjes.edu.sa<br />

 <b>Event Coordinator:</b> event.coordinator@pisjes.edu.sa<br />

 <b>CIE Coordinator:</b> cie.coordinator@pisjes.edu.sa<br />


 <b>Admissions:</b> admissions@pisjes.edu.sa<br />

 <b>Student Affairs:</b> student.affairs@pisjes.edu.sa<br />

 <b>Accounts:</b> accounts@pisjes.edu.sa<br />

 <b>Student Career Counsellor:</b> career.counsellor@pisjes.edu.sa<br />

 <b>SMC:</b> smc@pisjes.edu.sa<br />

</p> </div>
           </div>
          <div
            className="col-lg-5 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_contact_box td_style_2 td_accent_bg td_radius_10">
              <h3 className="td_white_color td_fs_20 td_semibold td_mb_35">
               We’re here to help! Reach out to the relevant department for any queries, admissions, or support.
              </h3>


              <form action="#">
                <div className="td_form_field_3 td_mb_30">
                  <input
                    type="text"
                    className="td_white_color"
                    placeholder="Full Name"
                    required
                  />
                  <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                    Full Name
                  </label>
                </div>
                     
                <div className="td_form_field_3 td_mb_30">
                  <input
                    type="text"
                    className="td_white_color"
                    placeholder=" Email"
                    required
                  />
                  <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                    Email
                  </label>
                </div>

                 <div className="td_form_field_3 td_mb_30">
                  <input
                    type="text"
                    className="td_white_color"
                    placeholder="Your Message"
                    required
                  />
                  <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                   Your Message
                  </label>
                </div>
                <div className="td_form_field_3 td_mb_30">
                  <input
                    type="text"
                    className="td_white_color"
                    placeholder="Phone"
                    required
                  />
                  <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                    Phone
                  </label>
                </div>
                <button
                  type="submit"
                  className="td_btn td_style_1 td_radius_10 td_medium w-100"
                >
                  <span className="td_btn_in td_accent_color td_white_bg">
                    <span>Send Message</span>
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1575 4.34302L3.84375 15.6567"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
