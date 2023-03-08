import { NextPage } from "next";
import Link from "next/link";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  text: string;
}

const CardContainer: NextPage<SectionProps> = ({ children, title, text }) => {
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

        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
          <div className="md:col-span-12 text-center">
            <Link
              href="/"
              className="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              Explore All Items{" "}
              <i className="uil uil-arrow-right align-middle"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
