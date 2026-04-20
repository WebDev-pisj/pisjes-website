import React from "react";
import Link from "next/link";

const logoBlack = "/logo.png";

export const HeaderSidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className={`td_side_header ${showSidebar && "active"}`}>
      <button className="td_close" onClick={toggleSidebar} />

      <div className="td_side_header_overlay" onClick={toggleSidebar} />

      <div className="td_side_header_in">
        <div className="td_side_header_shape" />
        <Link className="td_site_branding" href="/">
          <img src={logoBlack} alt="Logo" />
        </Link>

        <div className="td_side_header_box">
          <h2 className="td_side_header_heading">
          
       We’re here to assist you with inquiries, applications, and enrollment support.
          </h2>
        </div>
        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Contact Us</h3>
          <ul className="td_side_header_contact_info td_mp_0">
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>
                <a href="tel:+966-12-6738531">+966-12-6738531 / 6738670</a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>
                <a href="mailto:Secretary@pisjes.edu.sa">Secretary@pisjes.edu.sa</a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                Pakistan International School Jeddah – English Section<br />
Building No. 5139, Street Dakhna<br />
Secondary No. 7806, Al Rehab District<br />
Postal Code: 23344<br />
Jeddah, Saudi Arabia<br /> 
                
              </span>
            </li>
          </ul>
        </div>
        {/* <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Subscribe</h3>
          <div className="td_newsletter td_style_1">
            <form className="td_newsletter_form">
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
                  <span>Subscribe Now</span>
                </span>
              </button>
            </form>
          </div>
        </div> */}
        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Follow Us</h3>
          <div className="td_social_btns td_style_1 td_heading_color">
            <a href="https://www.linkedin.com/company/pakistan-international-school-jeddah-english-section/" className="td_center">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            
            <a href="https://www.instagram.com/pisjesofficial1" className="td_center">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/pisjesofficial1" className="td_center">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
