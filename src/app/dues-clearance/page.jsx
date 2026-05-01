
import { PisjesDuesClear } from "@/components/faqs/PisjesDuesClear";
import { Layout } from "@/layouts/Layout";

export default function DuesClearance() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Admissions"}
      breadcrumbSubtitle={"Clearance of Dues"}>
      
      {/* faqs */}
      <PisjesDuesClear />


    </Layout>
  );
}
