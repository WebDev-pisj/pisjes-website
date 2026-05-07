import { ContentCieDocReq } from "@/components/events/ContentCieDocReq";
import { Layout } from "@/layouts/Layout";

export default function CieDocRequest() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Academics"}
      breadcrumbSubtitle={"Document Requests ( IGCSE & A Levels)"}
    >
      <ContentCieDocReq />
    </Layout>
  );
}
