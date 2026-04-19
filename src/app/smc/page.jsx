 import { TeamSMC } from "@/components/teams/TeamSmc";
import { Layout } from "@/layouts/Layout";

export default function SMC() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Team Members"}
      breadcrumbSubtitle={"School Management Council"}
    >
      <TeamSMC />
    </Layout>
  );
} 