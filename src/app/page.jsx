import { Layout } from "@/layouts/Layout";
import { HeroPISJES } from "@/components/hero/HeroPISJES";
import { AboutOne } from "@/components/about/AboutOne";
import { BlogOne } from "@/components/blogs/BlogOne";
import { CampusOne } from "@/components/campus/CampusOne";
import { CoursesOne } from "@/components/courses/CoursesOne";
import { DepartmentOne } from "@/components/departments/DepartmentOne";
import { EventOne } from "@/components/events/EventOne";
import { FeatureOne } from "@/components/features/FeatureOne";
import { RateOne } from "@/components/rates/RateOne";
import { TestimonialThree } from "@/components/testimonials/TestimonialThree";
import { VideoOne } from "@/components/videos/VideoOne";
import { FunfactOne } from "@/components/fun_facts/FunfactOne";
import { BrandTwo } from "@/components/brands/BrandTwo";
import { HomeAnnouncementPopup } from "@/components/common/HomeAnnouncementPopup";

export default function Home() {
  return (
    <Layout header={1} footer={1}>
      <HomeAnnouncementPopup />
      {/*MAin Banner*/}
      <HeroPISJES />

      {/* about section of homepage*/}
      <AboutOne />

      {/* School Acceredation */}
      <RateOne />
      {/* popular 
      <CoursesOne />*/}

      {/* Admissions section */}
      <FeatureOne />

      {/* School fun facts in numbers*/}
      <FunfactOne />

      {/* Cambridge Awardees Slider */}
      <TestimonialThree />

      {/* departments 
      <DepartmentOne /> */}

      {/* our campus student life */}
      <CampusOne />

      {/*  brands 
      <div className="td_height_120 td_height_lg_80" />
      <BrandTwo />
      <div className="td_height_120 td_height_lg_80" />

*/}

      {/* video 
      <VideoOne />*/}

      {/* Gallery Events*/}
      <EventOne />

      {/* blog 
      <BlogOne />*/}
    </Layout>
  );
}
