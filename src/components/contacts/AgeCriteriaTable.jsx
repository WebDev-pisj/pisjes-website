import React from "react";

const ageCriteriaRows = [
  { gradeLevel: "PG", minimumAge: "3 Years", maximumAge: "3 Years and 11 Months" },
  { gradeLevel: "YN", minimumAge: "4 Years", maximumAge: "4 Years and 11 Months" },
  { gradeLevel: "YR", minimumAge: "5 Years", maximumAge: "5 Years and 11 Months" },
  { gradeLevel: "Y1", minimumAge: "6 Years", maximumAge: "6 Years and 11 Months" },
  { gradeLevel: "Y2", minimumAge: "7 Years", maximumAge: "7 Years and 11 Months" },
  { gradeLevel: "Y3", minimumAge: "8 Years", maximumAge: "8 Years and 11 Months" },
  { gradeLevel: "Y4", minimumAge: "9 Years", maximumAge: "9 Years and 11 Months" },
  { gradeLevel: "Y5", minimumAge: "10 Years", maximumAge: "10 Years and 11 Months" },
  { gradeLevel: "Y6", minimumAge: "11 Years", maximumAge: "11 Years and 11 Months" },
  { gradeLevel: "Y7", minimumAge: "12 Years", maximumAge: "12 Years and 11 Months" },
  { gradeLevel: "Y8", minimumAge: "13 Years", maximumAge: "13 Years and 11 Months" },
  { gradeLevel: "Y9", minimumAge: "14 Years", maximumAge: "14 Years and 11 Months" },
  { gradeLevel: "Y10", minimumAge: "15 Years", maximumAge: "15 Years and 11 Months" },
];

export const AgeCriteriaTable = () => {
  return (
    <section className="td_fee_structure_wrap">
      <div className="container">
        <div className="td_fee_structure_card">
          <h2 className="td_fee_structure_title">
            Age Criteria for the Admission Session 2026 - 2027
          </h2>

          <p className="td_mb_30">
            <strong>Note:</strong> Calculate your child/children&apos;s age until
            1st Sep 2026 to find out the eligibility for admission in
            different/appropriate grade levels as per the following age
            criteria.
          </p>

          <div className="td_fee_block td_mb_0">
            <div className="td_table_1 td_fee_table">
              <table>
                <thead>
                  <tr>
                    <th>Grade Level</th>
                    <th>Minimum Age</th>
                    <th>Maximum Age</th>
                  </tr>
                </thead>
                <tbody>
                  {ageCriteriaRows.map((item) => (
                    <tr key={item.gradeLevel}>
                      <td>{item.gradeLevel}</td>
                      <td>{item.minimumAge}</td>
                      <td>{item.maximumAge}</td>
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
