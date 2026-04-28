import { EntranceExamScheduleTable } from "@/components/contacts/EntranceExamScheduleTable";
import { Layout } from "@/layouts/Layout";

export default function AdmissionSchedulePage() {
  return (
    <Layout
      header={1}
      footer={1}
      bodyClass="td_theme_1"
      breadcrumbTitle={"Entrance Exam Schedule"}
      breadcrumbSubtitle={"Admissions"}
    >
      <div className="td_height_120 td_height_lg_80" />
      <EntranceExamScheduleTable />
      <div className="td_height_120 td_height_lg_80" />
    </Layout>
  );
}
