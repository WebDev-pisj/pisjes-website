import { AboutOne } from "@/components/about/AboutOne";
import { AboutTwo } from "@/components/about/AboutTwo";
import { AboutThree } from "@/components/about/AboutThree";
import { AboutFour } from "@/components/about/AboutFour";
import { AboutFive} from "@/components/about/AboutFive";
import { AboutSix } from "@/components/about/AboutSix";
import { AboutSeven } from "@/components/about/AboutSeven";
import { AboutEight} from "@/components/about/AboutEight";

import { BlogOne } from "@/components/blogs/BlogOne";
import { CampusOne } from "@/components/campus/CampusOne";
import { DepartmentOne } from "@/components/departments/DepartmentOne";
import { VideoOne } from "@/components/videos/VideoOne";
import { Layout } from "@/layouts/Layout";

export default function About() {
  return (
    <Layout breadcrumbTitle={"About Us"} breadcrumbSubtitle={"About Us"}>
      {/* about */}
      <AboutOne />

      {/* about */}
      <AboutTwo />
      {/* about */}
      <AboutThree />
      {/* about */}
      <AboutFive />
      {/* about */}
      <AboutFour />
      {/* about */}
      <AboutSeven />
      {/* about */}
      <AboutSix />
      {/* about */}
      <AboutEight />

      {/* campus */}
      <CampusOne />

      {/* departments */}
      <DepartmentOne />

      {/* video */}
      <VideoOne />

      {/* blog */}
      <BlogOne />
    </Layout>
  );
}
