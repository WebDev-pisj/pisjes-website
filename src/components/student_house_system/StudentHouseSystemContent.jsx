import React from "react";

const founders = [
  {
    name: "Muhammad Ali Jinnah",
    image: "/home_1/campus_life_1.jpg",
  },
  {
    name: "Sir Syed Ahmed Khan",
    image: "/home_1/campus_life_2.jpg",
  },
  {
    name: "Mohammad Ali Johar",
    image: "/home_1/campus_life_3.jpg",
  },
  {
    name: "Dr. Muhammad Iqbal",
    image: "/home_1/campus_life_4.jpg",
  },
];

const sportsRowImages = ["/home_1/campus_life_1.jpg", "/home_1/campus_life_2.jpg"];

const galleryLeft = [
  "/home_1/campus_life_1.jpg",
  "/home_1/campus_life_2.jpg",
  "/home_1/campus_life_3.jpg",
  "/home_1/campus_life_4.jpg",
];

const galleryRight = [
  "/home_1/campus_life_3.jpg",
  "/home_1/campus_life_4.jpg",
  "/home_1/campus_life_1.jpg",
  "/home_1/campus_life_2.jpg",
];

export const StudentHouseSystemContent = () => {
  return (
    <section className="td_house_system_page">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            {/* Section 1 — intro + house names + founder portraits */}
            <div className="td_house_panel td_mb_50 td_mb_lg_40">
              <h2 className="td_house_title td_fs_36">
                House System – A Synergy of Academics, Sports &amp;
                Extracurricular Activities
              </h2>
              <hr className="td_house_rule" />
              <p className="td_house_body mb-0">
                PISJ-ES&apos; House System in a perfect synergy of Sports and
                Extracurricular activities provides our students the boundless
                opportunities to stay motivated and develop an environment of
                healthy competition in all arenas of learning.
              </p>
              <div className="td_height_20" />
              <p className="td_house_body mb-0">
                The houses have been entitled after the legendary personalities
                of our history including{" "}
                <span className="td_house_name_highlight">
                  Muhammad Ali Jinnah, Dr. Muhammad Iqbal, Sir Syed Ahmed Khan
                  and Mohammad Ali Johar.
                </span>{" "}
                Associating houses with the valiant personalities is to instill
                in our students the passion for learning, patriotism, loyalty,
                honesty, good citizenship, sense of responsibility and discipline
                to work towards the prosperity of our country.
              </p>
              <div className="td_house_portrait_grid">
                {founders.map((item) => (
                  <div className="td_house_portrait" key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <div className="td_house_portrait_caption">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 — development + sports (text + two framed images) */}
            <div className="td_mb_50 td_mb_lg_40">
              <p className="td_house_body td_fs_18">
                Being insistent on the fact that our young learners can influence
                future, they are educated that intelligence and character are not
                something, one is born with but can be developed through sports
                and extra-curricular activities alongside Academics.
              </p>
              <p className="td_house_body td_fs_18 mb-0">
                The importance of sports at PISJ-ES encompasses more than just the
                benefit of a physical activity. Having set high aim to enhance the
                quality of sporting opportunities through the curriculum while
                increasing the self-esteem and mental alertness, coaching system
                has been developed, combined with the gymnastics and athletic
                activities.
              </p>
              <div className="td_height_35 td_height_lg_25" />
              <div className="row g-4">
                {sportsRowImages.map((src, index) => (
                  <div className="col-md-6" key={`sports-${index}`}>
                    <div className="td_house_frame">
                      <img
                        src={src}
                        alt={`Sports and student life ${index + 1}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 — programmes, competition, points, prefect + galleries */}
            <div>
              <p className="td_house_body td_fs_18">
                With the intention to provide unique opportunity to motivate and
                inspire students across the grade levels, different sports
                activities including Football, Table Tennis, Squash, Cricket,
                Badminton, Basketball etc. are offered. No matter what experience
                a student has, talent or ability, the opportunities are open for
                all students in the Middle and Senior school.
              </p>
              <p className="td_house_body td_fs_18">
                To develop an atmosphere of healthy competition in all domains,
                the houses will be put in vying in all the school activities,
                including declamations/debates, Arts, Quran, Spelling, hosting,
                National day celebrations etc.
              </p>
              <p className="td_house_body td_fs_18">
                Consolidated house points, including sport day points and the
                points scored in extracurricular activities and inter or intra
                school sport tournaments throughout the year will be added to
                declare the winner house on the award ceremony.
              </p>
              <p className="td_house_body td_fs_18 mb-0">
                Discipline and Education complement each other to calibrate our
                faith, confidence and drive to emerge as wholesome existents of
                today and tomorrow with the aspirations to shape the world into a
                better place. Therefore, refusing to forsake its importance in
                Education,{" "}
                <span className="td_house_prefect_highlight">
                  The Prefect System
                </span>{" "}
                has been activated across the grade level. The class rep as
                prefects from each house have been chosen to ensure discipline
                inside and outside the classroom. Setting high expectations for
                ourselves as educationists, we strive to instill in our students
                the sense of ownership for their institution and sense of
                citizenship and responsibility for their country and the world at
                large.
              </p>
              <div className="td_height_40 td_height_lg_30" />
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="td_house_gallery_box">
                    <div className="td_house_gallery_grid">
                      {galleryLeft.map((src, index) => (
                        <img
                          key={`gl-${index}`}
                          src={src}
                          alt={`House system gallery ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="td_house_gallery_box">
                    <div className="td_house_gallery_grid">
                      {galleryRight.map((src, index) => (
                        <img
                          key={`gr-${index}`}
                          src={src}
                          alt={`House system gallery ${index + 5}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
