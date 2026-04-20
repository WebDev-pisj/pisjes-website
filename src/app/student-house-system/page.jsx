import { StudentHouseSystemContent } from "@/components/student_house_system/StudentHouseSystemContent";
import { Layout } from "@/layouts/Layout";

export default function StudentHouseSystemPage() {
  return (
    <Layout
      header={1}
      footer={1}
      bodyClass="td_theme_1"
      breadcrumbTitle={"Student Life"}
      breadcrumbSubtitle={"Student House System"}
    >
      <StudentHouseSystemContent />
    </Layout>
  );
}
