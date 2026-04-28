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

const discountPolicy = [
  {
    child: "First Child",
    discount: "Nil",
  },
  {
    child: "Second Child",
    discount: "20 %",
  },
  {
    child: "Third Child",
    discount: "30 %",
  },
  {
    child: "Fourth Child Onwards",
    discount: "40 %",
  },
];

const busFee = [
  {
    route: "Jeddah Route",
    fee: "SR 3,500",
    vat: "SR 525",
    total: "SR 4,025",
  },
  {
    route: "Makkah Route",
    fee: "SR 4,500",
    vat: "SR 675",
    total: "SR 5,175",
  },
];

const sportsAndWelfareFee = [
  {
    level: "All grade levels",
    fee: "SR 350",
    vat: "SR 52.50",
    total: "SR 402.5",
  },
];

const sportsAndWelfareFeeOtherNationals = [
  {
    level: "All grade levels",
    fee: "SR 500",
    vat: "SR 75",
    total: "SR 575",
  },
];

const itAndScienceLabFee = [
  {
    level: "Y1 to Y8",
    fee: "SR 400",
    vat: "SR 60",
    total: "SR 460",
  },
  {
    level: "Y9 & Y10 (Pure Commerce)",
    fee: "SR 400",
    vat: "SR 60",
    total: "SR 460",
  },
  {
    level: "Y9 & Y10 (Pure Science & Combination)",
    fee: "SR 800",
    vat: "SR 120",
    total: "SR 920",
  },
  {
    level: "AS & A2 (Per lab subject)",
    fee: "SR 400",
    vat: "SR 60",
    total: "SR 460",
  },
];

const itAndScienceLabFeeOtherNationals = [
  {
    level: "Y1 to Y8",
    fee: "SR 500",
    vat: "SR 75",
    total: "SR 575",
  },
  {
    level: "Y9 & Y10 (Pure Commerce)",
    fee: "SR 500",
    vat: "SR 75",
    total: "SR 575",
  },
  {
    level: "Y9 & Y10 (Pure Science & Combination)",
    fee: "SR 1,000",
    vat: "SR 150",
    total: "SR 1,150",
  },
  {
    level: "AS & A2 (Per lab subject)",
    fee: "SR 500",
    vat: "SR 75",
    total: "SR 575",
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

          <div className="td_fee_block">
            <h3 className="td_fee_block_title">Discount Policy:</h3>
            <p>Discount for Siblings (Not applicable to A&apos; Level Students)</p>
            <div className="td_table_1 td_fee_table">
              <table>
                <thead>
                  <tr>
                    {discountPolicy.map((item) => (
                      <th key={item.child}>{item.child}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {discountPolicy.map((item) => (
                      <td key={item.child}>{item.discount}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="td_fee_notice td_type_2">
            <p className="mb-0">Discount applies only to the tuition fee.</p>
          </div>

          <div className="td_fee_block">
            <h3 className="td_fee_block_title">Bus Fee:</h3>
            <div className="td_table_1 td_fee_table">
              <table>
                <thead>
                  <tr>
                    <th>Route</th>
                    <th>Fee (per annum)</th>
                    <th>VAT (per annum)</th>
                    <th>Fee Including VAT</th>
                  </tr>
                </thead>
                <tbody>
                  {busFee.map((item) => (
                    <tr key={item.route}>
                      <td>{item.route}</td>
                      <td>{item.fee}</td>
                      <td>{item.vat}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="td_fee_block">
            <h3 className="td_fee_block_title">Sports & Welfare Fee:</h3>
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
                  {sportsAndWelfareFee.map((item) => (
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

          <div className="td_fee_block">
            <h3 className="td_fee_block_title">
              Sports & Welfare Fee: (Other Nationals)
            </h3>
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
                  {sportsAndWelfareFeeOtherNationals.map((item) => (
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

          <div className="td_fee_block">
            <h3 className="td_fee_block_title">IT & Science Lab Fee:</h3>
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
                  {itAndScienceLabFee.map((item) => (
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

          <div className="td_fee_block">
            <h3 className="td_fee_block_title">
              IT & Science Lab Fee:(Other Nationals)
            </h3>
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
                  {itAndScienceLabFeeOtherNationals.map((item) => (
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

          <div className="td_fee_block">
            <h3 className="td_fee_block_title">Fee Payment:</h3>
            <p>
              The aforementioned fee is for a complete academic year or part of
              it. Fee must be paid in full either at the start of the academic
              year or in two installments (September & February).
              <br />
              A Monthly installment option is offered to salaried parents for
              their convenience. The yearly tuition fee must be paid in 10
              monthly installments due at the start of each month (September to
              June).Monthly fee including VAT MUST be paid by the 15th of each
              month without exception.
              <br />
              <br />
              15% VAT is effective from July 1, 2020.
            </p>
          </div>

          <div className="td_fee_notice td_type_2 td_mb_0">
            <p className="mb-0">
              Note: The IGCSE/A Level CAIE /Board Examination registration fee
              is due in January of each calendar year. The school fee must also
              be paid in full for the academic year before the statement of
              entry is issued (in March) for all students appearing in IGCSE &
              A Level CAIE Examinations in May/June. Parents are advised to
              plan their payments accordingly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
