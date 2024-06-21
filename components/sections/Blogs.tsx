"use client";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadTitle } from "@/ui/Typography";
import SingleDoctor from "@/ui/SingleDoctor";
import RosePetalTexture from "@/ui/rosePetalTexture";
import dummi from "@/assets/images/home/hero session e.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Blogs = ({ blogs }: { blogs: BlogsType }) => {
  return (
    <SectionWrapper
      classTop="overflow-hidden relative z-0"
      classBottom={`${main_padding.t} flex-col overflow-visible`}>
      <HeadTitle className="mt-1">Blogs</HeadTitle>
      <div data-aos="fade-up" className="flex mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          data-aos-duration="700"
          loop
          autoplay={{
            delay: 3500,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          speed={1200}
          modules={[Autoplay]}
          className="mySwiper !ml-0">
          {[
            ...blogs.blogs.nodes,
            ...blogs.blogs.nodes,
            ...blogs.blogs.nodes,
            ...blogs.blogs.nodes,
          ].map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="relative z-0 !flex flex-col items-start justify-end  px-4 py-4 aspect-[9/13] overflow-hidden rounded-lg bg-black after:absolute after:w-full after:h-1/2 after:bg-gradient-to-t to-transparent from-black/90 after:bottom-0 after:left-0 after:-z-10 ">
              <h3 className="font-bold capitalize text-base line-clamp-3 text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-white font-normal inline line-clamp-1 mt-1">
                Written by :{" "}
                <span className="font-bold capitalize ">
                  {item.author.node.name}
                </span>
              </p>
              <Image
                src={item.acf.featuredImage.sourceUrl}
                alt={item.acf.featuredImage.altText}
                fill
                loading="lazy"
                className="-z-10 object-cover opacity-70"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};

export default Blogs;
