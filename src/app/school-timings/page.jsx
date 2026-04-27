import { SchoolTimings } from "@/components/contacts/SchoolTimings";
import { Layout } from "@/layouts/Layout";

export default function SchoolTimingsContent() {
  return (
    <Layout
      header={1}
      footer={1}
      bodyClass="td_theme_1"
      breadcrumbTitle={"Academics"}
      breadcrumbSubtitle={"School Timings"}
    >
      <div className="td_height_120 td_height_lg_80" />
      <SchoolTimings />
      <div className="td_height_120 td_height_lg_80" />
    </Layout>
  );
}
