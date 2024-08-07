import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";

import Image from "next/image";
import { dummiSection } from "@/assets/images";

const Partnering = ({ data }: { data: AboutUsPageType }) => {
  const isData = data.page?.acf.sectionMedicalInsurance;

  return (
    <SectionWrapper
      classBottom={`${main_padding.y} grid md:grid-cols-[1fr_1.4fr] md:gap-20 gap-10 items-center h-max z-50`}>
      <div className="flex flex-col h-full justify-center ">
        <HeadTitle>{isData.title}</HeadTitle>
        <span
          data-aos="fade-up"
          className="h-0.5 w-[200px] my-4 bg-[#4a4a48] rounded-full"
        />
        <SectionDescription data-aos="fade-up">
          {isData.description}
        </SectionDescription>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full w-full relative z-0 bg-[#dffeff] rounded-2xl gap-10 py-20 px-10">
        {isData.companyLogo.map((item, idx) => (
          <Image
            data-aos="fade-up"
            data-aos-delay={50 * idx}
            key={idx}
            src={item.logoImage.sourceUrl ?? dummiSection}
            alt={item.logoImage.altText}
            width={100}
            height={100}
            className="h-[40px] w-auto object-contain "
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Partnering;
