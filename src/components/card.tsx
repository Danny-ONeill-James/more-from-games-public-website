import { NextPage } from "next";
import Image from "next/image";
import { ICardCompoent } from "@/utilities/interfaces";

const Card: NextPage<ICardCompoent> = ({
  title,
  text,
  imageLocation,
  link,
  target,
}) => {
  return (
    <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
      <div className="relative">
        <Image
          src={imageLocation}
          alt={title + " Image"}
          width="600"
          height="600"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/deftmtx9e/image/upload/e_blur:1000,q_auto:low/v1678295557/More%20From%20Games/placeholder_wxmc94_bynmht.png"
        />

        <div className="absolute bottom-0 ltr:left-0 rtl:right-0 ltr:ml-6 rtl:mr-6 mb-6 text-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l to-indigo-600 from-fuchsia-600 text-white rounded-full px-3">
          <small id="auction-item-1" className="font-semibold"></small>
        </div>
      </div>

      <div className="content p-6">
        <a
          href={link}
          className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out line-clamp-1"
          target={target}
        >
          {title}{" "}
        </a>
        <p className="text-slate-400 mt-3 line-clamp-3">{text}</p>

        <div className="mt-4 ">
          <a
            href={link}
            className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            target={target}
          >
            Read More <i className="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
