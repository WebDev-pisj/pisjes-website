import { ContentAdmissionGuideline } from "@/components/events/ContentAdmissionGuideline";
import { Layout } from "@/layouts/Layout";

export default function AdmissionGuideline() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Admissions"}
      breadcrumbSubtitle={"Admission Process Guideline"}
    >
      <ContentAdmissionGuideline />
    </Layout>
  );
}
