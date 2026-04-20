import React from "react";

const newAdmissionCharges = [
  { title: "Registration Fee", fee: "SR 500", vat: "SR 75", total: "SR 575" },
  { title: "Entrance Fee", fee: "SR 1,000", vat: "SR 150", total: "SR 1,150" },
  { title: "Security Deposit", fee: "SR 1,000", vat: "---", total: "SR 1,000" },
];

const tuitionFee = [
  {
    level: "PG, YN and YR",
    fee: "SR 9,000",
    vat: "SR 1,350",
    total: "SR 10,350",
  },
  {
    level: "Y1, Y2 and Y3",
    fee: "SR 11,000",
    vat: "SR 1,650",
    total: "SR 12,650",
  },
  {
    level: "Y4 & Y5",
    fee: "SR 12,200",
    vat: "SR 1,830",
    total: "SR 14,030",
  },
  {
    level: "Y6, Y7 and Y8",
    fee: "SR 13,500",
    vat: "SR 2,025",
    total: "SR 15,525",
  },
  {
    level: "Y9 & Y10",
    fee: "SR 14,000",
    vat: "SR 2,100",
    total: "SR 16,100",
  },
  {
    level: "AS & A2",
    fee: "SR 15,500",
    vat: "SR 2,325",
    total: "SR 17,825",
  },
];

const tuitionFeeOtherNationals = [
  {
    level: "PG, YN and YR",
    fee: "SR 11,000",
    vat: "SR 1,650",
    total: "SR 12,650",
  },
  {
    level: "Y1, Y2 and Y3",
    fee: "SR 13,000",
    vat: "SR 1,950",
    total: "SR 14,950",
  },
  {
    level: "Y4 & Y5",
    fee: "SR 14,200",
    vat: "SR 2,130",
    total: "SR 16,330",
  },
  {
    level: "Y6, Y7 and Y8",
    fee: "SR 15,500",
    vat: "SR 2,325",
    total: "SR 17,825",
  },
  {
    level: "Y9 & Y10",
    fee: "SR 16,000",
    vat: "SR 2,400",
    total: "SR 18,400",
  },
  {
    level: "AS & A2",
    fee: "SR 17,500",
    vat: "SR 2,625",
    total: "SR 20,125",
  },
];

export const ContactDirectoryTable = () => {
  return (
    <section className="td_fee_structure_wrap">
      <div className="container">
        <div className="td_fee_structure_card">
          <h2 className="td_fee_structure_title">Fee Structure</h2>

          <div className="td_fee_block">
            <h3 className="td_fee_block_title">
              Admission Qualification Examination Fee:
            </h3>
            <div className="td_table_1 td_fee_table">
              <table>
                <thead>
                  <tr>
                    <th>Fee</th>
                    <th>VAT</th>
                    <th>Fee Including VAT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SR 100</td>
                    <td>SR 15</td>
                    <td>SR 115</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="td_fee_highlight_text">
            After successfully passing the PISJES admission criteria :
          </p>
          <div className="td_fee_notice">
            <p className="mb-0">
              New Admissions Fee is applicable to all grade levels.
              <br />
              Admission Charges Payable at the time of Admission for session
              2025-2026
            </p>
          </div>

          <div className="td_fee_block">
            <h3 className="td_fee_block_title">New Admission Charges:</h3>
            <div className="td_table_1 td_fee_table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Fee</th>
                    <th>VAT</th>
                    <th>Fee Including VAT</th>
                  </tr>
                </thead>
                <tbody>
                  {newAdmissionCharges.map((item) => (
                    <tr key={item.title}>
                      <td>{item.title}</td>
                      <td>{item.fee}</td>
                      <td>{item.vat}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="td_fee_notice td_type_2">
            <p className="mb-0">
              All the charges or fee are non-refundable except Security Deposit.
              <br />
              (Security Deposit is refunded at the time of leaving the school)
            </p>
          </div>

          <div className="td_fee_block">
            <h3 className="td_fee_block_title">Tuition Fee:</h3>
            <div className="td_table_1 td_fee_table">
              <table>
                <thead>
                  <tr>
                    <th>Grade Levels</th>
                    <th>Fee (per annum)</th>
                    <th>VAT (per annum)</th>
                    <th>Fee Including VAT</th>
                  </tr>
                </thead>
                <tbody>
                  {tuitionFee.map((item) => (
                    <tr key={item.level}>
                      <td>{item.level}</td>
                      <td>{item.fee}</td>
                      <td>{item.vat}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="td_fee_block td_mb_0">
            <h3 className="td_fee_block_title">Tuition Fee:(Other Nationals)</h3>
            <div className="td_table_1 td_fee_table">
              <table>
                <thead>
                  <tr>
                    <th>Grade Levels</th>
                    <th>Fee (per annum)</th>
                    <th>VAT (per annum)</th>
                    <th>Fee Including VAT</th>
                  </tr>
                </thead>
                <tbody>
                  {tuitionFeeOtherNationals.map((item) => (
                    <tr key={item.level}>
                      <td>{item.level}</td>
                      <td>{item.fee}</td>
                      <td>{item.vat}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

            <p className="td_fee_highlight_text">
            After successfully passing the PISJES admission criteria :
          </p>
          <div className="td_fee_notice">
            <p className="mb-0">
              New Admissions Fee is applicable to all grade levels.
              <br />
              Admission Charges Payable at the time of Admission for session
              2025-2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
