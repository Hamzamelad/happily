import Link from "next/link";
import HappienessWheel from "@/components/happieness-wheel";
import AspectWheel from "@/components/aspect-wheel";

const Main = () => {
  return (
    <div className="relative w-[31vw] aspect-square mx-auto flex items-center justify-center">
      <HappienessWheel />
      <AspectWheel to="/achivement" className="-top-[10%] -left-[0%]">
        Achivement
      </AspectWheel>
      <AspectWheel to="/mental-health" className="-top-[10%] -right-[0%]">
        <span>Mental Health</span>
      </AspectWheel>
      <AspectWheel to="/achivement" className="bottom-[13%] -left-[16%]">
        Relationships
      </AspectWheel>
      <AspectWheel to="/achivement" className="bottom-[13%] -right-[16%]">
        Emotions
      </AspectWheel>
      <AspectWheel to="/achivement" className="-bottom-[20%] ">
        physical
      </AspectWheel>
    </div>
  );
};

export default Main;
