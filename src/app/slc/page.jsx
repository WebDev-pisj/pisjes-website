import { CtaSlc } from "@/components/cta/CtaSlc";
import { Layout } from "@/layouts/Layout";

export default function Slc() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Admissions"}
      breadcrumbSubtitle={"School Leaving Certificate"}
    >
      <CtaSlc />
    </Layout>
  );
}
