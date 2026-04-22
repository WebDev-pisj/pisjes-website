"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderLanguage } from "./HeaderLanguage";
import { HeaderSidebar } from "./HeaderSidebar";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

const Logo = "/white-logo.png";

export const HeaderOne = () => {
  useMobilemenu();
  useStickyHeader();

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((v) => !v);

  return (
    <>
        {/* <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> */}
      <header className="td_site_header td_style_1 td_type_3 td_sticky_header td_medium td_heading_color">
        <div className="td_main_header">
          <div className="container-fluid">
            <div className="td_main_header_in">
              {/* left */}
              <div className="td_main_header_left">
                <Link className="td_site_branding" href="/">
                  <img src={Logo} alt="Logo" />
                </Link>
                <div className="td_header_social_btns">
                  <a href="https://www.facebook.com/pisjesofficial1" className="td_center">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                 {/* <a href="#" className="td_center">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a> */}
                  <a href="https://instagram.com/pisjesofficial1" className="td_center">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/pakistan-international-school-jeddah-english-section/" className="td_center">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  {/* <a href="#" className="td_center">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a> */}
                </div>
              </div>

              <div className="td_main_header_center">
                <nav className="td_nav">
                  <div className="td_nav_list_wrap">
                    <div className="td_nav_list_wrap_in">
                      {/* first three */}
                      <ul className="td_nav_list">
                         <li> 
                          <Link href="/">Home</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/">About</Link>
                          <ul>
                            <li>
                              <Link href="/mission-vision">Vision &  Mission</Link>
                            </li>
                            <li>
                              <Link href="/our-team">Our Team</Link>
                            </li>
                          
                            <li>
                              <Link href="/our-campus">Our Campus</Link>
                            </li>
                            <li>
                              <Link href="/">Pisjes Policies</Link>
                            </li>
                           
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <Link href="/">Academics</Link>
                          <ul>
                            <li>
                              <Link href="/">School Timings</Link>
                            </li>
                            <li>
                              <Link href="/calendar">Academic Calendar</Link>
                            </li>
                          
                            <li>
                              <Link href="/">Document Requests ( IGCSE & A Levels)</Link>
                            </li>
                          
                           
                          </ul>
                        </li>
                    {/*    <li className="menu-item-has-children">
                          <Link href="/products">Courses</Link>
                          <ul>
                            <li>
                              <Link href="/courses-grid-view">
                                Courses Grid View
                              </Link>
                            </li>
                            <li>
                              <Link href="/courses-list-view">
                                Courses List View
                              </Link>
                            </li>
                            <li>
                              <Link href="/courses-grid-with-sidebar">
                                Courses Grid With Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link href="/course-details">Course Details</Link>
                            </li>
                          </ul>
                        </li> */}
                       
                      </ul>

                      <Link className="td_site_branding" href="/">
                        <img src={Logo} alt="Logo" />
                      </Link>

                      {/* last three */}
                      <ul className="td_nav_list">
                        <li className="menu-item-has-children td_mega_menu">
                          <Link href="#">Admissions</Link>
                          <ul className="td_mega_wrapper">
                            <li className="menu-item-has-children">
                              <h4>Session 2026-27</h4>
                              <ul>
                                <li>
                                  <Link href="/event">Entrance Exam Registration</Link>
                                </li>
                                <li>
                                  <Link href="/event/ev-123">
                                    Entrance Exam Schedule
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/event/ev-123">
                                    Age Criteria
                                  </Link>
                                </li>
                                 <li>
                                  <Link href="/event/ev-123">
                                    Documents Required
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/team-members">Admissions Process Guideline</Link>
                                </li>
                                <li>
                                  <Link href="/team-members/t-123">
                                    Entrance Exam Syllabus Outline
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <h4>Fee Structure</h4>
                              <ul>
                                <li>
                                  <Link href="/students-registrations">
                                    Fee Payment System
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/instructor-registrations">
                                    Fee Structure
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/signup">Clearance Of School Dues</Link>
                                </li>
                                <li>
                                  <Link href="/signin">Terms & Conditions</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <h4>Others</h4>
                              <ul>
                                <li>
                                  <Link href="/faqs">School Leaving Certificate</Link>
                                </li>
                               
                              
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">Contact</Link>
                          <ul>
                            <li>
                              <Link href="/contact/contactDetails">Contact Details</Link>
                            </li>
                            <li>
                              <Link href="/smc">
                                SMC
                              </Link>
                            </li>
                            <li>
                              <Link href="https://portal.pisjes.edu.sa/career">Career portal</Link>
                            </li>
                             <li>
                              <Link href="https://portal.pisjes.edu.sa/procurement">Procurement Portal</Link>
                            </li>
                          </ul>
                        </li>
                         <li className="menu-item-has-children">
                          <Link href="#">E-Services</Link>
                          <ul>
                            <li>
                              <Link href="https://eschool.pisjes.edu.sa/">Parent Portal</Link>
                            </li>
                            <li>
                              <Link href="https://pisjes.online/site/login">
                              Query Portal
                              </Link>
                            </li>
                           
                            
                            
                            <li>
                              <Link href="https://teams.microsoft.com/">MS Teams</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              {/* right */}
              <div className="td_main_header_right">
                {/* lang dropdown */}
                <div className="position-relative td_language_wrap">
                  <HeaderLanguage />
                </div>

                {/* <div className="position-relative">
                  <HeaderSearch />
                </div> */}

                <button className="td_hamburger_btn" onClick={toggleSidebar} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeaderSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};
