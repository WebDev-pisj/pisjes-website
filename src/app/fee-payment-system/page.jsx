import { ContentFeePayment } from "@/components/events/ContentFeePayment";
import { Layout } from "@/layouts/Layout";

export default function FeePaymentSystem() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Admissions"}
      breadcrumbSubtitle={"Fee Payment System"}
    >
      <ContentFeePayment />
    </Layout>
  );
}
