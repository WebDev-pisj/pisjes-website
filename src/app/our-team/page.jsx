 import { TeamPisjes } from "@/components/teams/TeamPisjes";
import { Layout } from "@/layouts/Layout";

export default function OurTeam() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1"
      breadcrumbTitle={"Team Members"}
      breadcrumbSubtitle={"Team Members"}
    >
      <TeamPisjes />
    </Layout>
  );
} 