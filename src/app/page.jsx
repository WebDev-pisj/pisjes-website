import { Layout } from "@/layouts/Layout";
import { HeroOne } from "@/components/hero/HeroOne";
import { AboutOne } from "@/components/about/AboutOne";
import { BlogOne } from "@/components/blogs/BlogOne";
import { CampusOne } from "@/components/campus/CampusOne";
import { CoursesOne } from "@/components/courses/CoursesOne";
import { DepartmentOne } from "@/components/departments/DepartmentOne";
import { EventOne } from "@/components/events/EventOne";
import { FeatureOne } from "@/components/features/FeatureOne";
import { TestimonialOne } from "@/components/testimonials/TestimonialOne";
import { VideoOne } from "@/components/videos/VideoOne";

export default function Home() {
  return (
    <Layout header={1} footer={1}>
      {/* hero */}
      <HeroOne />

      {/* about */}
      <AboutOne />

      {/* popular */}
      <CoursesOne />

      {/* feature */}
      <FeatureOne />

      {/* campus */}
      <CampusOne />

      {/* departments */}
      <DepartmentOne />

      {/* video */}
      <VideoOne />

      {/* event schedule */}
      <EventOne />

      {/* testimonial */}
      <TestimonialOne />

      {/* blog */}
      <BlogOne />
    </Layout>
  );
}
