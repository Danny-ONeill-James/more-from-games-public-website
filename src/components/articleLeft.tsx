import Image from "next/image";
import { NextPage } from "next";
import { IArticlePage } from "@/utilities/interfaces";

const ArticleLeft: NextPage<IArticlePage> = ({
  imageLocation,
  title,
  text,
}) => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div className="lg:col-span-6 md:col-span-5">
          <div className="sticky top-20">
            <Image
              src={imageLocation}
              className="rounded-md shadow-md dark:shadow-gray-800"
              width={600}
              height={600}
              alt={title + " image"}
            />
          </div>
        </div>

        <div className="lg:col-span-6 md:col-span-7">
          <div className="">
            <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">
              {title}
            </h5>

            <div className="grid grid-cols-1 mt-8">
              <div id="StarterContent" className="mt-6">
                <div className="grid grid-cols-1">
                  <p className="text-slate-400 mb-4">{text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLeft;
