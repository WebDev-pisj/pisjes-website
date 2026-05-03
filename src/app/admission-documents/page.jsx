import { ContentDocReq } from "@/components/events/ContentDocReq";
import { Layout } from "@/layouts/Layout";

export default function AdmissionDocuments() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Admissions"}
      breadcrumbSubtitle={"Documents Required"}
    >
      <ContentDocReq />
    </Layout>
  );
}
