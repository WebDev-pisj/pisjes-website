"use client";

import React from "react";
import { useHobble } from "../../lib/hooks/useHobble";
import Link from "next/link";
import { VideoPlayer } from "../videos/VideoPlayer";

const heroImg = "/home_1/class.jpg";
const shape1 = "/home_8/hero_shape_1.svg";
const shape2 = "/home_8/hero_shape_2.svg";
const shape3 = "/home_8/hero_shape_3.svg";
const shape4 = "/home_8/hero_shape_4.svg";
const shape5 = "/home_8/hero_shape_5.svg";
const shape6 = "/home_8/hero_shape_6.svg";
const shape7 = "/home_8/hero_shape_7.svg";
const shape8 = "/home_8/hero_shape_8.svg";
const shape9 = "/home_8/hero_shape_9.svg";

export const PisjesCampus2 = () => {
  useHobble();

  return (
    <section className="td_hero td_style_8 td_center td_accent_bg td_hobble">
      <div className="container">
        <div
          className="td_hero_img wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <img src={heroImg} alt="Hero" />
        </div>
        <div
          className="td_hero_text wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.35s"
        >
          
          <h1 className="td_hero_title td_white_color td_fs_64 td_mb_24">
            Classrooms 
          </h1>
          <p className="td_hero_subtitle td_fs_18 td_white_color td_opacity_7 td_mb_30">
            The School has well-maintained,spacious and well-illuminated classrooms,conference rooms and option rooms with multimedia teaching equipment,high quality furniture and modern amenities to create effective learning teaching environment.
          </p>
         
        </div>
      </div>

      <div className="td_hero_shape_1 position-absolute td_hover_layer_3">
        <img src={shape1} alt="Decorative shape 1" />
      </div>
      <div className="td_hero_shape_2 position-absolute td_hover_layer_5">
        <img src={shape2} alt="Decorative shape 2" />
      </div>
      <div className="td_hero_shape_3 position-absolute td_hover_layer_3">
        <img src={shape3} alt="Decorative shape 3" />
      </div>
      <div className="td_hero_shape_4 position-absolute td_hover_layer_5">
        <img src={shape4} alt="Decorative shape 4" />
      </div>
      <div className="td_hero_shape_5 position-absolute td_hover_layer_3">
        <img src={shape5} alt="Decorative shape 5" />
      </div>
      <div className="td_hero_shape_6 position-absolute td_hover_layer_5">
        <img src={shape6} alt="Decorative shape 6" />
      </div>
      <div className="td_hero_shape_7 position-absolute td_hover_layer_3">
        <img src={shape7} alt="Decorative shape 7" />
      </div>
      <div className="td_hero_shape_8 position-absolute td_hover_layer_3">
        <img src={shape8} alt="Decorative shape 8" />
      </div>
      <div className="td_hero_shape_9 position-absolute td_hover_layer_5">
        <img src={shape9} alt="Decorative shape 9" />
      </div>
    </section>
  );
};
