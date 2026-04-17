import { PisjesCampus1 } from "@/components/about/PisjesCampus1";
// import { PisjesCampus2 } from "@/components/hero/PisjesCampus2";

import { Layout } from "@/layouts/Layout";

export default function OurCampus() {
  return (
   <Layout header={1} footer={1} bodyClass="td_theme_1" breadcrumbTitle={"About"} breadcrumbSubtitle={"Our Campus"}>
     
    {/* hero 
      <PisjesCampus2 />  */}

      {/* about */}
      <PisjesCampus1 />


    </Layout>
  );
}
