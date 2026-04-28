import { PisjesCurriculum } from "@/components/about/PisjesCurriculum";


import { Layout } from "@/layouts/Layout";

export default function Curriculum() {
  return (
   <Layout header={1} footer={1} bodyClass="td_theme_1" breadcrumbTitle={"About"} breadcrumbSubtitle={"Curriculum"}>
     
    {/* hero 
      <PisjesCampus2 />  */}

      {/* about */}
      <PisjesCurriculum />


    </Layout>
  );
}
