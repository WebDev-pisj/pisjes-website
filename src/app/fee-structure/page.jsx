import { ContactDirectoryTable } from "@/components/contacts/ContactDirectoryTable";
import { Layout } from "@/layouts/Layout";

export default function ContactDirectoryPage() {
  return (
    <Layout
      header={1}
      footer={1}
      bodyClass="td_theme_1"
      breadcrumbTitle={"Fee Structure"}
      breadcrumbSubtitle={"Admissions & Tuition"}
    >
      <div className="td_height_120 td_height_lg_80" />
      <ContactDirectoryTable />
      <div className="td_height_120 td_height_lg_80" />
    </Layout>
  );
}
