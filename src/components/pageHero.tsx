import { NextPage } from "next";
import { useRouter } from "next/router";

import { IPageHero } from "@/utilities/interfaces";
import Link from "next/link";

const PageHero: NextPage<IPageHero> = ({ title }) => {
  const router = useRouter();
  const path = router.asPath.split("/");
  let breadcrumbs = new Array();
  for (let i = 0; i < path.length; i++) {
    breadcrumbs.push({ path: path[i], text: path[i] });
  }

  return (
    <>
      <section className="relative table w-full py-32 lg:py-40 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="text-3xl leading-normal font-medium">{title}</h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block">
            {breadcrumbs.map((breadcrumb) => {
              if (breadcrumb.text == "") breadcrumb.text = "Home";
              if (breadcrumb == breadcrumbs.slice(-1)[0]) {
                return (
                  <li
                    key={breadcrumb.text}
                    className="inline breadcrumb-item uppercase text-[13px] font-bold text-indigo-600"
                    aria-current="page"
                  >
                    {breadcrumb.text}
                  </li>
                );
              } else {
                return (
                  <li
                    key={breadcrumb.text}
                    className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"
                  >
                    <Link href={"/" + breadcrumb.path}>{breadcrumb.text}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default PageHero;
