import React from "react";
import Link from "next/link";

const ctaImg = "/home_1/pisjes-acting-principal.jpg";


export const CtaMessage = () => {
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
              <img src={ctaImg} alt="CTA" />
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_cta_in">
              <h2 className="td_fs_48 td_white_color td_mb_25">
              Principal Message
              </h2>
              <p className="td_mb_30 td_white_color td_opacity_7 td_fs_18">
                It is with immense pride and a forward-thinking spirit that I share this vision as the Principal of Pakistan International School Jeddah, English Section (PISJ-ES). We stand at a pivotal moment in history, witnessing an unprecedented transformation in the educational landscape. Global interconnectedness and evolving challenges are reshaping not only industries but also the very skills required for success in the 21st century.
At PISJ-ES, we embrace this change wholeheartedly. Our commitment is to provide an educational experience that transcends traditional boundaries, preparing students not just for examinations but for life’s complex challenges and exciting opportunities. The curriculum is evolving to integrate essential 21st-century skills: critical thinking, creativity, collaboration, communication, and adaptability. <br/>
Alongside academic excellence, we place a strong emphasis on instilling values that define character and identity. Our classrooms are vibrant spaces where students are encouraged to uphold moral integrity, respect diversity, and cherish the bonds of community. Above all, we nurture love for our homeland, Pakistan, while fostering deep respect and gratitude for the Kingdom of Saudi Arabia, our gracious host country. This dual devotion strengthens the spirit of patriotism and gratitude, ensuring our students grow into responsible citizens who honor both nations.
Amidst these developments, the core values that define PISJ-ES remain unwavering. The school is dedicated to nurturing well-rounded individuals imbued with strong moral values, patriotism, and compassion. The aim is to cultivate not only future achievers but also thoughtful leaders and responsible global citizens who carry forward the ethos of PISJ-ES.<br/>
Though the future may hold unpredictable developments, confidence lies in collaborative efforts between educators, parents, and students. Together, we will strengthen responsibility and commitment towards our homeland and our host country, empowering scholars to become the leaders of tomorrow—equipped with the knowledge, skills, and character to make a positive impact on the world.<br/>
This is an exciting journey of educational excellence and values-driven growth, and we invite all to be part of it.
              </p>
          <p className="td_mb_30 td_white_color td_opacity_7 td_fs_18">Zeeshan Ahmed Khan</p>     
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
