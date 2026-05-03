"use client";

import React from "react";
import Link from "next/link";
import { useTabs } from "../../lib/hooks/useTabs";
import { VideoPlayer } from "../videos/VideoPlayer";

const aboutImg1 = "/home_1/rire.png";
const aboutImg2 = "/home_5/about_img_2.jpg";
const aboutShape2 = "/home_5/about_shape_2.svg";

export const PisjesMissionVision = () => {
  useTabs();

  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_image_box td_style_6">
              <div className="td_image_box_img_1">
                <img src={aboutImg1} alt="About" />
              </div>
              {/* <div className="td_image_box_img_2">
                <div className="td_image_box_img_2_in">
                  <img src={aboutImg2} alt="About" />

                  <VideoPlayer
                    trigger={
                      <a href="#vid0001" className="td_video_open">
                        <span className="td_player_btn td_center">
                          <span></span>
                        </span>
                      </a>
                    }
                  />
                </div>
              </div> */}
              <div className="td_image_box_shape_1 position-absolute" />
              {/* <div className="td_image_box_shape_2 position-absolute">
                <img src={aboutShape2} alt="Shape" />
              </div> */}
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_section_heading td_style_1 td_mb_30">
             
              <h2 className="td_section_title td_fs_48 td_mb_20">
                Excellence in Education, Preparing for Global Success
              </h2>
              <p className="td_section_subtitle td_fs_18 mb-0">
                Pakistan International School Jeddah – English Section (PISJ-ES), a leading institution in the Western Province of Saudi Arabia, committed to academic excellence and holistic development. We provide a high-quality learning experience through the Cambridge International Education curriculum, preparing students for global success.
              </p>
            </div>
            <div className="td_tabs td_style_1">
              <ul className="td_tab_links td_style_3 td_mp_0 td_medium td_fs_24 td_heading_color">
                <li className="active">
                  <a href="#td_tab_1"> Vision</a>
                </li>
                <li>
                  <a href="#td_tab_2"> Mission</a>
                </li>
                <li>
                  <a href="#td_tab_3">Core Values</a>
                </li>
                 <li>
                  <a href="#td_tab_4">Goals</a>
                </li>
              </ul>
              <div className="td_height_40 td_height_lg_30" />
              <div className="td_tab_body">
                <div className="td_tab active" id="td_tab_1">
                  <ul className="td_list td_style_5 td_mp_0">
                    <li>
                     <p className="td_fs_18 mb-0">
                       “Excellence in Education”
                      </p>
                      
                    </li>
                   
                  </ul>
                </div>
                <div className="td_tab" id="td_tab_2">
                  
                  <ul className="td_list td_style_5 td_mp_0">
                    <li>
                     <p className="td_fs_18 mb-0">
                      &quot;PISJES is committed to creating an all-encompassing learning community Provide our students with holistic and well-rounded education within a challenging and nurturing environment to facilitate them in becoming a &quot;whole person&quot;: Intellectually, Physically, Emotionally, Socially and Morally. <br />
                      </p>
                      
                    </li>
                   
                  </ul>
                </div>
                <div className="td_tab" id="td_tab_3">
                  <ul className="td_list td_style_5 td_mp_0">
                    <li>
                     
                      <p className="td_fs_18 mb-0">
                        “RIRE” – Respect, Integrity, Responsibility, Excellence
                      </p>
                    </li>
                    </ul>
                  
                </div>
                  <div className="td_tab" id="td_tab_4">
                  <ul className="td_list td_style_5 td_mp_0">
                    <li>
                      <h3 className="td_fs_24 td_mb_8">
                       Student Wellbeing
                      </h3>
                      <p className="td_fs_18 mb-0">
                        Providing learners with a wholesome learning experience will enable them to develop vital social, emotional, and cognitive skills essential for their success in the rapidly evolving world
                      </p>
                    </li>
                    <li>
                      <h3 className="td_fs_24 td_mb_8">
                        Parent Satisfaction
                      </h3>
                      <p className="td_fs_18 mb-0">
                     To provide a learning environment that is inclusive and enables parental satisfaction is a priority for PISJ-ES.
                      </p>
                    </li>
                    <li>
                      <h3 className="td_fs_24 td_mb_8">
                        Continuous Professional Development
                      </h3>
                      <p className="td_fs_18 mb-0">
                   To maintain the
current professional standards of our staff members & to keep abreast of developing skills trends & strategic directions.
                      </p>
                    </li>
                    <li>
                      <h3 className="td_fs_24 td_mb_8">
                       Quality Assurance
                      </h3>
                      <p className="td_fs_18 mb-0">
                   Implemented in
accordance with the latest teaching and learning standards based on best practices and Cambridge guidelines.
                      </p>
                    </li>
                  </ul>
                </div>
                 
              </div>
            </div>
            <div className="td_height_40 td_height_lg_40" />
           
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
    
  );
};
