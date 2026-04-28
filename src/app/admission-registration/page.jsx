
import { PisjesAdmissionReg } from "@/components/faqs/PisjesAdmissionReg";
import { Layout } from "@/layouts/Layout";

export default function AdmissionReg() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Admission"}
      breadcrumbSubtitle={" Admission Registration"}>
      
      {/* faqs */}
      <PisjesAdmissionReg />


    </Layout>
  );
}
