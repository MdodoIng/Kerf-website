import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";
import Doctor from "@/components/sections/Doctor";
import Blogs from "@/components/sections/Blogs";
import Content from "@/components/treatments/[slug]/Content";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import { dummiSectionHead } from "@/assets/images";
import HideBookAppointment from "@/libs/hooks/hideBookAppointment";

const page = async ({ params }: { params: { slug: string } }) => {
  const [data, treatments, treatmentsRelatedDoctors, blogs]: [
    TreatmentType,
    TreatmentCategoriesType,
    TreatmentsRelatedDoctorsType,
    BlogsType,
  ] = await Promise.all([
    getContentFromWordPress("treatment", params.slug),
    getContentFromWordPress("treatments"),
    getContentFromWordPress("treatments-related doctors", params.slug),
    getContentFromWordPress("blogs"),
  ]);
  const isData = data?.treatments?.nodes[0];

  const relatedTreatmentsData = () => {
    if (isData) {
      return isData.treatmentCategorys.nodes.flatMap((category) => {
        const matchingCategory = treatments.treatmentCategorys.nodes.find(
          (item) => item.id === category.id
        );
        return matchingCategory
          ? matchingCategory.treatments.nodes
          : treatments.treatmentCategorys.nodes.flatMap(
              (item) => item.treatments.nodes
            );
      });
    }
  };

  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Treatments",
      link: "/treatments",
    },
    {
      title: isData?.title,
      link: "",
    },
  ];

 

  return (
    <Layout pageTitle={breadcrumbs[2].title}>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={isData?.acf.bannerImage?.sourceUrl ?? dummiSectionHead}
        title={isData?.title}
        hideBookAppointment={HideBookAppointment(params.slug)}
      />
      <Content
        leftData={isData}
        relatedTreatmentsData={relatedTreatmentsData()}
      />
      {treatmentsRelatedDoctors.treatmentsTaxonomies.nodes[0]?.doctors.nodes
        .length > 0 && (
        <Doctor
          doctors={
            treatmentsRelatedDoctors?.treatmentsTaxonomies?.nodes[0]?.doctors
              .nodes
          }
        />
      )}
      {blogs?.blogs?.nodes.length > 0 && <Blogs blogs={blogs?.blogs?.nodes} />}
    </Layout>
  );
};

export default page;
