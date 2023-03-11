import Image from "next/image";
import { NextPage } from "next";
import { IVideo } from "@/utilities/interfaces";

const VideoLeft: NextPage<IVideo> = ({ embedCode, title, text }) => {
  return (
    <div className="container mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
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
        <div className="lg:col-span-6 md:col-span-5">
          <div className="sticky top-20">
            <iframe
              className="rounded-md shadow-md dark:shadow-gray-800"
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + embedCode}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLeft;
