import React from "react";
import Link from "next/link";

const footerLogo = "/white-logo.png";

export const FooterOne = () => {
  return (
    <footer className="td_footer td_style_1">
      <div className="container">
        <div className="td_footer_row">
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <div className="td_footer_text_widget td_fs_18">
                <img src={footerLogo} alt="Logo" />
                <p>
                Pakistan International School Jeddah (PISJ-ES) is a leading institution serving the Pakistani community in Saudi Arabia. 
 <br />  With a strong legacy and future-focused vision, PISJ-ES nurtures confident and globally aware learners.</p></div>
              
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Explore
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/mission-vision">Our Mission</Link>
                </li>
                <li>
                  <Link href="/contact/contactDetails">Contact</Link>
                </li>
                <li>
                  <Link href="/school-policies">PISJES Policies</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Other Links
              </h2>
              <ul className="td_footer_widget_menu">
              <li>
                  <Link href="/">Principal&apos;s Message</Link>
                </li>
                <li>
                  <Link href="/">Professional Development</Link>
                </li>
                <li>
                  <Link href="/home_1/leave-form.pdf">Student Leave Form</Link>
                </li>
                <li>
                  <Link href="/">Our Campus</Link>
                </li>
                
              </ul>
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium">
                Social Media
              </h2>
              <div className="td_footer_social_btns td_fs_20">
                <a href="https://www.facebook.com/pisjesofficial1" className="td_center">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                <a href="https://instagram.com/pisjesofficial1" className="td_center">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                <a href="https://www.linkedin.com/company/pakistan-international-school-jeddah-english-section/" className="td_center">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
              </div>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
               Get In Touch
              </h2>
              <div className="td_newsletter td_style_1">
              <ul className="td_footer_address_widget td_medium td_mp_0">
                <li>
                  <i className="fa-solid fa-phone-volume"></i>
                  <a href="cal:+966-12-6738531">+966-12-6738531 / 6738670</a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Building No. 5139, Dakhna Street<br />
Secondary No. 7806, Al Rehab District<br />
                 Jeddah, Saudi Arabia <br />
                 Postal Code: 23344<br />
                </li>
              </ul></div>
             {/*  <div className="td_newsletter td_style_1">
                <p className="td_mb_20 td_opacity_7">
                  Subscribe for the latest news from PISJ-ES.
                </p>
                <form action="#" className="td_newsletter_form">
                  <input
                    type="email"
                    className="td_newsletter_input"
                    placeholder="Email address"
                  />
                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_30 td_medium"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Subscribe</span>
                    </span>
                  </button>
                </form>
              </div> */}
             
            </div>
          </div>
        </div>
      </div>
      <div className="td_footer_bottom td_fs_18">
        <div className="container">
          <div className="td_footer_bottom_in">
            <p className="td_copyright mb-0">
              Copyright ©Pakistan International School Jeddah English Section | All Right Reserved
              
            </p>
            <ul className="td_footer_widget_menu">
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy & Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
