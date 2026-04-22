
import { PisjesPolicies } from "@/components/faqs/PisjesPolicies";
import { Layout } from "@/layouts/Layout";

export default function SchoolPoliciesPage() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"About"}
      breadcrumbSubtitle={"School Policies"}>
      
      {/* faqs */}
      <PisjesPolicies />


    </Layout>
  );
}
