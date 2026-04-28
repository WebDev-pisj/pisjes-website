import React from "react";

const entranceExamScheduleRows = [
  { grade: "PG", date: "18th April, 2026", day: "Saturday", time: "09:00 am - 11:00 am" },
  { grade: "YN", date: "18th April, 2026", day: "Saturday", time: "09:00 am - 12:00 pm" },
  { grade: "YR", date: "18th April, 2026", day: "Saturday", time: "09:00 am - 12:00 pm" },
  { grade: "Y1 -Y4", date: "18th April, 2026", day: "Saturday", time: "09:00 am - 11:00 am" },
  { grade: "Y5 - Y7", date: "19th April, 2026", day: "Sunday", time: "10:30 am - 12:30 pm" },
  { grade: "Y8", date: "19th April, 2026", day: "Sunday", time: "10:00 am - 12:30 pm" },
  { grade: "Y9", date: "20th April, 2026", day: "Monday", time: "08:00 am - 11:30 am" },
  { grade: "Y10", date: "20th April, 2026", day: "Monday", time: "08:00 am - 11:00 am" },
];

export const EntranceExamScheduleTable = () => {
  return (
    <section className="td_fee_structure_wrap">
      <div className="container">
        <div className="td_fee_structure_card">
          <div className="td_exam_schedule_head">
            <p className="mb-0">
              <span className="td_exam_schedule_head_icon">-</span>
              Entrance Exam Schedule PG- Y10 (2026-27)
            </p>
          </div>

          <div className="td_fee_block td_mb_0">
            <div className="td_table_1 td_fee_table">
              <table>
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {entranceExamScheduleRows.map((item) => (
                    <tr key={item.grade}>
                      <td>{item.grade}</td>
                      <td>{item.date}</td>
                      <td>{item.day}</td>
                      <td>{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
