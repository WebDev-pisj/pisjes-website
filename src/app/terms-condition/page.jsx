import { ContentTermCondition } from "@/components/events/ContentTermCondition";
import { Layout } from "@/layouts/Layout";

export default function TermsCondition() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Admissions"}
      breadcrumbSubtitle={"Terms & Conditions"}
    >
      <ContentTermCondition />
    </Layout>
  );
}
