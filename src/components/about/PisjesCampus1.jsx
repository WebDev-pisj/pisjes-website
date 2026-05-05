import React from "react";
import Link from "next/link";
import { VideoPlayer } from "../videos/VideoPlayer";

const aboutShape4 = "/home_8/about_shape_4.svg";
const aboutImg1 = "/home_8/about_img_1.jpg";
const aboutImg2 = "/home_8/about_img_2.jpg";
const aboutShape2 = "/home_8/about_shape_2.svg";
const aboutShape3 = "/home_8/about_shape_3.svg";
const classes = "/home_1/classes.jpg";
const lab = "/home_1/lab.jpg";
const chemlabo = "/home_1/chem-labo.jpg";
const sports = "/home_1/ground.jpg";
const lib = "/home_1/Library.jpg";
const canteen = "/home_1/canteen.jpg";
const transport = "/home_1/transport.jpg";
const clinic = "/home_1/clinic.png";

export const PisjesCampus1 = () => {
  return (
    <section>
      
      <div className="td_wrap_box_1 td_radius_10">
       
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
            <div className="col-lg-6">
              <div className="td_image_box td_style_6 td_type_2">
                <div
                  className="td_image_box_img_1 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img src={classes} alt="About" />
                </div>
                <div
                  className="td_image_box_img_2 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  {/* <div className="td_image_box_img_2_in">
                    <img src={aboutImg2} alt="About" />

                    <VideoPlayer
                      trigger={
                        <a href="#vid002" className="td_video_open">
                          <span className="td_player_btn td_center">
                            <span></span>
                          </span>
                        </a>
                      }
                    />
                  </div> */}
                </div>
                <div className=" position-absolute" />
                <div className="td_image_box_shape_2 position-absolute">
                  <img src={aboutShape2} alt="Shape" />
                </div>
                <div className="td_image_box_shape_3 position-absolute td_accent_color">
                  <img src={aboutShape3} alt="Shape" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                
                <h2 className="td_section_title td_fs_48 td_mb_20">
                  Classrooms 
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_heading_color td_opacity_8">
                 The School has well-maintained,spacious and well-illuminated classrooms,conference rooms and option rooms with multimedia teaching equipment,high quality furniture and modern amenities to create effective learning teaching environment.
           </p>
              </div>
            
            </div>
          </div>
        </div>
      
      </div>
     
       <div className="td_wrap_box_1 td_radius_10">
       
        <div className="" />
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
                 <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                
                <h2 className="td_section_title td_fs_48 td_mb_20">
                 Computer Labs 
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_heading_color td_opacity_8">
                  Our Computer Laboratories are come around frequently by students and faculty members . Students use IT labs not only to learn their subject matter but also to conduct research work and prepare assignments. The labs are equipped with the latest technology which supports learning needs in 21st century.Facilities are regularly updated to keep pace with the rapid changes in the field of information technology.
                </p>
              </div>
            
            </div>
            <div className="col-lg-6">
              <div className="td_image_box td_style_6 td_type_2">
                <div
                  className="td_image_box_img_1 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img src={lab} alt="About" />
                </div>
             
                <div className=" position-absolute" />
                <div className="td_image_box_shape_2 position-absolute">
                  <img src={aboutShape2} alt="Shape" />
                </div>
                <div className="td_image_box_shape_3 position-absolute td_accent_color">
                  <img src={aboutShape3} alt="Shape" />
                </div>
              </div>
            </div>
       
          </div>
        </div>
       
      </div>

      <div className="td_wrap_box_1 td_radius_10">
        
        <div className="" />
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
            <div className="col-lg-6">
              <div className="td_image_box td_style_6 td_type_2">
                <div
                  className="td_image_box_img_1 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img src={chemlabo} alt="About" />
                </div>
               
                <div className=" position-absolute" />
                <div className="td_image_box_shape_2 position-absolute">
                  <img src={aboutShape2} alt="Shape" />
                </div>
                <div className="td_image_box_shape_3 position-absolute td_accent_color">
                  <img src={aboutShape3} alt="Shape" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                
                <h2 className="td_section_title td_fs_48 td_mb_20">
                 Science Labs
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_heading_color td_opacity_8">
                 Adequate laboratory space is provided for each student with sufficient gas, electrical, and water outlets with the special attention towards safety precautions. Shut-off switches are provided for gas and electricity Safety equipment such as fire extinguishers, fire blankets, fume hoods and first-aid kits are placed in each lab. Lockable cabinets are available for chemicals or dangerous equipment. Chemical containers are labeled with the name of the chemical. Students wear protective lab coats and gloves while working with chemicals.</p>           </div>
            
            </div>
          </div>
        </div>
        
      </div>
      

      <div className="td_wrap_box_1 td_radius_10">
        
        <div className="" />
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
                 <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                
                <h2 className="td_section_title td_fs_48 td_mb_20">
                Sports
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_heading_color td_opacity_8">
                 
At PISJ-ES, mental and physical development goes hand in hand. Sports and games play vital roles in education. Keeping the importance of sports in mind, PISJ-ES facilitates its students to play different sports along with the physical education programme including Football, Cricket, Tennis and Squash in well maintained playgrounds and squash court.        </p>
              </div>
            
            </div>
            <div className="col-lg-6">
              <div className="td_image_box td_style_6 td_type_2">
                <div
                  className="td_image_box_img_1 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img src={sports} alt="About" />
                </div>
               
                <div className=" position-absolute" />
                <div className="td_image_box_shape_2 position-absolute">
                  <img src={aboutShape2} alt="Shape" />
                </div>
                <div className="td_image_box_shape_3 position-absolute td_accent_color">
                  <img src={aboutShape3} alt="Shape" />
                </div>
              </div>
            </div>
       
          </div>
        </div>
      
      </div>
      
      <div className="td_wrap_box_1 td_radius_10">
       
        <div className="" />
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
            <div className="col-lg-6">
              <div className="td_image_box td_style_6 td_type_2">
                <div
                  className="td_image_box_img_1 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img src={lib} alt="About" />
                </div>
                <div
                  className="td_image_box_img_2 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  
                </div>
                <div className=" position-absolute" />
                <div className="td_image_box_shape_2 position-absolute">
                  <img src={aboutShape2} alt="Shape" />
                </div>
                <div className="td_image_box_shape_3 position-absolute td_accent_color">
                  <img src={aboutShape3} alt="Shape" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                
                <h2 className="td_section_title td_fs_48 td_mb_20">
                 Libraries
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_heading_color td_opacity_8">
                 Adequate laboratory space is provided for each student with sufficient gas, electrical, and water outlets with the special attention towards safety precautions. Shut-off switches are provided for gas and electricity Safety equipment such as fire extinguishers, fire blankets, fume hoods and first-aid kits are placed in each lab. Lockable cabinets are available for chemicals or dangerous equipment. Chemical containers are labeled with the name of the chemical. Students wear protective lab coats and gloves while working with chemicals.</p>           </div>
            
            </div>
          </div>
        </div>
       
      </div>

       <div className="td_wrap_box_1 td_radius_10">
       
        <div className="" />
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
                 <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                
                <h2 className="td_section_title td_fs_48 td_mb_20">
                Cafeteria
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_heading_color td_opacity_8">
                 
Nutritious and healthy food helps developing smart minds and strong bodies. Our cafeteria provides students with healthy snacks choice while keeping the quality and hygiene standard on priority, creating an overall sanitized ambiance.</p>              </div>
            
            </div>
            <div className="col-lg-6">
              <div className="td_image_box td_style_6 td_type_2">
                <div
                  className="td_image_box_img_1 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img src={canteen} alt="About" />
                </div>
                
                
                <div className="td_image_box_shape_2 position-absolute">
                  <img src={aboutShape2} alt="Shape" />
                </div>
                <div className="td_image_box_shape_3 position-absolute td_accent_color">
                  <img src={aboutShape3} alt="Shape" />
                </div>
              </div>
            </div>
       
          </div>
        </div>
        
      </div>
 
      <div className="td_wrap_box_1 td_radius_10">
       
        <div className="" />
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
            <div className="col-lg-6">
              <div className="td_image_box td_style_6 td_type_2">
                <div
                  className="td_image_box_img_1 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img src={clinic} alt="About" />
                </div>
                
               
                <div className="td_image_box_shape_2 position-absolute">
                  <img src={aboutShape2} alt="Shape" />
                </div>
                <div className="td_image_box_shape_3 position-absolute td_accent_color">
                  <img src={aboutShape3} alt="Shape" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                
                <h2 className="td_section_title td_fs_48 td_mb_20">
                 Clinic
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_heading_color td_opacity_8">
                 A full-time Doctor is available in the school&apos;s clinic to attend to the health needs of children as and when required. Our clinic is well equipped with the medical apparatus and other facilities. First aid is immediately administered to a student if he/she sustains an injury or illness during school hours. In Junior School, once in two months, a complete health check is provided for the children. This includes a dental and eye check, along with the child&apos;s hygiene. Information with regard to any concern is sent home to parents.</p>           </div>
            
            </div>
          </div>
        </div>
      
      </div>
      <div className="td_wrap_box_1 td_radius_10">
        
        <div className="" />
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
                 <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                
                <h2 className="td_section_title td_fs_48 td_mb_20">
                Transportation
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_heading_color td_opacity_8">
                 
   Parents, who wish to avail school transport facility, are requested to provide us the Google Map coordinates to make it convenient for all of us.
Please follow the steps below to find out your location coordinates.<br/>

- Go to Google Maps (https://www.google.com/maps)<br/>
- Find your location and either Left Click on it or Right Click then select “What’s here?”<br/>
- Your location detail will pop up in the upper corner of your screen.<br/>
- copy it to share with School’s transport department via email “ transport@pisjes.edu.sa “<br/>

To double check the accuracy of your selection, copy the number at the bottom of the address in Google home page and it should immediately recognize it as the coordinates and will take you there on the map. For example here are the PISJ-ES coordinates: 21.551386, 39.232526. If any minor adjustment is required please do so to be accurate and share the accurate coordinates with Transport Department.<br/></p>              </div>
            
            </div>
            <div className="col-lg-6">
              <div className="td_image_box td_style_6 td_type_2">
                <div
                  className="td_image_box_img_1 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img src={transport} alt="About" />
                </div>
                
             
                <div className="td_image_box_shape_2 position-absolute">
                  <img src={aboutShape2} alt="Shape" />
                </div>
                <div className="td_image_box_shape_3 position-absolute td_accent_color">
                  <img src={aboutShape3} alt="Shape" />
                </div>
              </div>
            </div>
       
          </div>
        </div>
      
      </div>
    </section>
  );
};
