"use client";

import React from "react";
import Link from "next/link";
import { useHobble } from "../../lib/hooks/useHobble";

const teamShape1 = "/home_2/team_shape_1.svg";
const teamShape2 = "/home_2/team_shape_2.svg";
const actingprincipal = "/home_1/pisjes-acting-principal.jpg";
const principal = "/home_1/principal.jpg";
const teamMember2 = "/home_2/team_member_2.jpg";
const teamMember3 = "/home_2/team_member_3.jpg";
const teamMember4 = "/home_2/team_member_4.jpg";
const dhss = "/home_1/dhss.jpeg";
const dhjs = "/home_1/dhjs.jpeg";
const dhms = "/home_1/dhms.jpg";
const hodbio = "/home_1/hodbio.jpg";
const hodchem = "/home_1/hodchem.jpg";
const hodphy = "/home_1/hodphy.jpg";
const hodmath = "/home_1/hodmath.jpg";
const hodeng = "/home_1/hodeng.png";
const hodpak = "/home_1/dummy.jpg";
const hodpe = "/home_1/hodpe.jpg";
const hodcom = "/home_1/hodcom.jpeg";
const hodislam = "/home_1/hodislam.jpeg";
const hodict = "/home_1/dummy.jpg";
const hodurdu = "/home_1/hodurdu.jpeg";
const itcord = "/home_1/itcord.jpeg";
const webdev = "/home_1/webdev.jpg";
const admincord = "/home_1/admincord.jpeg";
const hrcord = "/home_1/hrcord.jpg";
const careercons = "/home_1/careercons.jpg";
const examcord = "/home_1/examcord.jpg";
const eventcord = "/home_1/eventcord.jpg";
const ciecord = "/home_1/ciecord.jpg";
const admissioncord = "/home_1/admissioncord.jpg";
const financecord = "/home_1/financecord.jpg";
const dummy = "/home_1/dummy.jpg";




export const TeamPisjes = () => {
  useHobble();

  return (
    <section className="td_shape_section_8 td_hobble" >
      <div className="td_shape_position_1 position-absolute td_hover_layer_3">
        <img src={teamShape1} alt="Team shape 1" />
      </div>
      <div className="td_shape_position_2 position-absolute td_hover_layer_3">
        <img src={teamShape2} alt="Team shape 2" />
      </div>

      <div className="td_height_112 td_height_lg_75" />

      <div className="container">


        {/* //////////////// principal //////////  */}
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            <i></i>
            team members
            <i></i>
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Leadership
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0">
          Our Principal provides overall leadership and strategic direction for the school. With a strong focus on academic excellence and student well-being, the Principal ensures that the school’s vision and mission are effectively implemented while maintaining high standards in teaching, learning, and discipline.  </p>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
        {/*   <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={principal}
                alt="Amna Usman Khan"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                 Amna Usman Khan
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                 Principal
                </p>
              </div>
            </div>
          </div> */}
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={actingprincipal}
                alt="Zeeshan Ahmed Khan"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                  Zeeshan Ahmed Khan
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                 Acting.Principal
                </p>
              </div>
            </div>
          </div>
          
         
        </div>

        <div className="td_height_60 td_height_lg_40" />

       {/* //////////////// dhs //////////  */}
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
         
          <h2 className="td_section_title td_fs_48 mb-0">
            Deputy Heads
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0">
           Our School Heads lead different sections of the school, ensuring smooth academic operations and a positive learning environment. They support both students and staff while maintaining quality education and fostering continuous improvement.  
          </p>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={dhjs}
                alt="Fouzia Waseem"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                  Fouzia Waseem
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                  Deputy Head Junior School
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={dhms}
                alt="Lubna Chang"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                  Lubna Chang
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                 Deputy Head Middle School
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={dhss}
                alt="Hiba Rehman "
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                  Hiba Rehman
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                 Deputy Head Senior School
                </p>
              </div>
            </div>
          </div>
          
        </div>


        <div className="td_height_60 td_height_lg_40" />
        {/* ///////////////// hods /////////////// */}
         <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
         
          <h2 className="td_section_title td_fs_48 mb-0">
        Department Heads
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0">
        Our Department Heads are subject experts who lead their respective departments. They are responsible for curriculum planning, teaching standards, and student performance in alignment with the Cambridge International Education curriculum.</p> </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodcom}
                alt=" Farrukh Saleem"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                Farrukh Saleem
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                HOD  Commerce
                </p>
              </div>
            </div>
          </div>
             <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodmath}
                alt=" Khurram Siddique"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                Khurram Siddique
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
               HOD Mathematics
                </p>
              </div>
            </div>
          </div>
             <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodphy}
                alt="Zeeshan Khan"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                Zeeshan Khan
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                HOD Physics
                </p>
              </div>
            </div>
          </div>   <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodict}
                alt="Muhammad Naveed"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                Muhammad Naveed
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
               Acting HOD ICT
                </p>
              </div>
            </div>
          </div>
             <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodurdu}
                alt=" Samina Ansari"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                 Samina Ansari
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                 HOD  Urdu
                </p>
              </div>
            </div>
          </div>   <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodbio}
                alt="Fatima Siddiqui"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                Fatima Siddiqui
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                HOD Biology
                </p>
              </div>
            </div>
          </div>   <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodislam}
                alt="Afsheen Ayaz"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                Afsheen Ayaz
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                HOD Islamiyat
                </p>
              </div>
            </div>
          </div>   <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodpe}
                alt="Hasnat Ahmed"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                 Hasnat Ahmed
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                 HOD Physical Education
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodpak}
                alt="Soofia Majid"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                 Soofia Majid
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
         HOD Pakistan Studies and Arts
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodeng}
                alt=" Bilal Awan"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                 Bilal Awan
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                 HOD English
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hodchem}
                alt="Ambreen Fatima"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                 Ambreen Fatima
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                  HOD Chemistry
                </p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="td_height_60 td_height_lg_40" />

        
        <div className="td_height_60 td_height_lg_40" />

         {/* //////////////// admin //////////  */}
          <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          
          <h2 className="td_section_title td_fs_48 mb-0">
               Administration
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0">
            Our administrative team plays a key role in the smooth and efficient 
        functioning of the school. They manage daily operations, communication, 
        and student services with professionalism and care.   </p>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={admincord}
                alt="Admin Coordinator"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                  Ghazanfar  Ali
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                 Admin Coordinator
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={ciecord}
                alt="CIE Coordinator"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                 Shahbaz Badar
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                 CIE Coordinator / Cambridge Exams Officer
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={itcord}
                alt="IT Coordinator"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                  Ahsan Khurshid
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                  IT Coordinator
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={admissioncord}
                alt="Sabeen Haider "
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                Sabeen Haider 
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
               Student Affairs & Admission Coordinator
                </p>
              </div>
            </div>
          </div>
           <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={hrcord}
                alt=" Saniya Shaukat"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
               Saniya Shaukat
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
               HR Specialist
                </p>
              </div>
            </div>
          </div>
           <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={financecord}
                alt=" Aisha Khokar"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                Aisha Khokar
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                Finance Specialist
                </p>
              </div>
            </div>
          </div>
           <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={examcord}
                alt="  Musarrat Awan"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                Musarrat Awan
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
               Controller Examinations
                </p>
              </div>
            </div>
          </div>
           <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={eventcord}
                alt="Event Coordinator"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                 Danya Saiyid
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                Event Coordinator
                </p>
              </div>
            </div>
          </div>
           <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={webdev}
                alt="Web Developer"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                 Quratulain
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                Web Developer
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={webdev}
                alt="Career Counsellor"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                 Hina Khalid
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                Career Counsellor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
