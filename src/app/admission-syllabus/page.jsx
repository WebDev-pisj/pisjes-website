
import { PisjesAdmissionSyllabus } from "@/components/faqs/PisjesAdmissionSyllabus";
import { Layout } from "@/layouts/Layout";

export default function AdmissionSyl() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Admission"}
      breadcrumbSubtitle={" Entrance Exam Syllabus Outline"}>
      
      {/* faqs */}
      <PisjesAdmissionSyllabus />


    </Layout>
  );
}
