import Image from "next/image";
import logo from "@/assets/images/logo.webp";

const loading = () => {
  return (
    <div className="w-screen h-svh bg-off-white flex items-center justify-center ">
      <div
        role="status"
        className="flex items-center justify-center sm:h-20 h-[45px] max-w-sm  rounded-lg animate-pulse">
        <Image
          src={logo}
          alt=""
          placeholder="empty"
          priority
          className="h-full w-full object-contain"
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default loading;
