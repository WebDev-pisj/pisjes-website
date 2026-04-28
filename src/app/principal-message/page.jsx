import { CtaMessage } from "@/components/cta/CtaMessage";
import { Layout } from "@/layouts/Layout";

export default function PrincipalMessage() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"About"}
      breadcrumbSubtitle={"Principal Message"}
    >
      <CtaMessage />
    </Layout>
  );
}
