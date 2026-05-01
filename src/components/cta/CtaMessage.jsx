import React from "react";
import Link from "next/link";

const ctaImg = "/home_1/pisjes-acting-principal.jpg";


export const CtaMessage = () => {
  return (
    <section className="td_cta td_style_3 td_accent_bg">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          {/* <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_cta_img">
              <img src={ctaImg} alt="CTA" />
            </div>
          </div> */}
          <div
            className="col-lg-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_cta_in">
              <h2 className="td_fs_48 td_white_color td_mb_25">
              Principal Message
              </h2>
              <p className="td_mb_30 td_white_color td_opacity_7 td_fs_18">
               Welcome to Pakistan International School Jeddah – English Section (PISJES), a beacon of academic excellence, moral integrity, and cultural harmony in the heart of the Kingdom of Saudi Arabia.<br/>
At PISJES, we are more than just a school, we are a thriving community where young minds are nurtured to become responsible, compassionate, and visionary citizens of tomorrow. Our mission is to provide a holistic education that not only equips students with knowledge and skills but also instills in them the timeless values of honesty, respect, empathy, and perseverance.<br/>
We take immense pride in fostering a deep love for our homeland, Pakistan, while also cultivating a profound respect and appreciation for the Kingdom of Saudi Arabia - our gracious host and second home. Through curricular and co-curricular activities, we encourage our students to celebrate their identity, honor their heritage, and contribute positively to both nations.<br/>
Our faculty comprises passionate educators who bring excellence to the classroom every day. With a commitment to continuous improvement and innovation, they inspire students to think critically, dream boldly, and act ethically. The strength of our academic programs lies in their rigor, relevance, and responsiveness to the evolving global landscape.<br/>
Equally vital to our success is the unwavering support of our parents. At PISJES, we believe that education is a shared journey, and the partnership between school and home is the cornerstone of every child&apos;s success. We are grateful to our parent community for their trust, collaboration, and active involvement in shaping the future of our students.<br/>
As Principal, I am honored to lead this dynamic institution where values and vision walk hand in hand. I invite you to explore our website, engage with our programs, and witness the spirit of excellence that defines PISJES.<br/>
Together, let us continue to build a legacy of learning, leadership, and love for our nations.<br/>
    </p>
          <p className="td_mb_30 td_white_color td_opacity_7 td_fs_18">Sincerely,<br/>
Principal<br/>
Pakistan International School Jeddah, English Section (PISJ-ES) <br/></p>     
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
