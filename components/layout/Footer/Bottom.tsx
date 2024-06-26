import React from "react";
import fb from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import linkedin from "@/assets/icons/linkedin-with-circle.svg";
import telegram from "@/assets/icons/telegram-fill.svg";
import Link from "next/link";
import Image from "next/image";

const Bottom = ({ data }: { data: FooterType }) => {
  return (
    <div className="flex items-center justify-between md:gap-20 gap-3 w-full py-8 max-md:flex-col-reverse">
      <p className="text-sm max-md:text-center">
        © 2024 KERF Hospital. All rights reserved. <br />
        Designed by{" "}
        <a href="https://codefacetech.com/" target="_blank">
          Codeface
        </a>
      </p>
      <div className="flex items-center justify-center gap-4">
        {data.utility.acf.socialMedia.map((item, idx) => (
          <Link
            key={idx}
            href={item.link ? item.link : "javascript:void(0)"}
            shallow
            target="_blank">
            <Image
              src={item.icon.sourceUrl}
              alt=""
              width={32}
              height={32}
              loading="lazy"
              className="object-contain aspect-square w-auto h-8"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
