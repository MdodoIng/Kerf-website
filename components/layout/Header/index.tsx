import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { NormalBtn } from "@/ui/buttons";
import NavMobile from "./NavMobile";
import Top from "./Top";
import Bottom from "./Bottom";
import SectionWrapper from "@/components/SectionWrapper";
import useStore from "@/libs/store";

const Header = () => {
  const { utilities } = useStore();

  const treatments = utilities?.treatments?.treatmentCategorys?.nodes.map(
    (item) => {
      const dropDown = {
        title: item.name,
        links: item.treatments.nodes.map((i) => {
          const l = {
            title: i.title,
            link: `/treatments/${i.slug}`,
          };
          return l;
        }),
      };
      return dropDown;
    }
  );
  const departments = utilities?.departments?.departmentsTaxonomies?.edges.map(
    (item) => {
      const singleDropDown = {
        title: item.node.name,
        link: `/departments/${item.node.slug}`,
      };
      return singleDropDown;
    }
  );

  const links = () => {
    const d = utilities.header?.utility?.acf.headerLinks;
    utilities.header?.utility?.acf.headerLinks.forEach((item, idx) => {
      // if (item.title.toLowerCase() === "treatments".toLowerCase()) {
      //   item.dropDown = treatments;
      // }
      switch (item.title.toLowerCase()) {
        case "treatments".toLowerCase():
          return (d[idx].dropDown = treatments);

        case "Departments".toLowerCase():
          return (d[idx].singleDropDown = departments);
      }
    });

    return d;
  };

  return (
    <nav className="w-full absolute top-0 flex flex-col z-50 overflow-x-clip">
      <Top />
      <SectionWrapper classBottom="items-center justify-between gap-20 py-4">
        <Bottom links={links()} />
        {/* mobile  */}

        <NavMobile links={links()} />
      </SectionWrapper>
    </nav>
  );
};

export default Header;
