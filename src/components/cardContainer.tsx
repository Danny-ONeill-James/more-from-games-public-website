import { NextPage } from "next";
import { ISectionProps } from "@/utilities/interfaces";

const CardContainer: NextPage<ISectionProps> = ({ children, title, text }) => {
  return (
    <>
      <div className="container md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            {title}
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">{text}</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {children}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
