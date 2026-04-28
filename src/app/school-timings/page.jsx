import { PisjesTimings } from "@/components/contacts/PisjesTimings";
import { Layout } from "@/layouts/Layout";

export default function SchoolTimings() {
  return (
    <Layout
      header={1}
      footer={1}
      bodyClass="td_theme_1"
      breadcrumbTitle={"Academics"}
      breadcrumbSubtitle={"School Timings"}
    >
      <div className="td_height_120 td_height_lg_80" />
      <PisjesTimings />
      <div className="td_height_120 td_height_lg_80" />
    </Layout>
  );
}
