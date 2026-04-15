import { Layout } from "@/layouts/Layout";
import { ContactPisjes } from "@/components/contacts/ContactPisjes";

const contactImg = "/others/contact_img.jpg";

export default function contactDetails() {
  return (
    
    <Layout header={1} footer={1} bodyClass="td_theme_1" breadcrumbTitle={"Contact"} breadcrumbSubtitle={"Contact"}>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-1">
              <div className="row align-items-center td_gap_y_40">
                <div className="col-lg-7">
                  <img src={contactImg} alt="Contact" className="w-100" />
                </div>
                <div className="col-xl-4 offset-xl-1 col-lg-5">
                  <div className="td_contact_info">
                    <div className="td_section_heading td_style_2 td_mb_20">
                      <h2 className="td_contact_info_title td_fs_36 mb-0">
                        Our School Address
                      </h2>
                    </div>
                    <div className="td_mb_40">
                      <h2 className="td_fs_24 td_semibold td_mb_20">
                       P.O Box 5055, Pakistan International School Jeddah – English Section,
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                       5139 Al-Safwah Al-Shemaliah,<br />
Al Rehab, Jeddah 23344, Saudi Arabia
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a href="tel:+966-12-6738531">Tel:+966-12-6738531/6738670</a>
                     <br />
                      </p>
                      { <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
                        <a href="#">Fax:6745654</a>
                      </p> }
                    </div>
                   <div>


                     {/*  <h2 className="td_fs_24 td_semibold td_mb_20">
                        Monica Campus
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                        100 Wilshire Blvd, Suite 700 Santa Monica, CA 90401, USA
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a href="tel:+1(310)620-8565">+1 (310) 620-8565</a>
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </p> */}
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> <div className="td_height_120 td_height_lg_80" />
<ContactPisjes></ContactPisjes>
       

        <div className="td_map">
          <iframe
            id="map"
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.893314714173!2d39.23020091494129!3d21.551026485717873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1894b579dab%3A0x516141c41c2db6b8!2sPakistan%20International%20School%20Jeddah%20-%20English%20Section!5e0!3m2!1sen!2ssa!4v1580036173629!5m2!1sen!2ssa"
            allowFullScreen
          />
        </div>
      </section>
    </Layout>
  );
}
