import { StudentClubsOfficeBearers } from "@/components/student_clubs/StudentClubsOfficeBearers";
import { Layout } from "@/layouts/Layout";

export default function StudentClubsPage() {
  return (
    <Layout
      header={1}
      footer={1}
      bodyClass="td_theme_1"
      breadcrumbTitle={"Student Life"}
      breadcrumbSubtitle={"Student Clubs"}
    >
      <StudentClubsOfficeBearers />
    </Layout>
  );
}
