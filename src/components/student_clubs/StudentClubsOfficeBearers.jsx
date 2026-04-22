import React from "react";

const clubCards = [
  { title: "Drama Club", image: "/home_1/campus_life_1.jpg" },
  { title: "Drama Club", image: "/home_1/campus_life_2.jpg" },
  { title: "Science Club", image: "/home_1/campus_life_3.jpg" },
  { title: "Science Club", image: "/home_1/campus_life_4.jpg" },
  { title: "Community Service Club", image: "/home_1/campus_life_1.jpg" },
  { title: "Community Service Club", image: "/home_1/campus_life_2.jpg" },
  { title: "Art Club", image: "/home_1/campus_life_3.jpg" },
  { title: "Art Club", image: "/home_1/campus_life_4.jpg" },
  { title: "Literary Club", image: "/home_1/campus_life_1.jpg" },
  { title: "Literary Club", image: "/home_1/campus_life_2.jpg" },
];

export const StudentClubsOfficeBearers = () => {
  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div
              className="rounded-3"
              style={{ backgroundColor: "#f0f0f0", padding: "28px 24px" }}
            >
              <div className="td_section_heading td_style_1 text-center">
                <h2 className="td_section_title td_fs_48 td_mb_15">
                  Office Bearers- Senior School
                </h2>
                <hr className="mt-0 mb-4" />
                <p className="td_section_subtitle td_fs_18 td_heading_color td_opacity_7 mb-0 text-start">
                  Introducing to you the Club Office Bearers of Senior School
                  for the Academic Session 2025-2026 for our clubs: Arts,
                  Community Service, Drama, Literary, and Science.
                  <br />
                  We wish them each the best of luck for taking on their roles
                  and the associated responsibilities of school ambassadorship
                  and student-voice representation.
                </p>
              </div>
              <div className="td_height_40 td_height_lg_30" />
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
                {clubCards.map((card, index) => (
                  <div className="col" key={`${card.title}-${index}`}>
                    <div
                      className="h-100"
                      style={{
                        border: "1px solid #2e2e2e",
                        backgroundColor: "#fff",
                      }}
                    >
                      <div className="p-2 text-center">
                        <h3
                          className="td_fs_16 td_semibold mb-2"
                          style={{ lineHeight: "1.3" }}
                        >
                          {card.title}
                        </h3>
                        <img
                          src={card.image}
                          alt={`${card.title} office bearers`}
                          className="w-100"
                          style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
