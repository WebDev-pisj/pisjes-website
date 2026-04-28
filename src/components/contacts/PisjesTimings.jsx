"use client";

import React from "react";
import Link from "next/link";
import { useTabs } from "@/lib/hooks/useTabs";

const regularSchoolTimings = [
  {
    gradeLevel: "PG -YR",
    morningShift: "07:00 AM – 12:00 PM",
    eveningShift: "01:00 PM– 6:00 PM",
  },
  {
    gradeLevel: "Y1-Y4",
    morningShift: "07:00 AM - 12:15 PM",
    eveningShift: "01:00 PM– 6:15 PM",
  },
  {
    gradeLevel: "Y5-Y8",
    morningShift: "------------------",
    eveningShift: "01:00 PM – 6:15 PM",
  },
  {
    gradeLevel: "Y9-Y10",
    morningShift: "6:45 AM – 12:40 PM",
    eveningShift: "-----------",
  },
  {
    gradeLevel: "AS - A2",
    morningShift: "6:45 AM – 12:50 PM",
    eveningShift: "-----------",
  },
];

const officeVisitingHours = [
  { office: "Fee Counter/Accounts", time: "07:00 AM – 05:00 PM" },
  { office: "Book Bank", time: "07:00 AM – 05:00 PM" },
  { office: "Admissions & Student Affairs", time: "08:00 AM – 03:00 PM" },
  { office: "CIE & Career Counsellor", time: "08:00 AM – 03:00 PM" },
];

export const PisjesTimings = () => {
  useTabs();

  return (
    <section className="td_fee_structure_wrap">
      <div className="container">
        <div className="td_fee_structure_card">
          <h2 className="td_fee_structure_title">School Timings</h2>

          <div className="td_tabs td_style_1">
            <ul className="td_tab_links td_style_3 td_mp_0 td_medium td_heading_color">
              <li className="active">
                <a href="#school_timing_tab_1">Regular School Timings</a>
              </li>
              <li>
                <a href="#school_timing_tab_2">Office Visiting Hours</a>
              </li>
            </ul>
            <div className="td_height_30 td_height_lg_30" />

            <div className="td_tab_body">
              <div className="td_tab active" id="school_timing_tab_1">
                <div className="td_fee_block">
                  <h3 className="td_fee_block_title">School Timings</h3>
                  <p>
                    Below timings must be followed for each grade level
                    according to their session.
                  </p>
                  <div className="td_table_1 td_fee_table">
                    <table>
                      <thead>
                        <tr>
                          <th>Grade Level</th>
                          <th>Morning Shift</th>
                          <th>Evening Shift</th>
                        </tr>
                      </thead>
                      <tbody>
                        {regularSchoolTimings.map((item) => (
                          <tr key={item.gradeLevel}>
                            <td>{item.gradeLevel}</td>
                            <td>{item.morningShift}</td>
                            <td>{item.eveningShift}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="td_fee_block td_mb_0">
                  <p className="mb-3">
                    <strong>Note (Senior School): </strong>
                    Gate#4 & Gate#3 will close at 7:00 a.m and students arriving
                    after 7:00 a.m will be directed to the Student Affairs
                    department. This will take effect from Sunday, 18th January
                    2026.
                  </p>
                  <p className="mb-3">
                    <strong>Note (Junior/Middle School): </strong>
                    Please be informed that late arrival to school is not
                    allowed after 30 minutes of school commencement (7:30 AM for
                    morning students and 01:30 PM for afternoon students).
                  </p>
                  <p className="mb-0">
                    For more information, please refer to PISJ-ES policies on
                    the school&apos;s website: <Link href="/policies">School Policies</Link>
                  </p>
                </div>
              </div>

              <div className="td_tab" id="school_timing_tab_2">
                <div className="td_fee_block td_mb_0">
                  <h3 className="td_fee_block_title">Office Visiting Hours</h3>
                  <p>
                    Office visiting hours must be observed as per the timings
                    mentioned below.
                  </p>
                  <div className="td_table_1 td_fee_table">
                    <table>
                      <thead>
                        <tr>
                          <th>Office</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {officeVisitingHours.map((item) => (
                          <tr key={item.office}>
                            <td>{item.office}</td>
                            <td>{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
