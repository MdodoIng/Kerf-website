import main_padding from "@/styles/padding";
import SectionWrapper from "../SectionWrapper";
import mainImage from "@/assets/images/home/contact us.webp";
import Image from "next/image";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import hospitalIcon from "@/assets/icons/hospital.svg";
import homeWorkIcon from "@/assets/icons/home work.svg";
import { NormalBtn } from "@/ui/buttons";
import arrow from "@/assets/icons/arrow.svg";

const buttons = [
  {
    title: "HOSPITAL",
    subtitle: "Book an Appointment",
    link: "",
    icon: hospitalIcon,
  },
  {
    title: "INTERNATIONAL PATIENT CARE",
    subtitle: "Visit Now",
    link: "",
    icon: homeWorkIcon,
  },
];

const ContactUs = ({ data }: { data: HomePageType }) => {
  const isData = data.page.acf.sectionContactUs;
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col`}>
      <HeadSubtitle className="uppercase">{isData.subtitle}</HeadSubtitle>
      <HeadTitle className="mt-1">{isData.title}</HeadTitle>
      <div className="grid md:grid-cols-[2fr_1fr] md:mt-16 mt-8 md:gap-20 gap-10">
        <Image
          src={isData.sectionImage.sourceUrl}
          alt={isData.sectionImage.altText}
          data-aos="fade-up"
          width={800}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl overflow-hidden max-md:aspect-square"
        />

        <div className="flex flex-col">
          <h3 data-aos="fade-up" className="text-3xl font-bold">
            {isData.sectionTitle}
          </h3>
          <SectionDescription className="mt-2">
            {isData.sectionDescription}
          </SectionDescription>

          <div className="grid grid-rows-2 w-full gap-5 mt-6">
            {isData.links.map((item, idx) => (
              <NormalBtn
                key={idx}
                href={item.link}
                className={`flex items-center justify-between gap-6 2xl:min-h-[120px]  ${idx % 2 === 0 ? "bg-gradient-to-r from-[#36d7c6] to-[#2ebbaf]" : "bg-gradient-to-r from-[#539fbd] to-[#3682a0]"}`}>
                <div className="flex items-center justify-start gap-6">
                  <Image
                    src={item.icon.sourceUrl}
                    alt={item.icon.altText}
                    width={20}
                    height={20}
                    loading="lazy"
                    className="object-contain h-6"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-semibold uppercase leading-[130%]">
                      {item.title}
                    </h1>
                    <p className="text-xs">{item.linkTitle}</p>
                  </div>
                </div>
                <Image
                  src={arrow}
                  alt=""
                  width={20}
                  height={10}
                  className="object-contain h-4
                "
                />
              </NormalBtn>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactUs;
