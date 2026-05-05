import React from "react";
import Link from "next/link";


const aboutImg1 = "/home_1/rire.png";

export const CtaPisj = () => {
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
              <img src={aboutImg1} alt="CTA" />
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_cta_in">
              <h2 className="td_fs_48 td_white_color td_mb_25">
                Why PISJ-ES?
              </h2>
              <p className="td_mb_30 td_white_color td_opacity_7 td_fs_18">
                Hi This is a new change
                Few decisions have the lasting impact on your child as that of school choice. It is during their school days that life-long friendships will be made, the spiritual formation will take place, and values will be instilled. PISJ-ES exists today because it is in constant quest to improve the standard of education and to educate their children in a safe, secure and competitive learning environment that instills values, helps develop character and cultivates wisdom, manifested through academic excellence.
<br/>At all grade levels, the curriculum and classroom instruction is focused on maximizing individual student’s achievement and developing strength of character. Students are given opportunities to explore modern vistas of global education in modern and well equipped classrooms and labs. With many opportunities and prospects in academics, the provision of comprehensive sports, fine arts, debates and many other co-curricular activities unfold a vast horizon of creativity and confidence. <br/>PISJ-ES gives high importance in preparing children to become individuals who choose character before career, wisdom beyond scholarship, service before self, honesty before opportunities and participation as a way of life.
              </p>
              

            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
