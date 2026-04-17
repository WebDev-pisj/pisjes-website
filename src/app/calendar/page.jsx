import { CtaCalendar } from "@/components/cta/CtaCalendar";
import { Layout } from "@/layouts/Layout";

export default function Calendar() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Academics"}
      breadcrumbSubtitle={"Academics Calendar"}
    >
      <CtaCalendar />
    </Layout>
  );
}
