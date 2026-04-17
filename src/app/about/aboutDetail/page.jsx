
import { AboutContainer } from "@/components/about/AboutContainer";

import { Layout } from "@/layouts/Layout";

export default function BlogWithSidebar() {
  return (
    <Layout
      breadcrumbTitle={"Blog With Sidebar"}
      breadcrumbSubtitle={"Blog With Sidebar"}
    >
      <AboutContainer>
     

        <div className="td_height_60 td_height_lg_40" />
    
      </AboutContainer>
    </Layout>
  );
}
