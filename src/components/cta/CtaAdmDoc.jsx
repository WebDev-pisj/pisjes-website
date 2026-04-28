import React from "react";
import Link from "next/link";

const ctaImg = "/home_1/pisjes-acting-principal.jpg";


export const CtaAdmDoc = () => {
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
             Documents Required for Admission:
              </h2>
              <p className="td_mb_30 td_white_color td_opacity_7 td_fs_18">
                In order to complete the application, you will need the following documentation readily available in English.<br/>

Copies of: (Each Copy on Separate Page)<br/>
a. Student’s valid Iqama
<br/>
b. Student’s valid passport
<br/>
c. Student’s visa page (if Iqama under process)
<br/>
d. Parent’s (Father & Mother) valid Iqama and passport
<br/>
e. Student’s birth certificate
<br/>
f. Student’s vaccination/immunization certificate
<br/>
g. Parent&apos;s visa page (if Iqama under process)
<br/>
h. Student’s report cards for all academic years (Not Applicable for Kindergarten).
<br/>
i. Original school leaving certificate from the previous school (Hard copy) (Not Applicable for Kindergarten)
<br/>
j. Three (3) passport size photographs with white background
<br/>
k. Absher of Student, Father and mother with iqama expiry date. (Desktop version)
<br/>
l. Fee Clearance certificate from pervious school (if previous school is within the Kingdom)
<br/>
Note:<br/>
1.Classes will only be allocated on submission of all above mentioned documents.
<br/>
2.Kindly make sure that your ward&apos;s Noor System file is archived or transferred to &quot;Pakistan International School Jeddah English Section&quot; by 24th August, 2026.The student cannot attend the class without transfer in Noor System as per the M.O.E instructions.
<br/>
3.Acceptance letter can be provided on demand. Application form is available on school reception, filled application form can be submitted via email on (admissions@pisjes.edu.sa) or in office.           </p>
             
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
