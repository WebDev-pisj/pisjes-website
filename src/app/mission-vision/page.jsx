import { PisjesMissionVision } from "@/components/about/PisjesMissionVision";

import { CtaPisj } from "@/components/cta/CtaPisj";



import { VideoTwo } from "@/components/videos/VideoTwo";
import { Layout } from "@/layouts/Layout";

export default function MissionVision() {
  return (
    <Layout header={1} footer={1} bodyClass="td_theme_1" breadcrumbTitle={"About"} breadcrumbSubtitle={"PISJ-ES Vision, Mission, Values & Goals"}>
     

      {/* about */}
      <PisjesMissionVision />

    
      {/* cta */}
      <CtaPisj />

    </Layout>
  );
}
