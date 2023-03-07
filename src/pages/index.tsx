import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/card";

const inter = Inter({ subsets: ["latin"] });

export function Home() {
  return (
    <>
      <title>More From Games</title>
      <section className="relative md:py-52 py-36 items-center overflow-hidden bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/deftmtx9e/image/upload/v1677887572/More%20From%20Games/Site/site/hero_uga4ct.png')] bg-no-repeat bg-bottom bg-cover"></div>
        <div className="container">
          <div className="grid grid-cols-1 items-center mt-10">
            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">
              More From Games
            </h4>
            <p className="text-lg max-w-xl">
              Welcome to More From Games! We are your source for everything you
              need to take your board, tabletop and roleplay games to the next
              level. Our trove of information and tools will help you get the
              most out of your gaming experience. From reviews, guides and news
              to expert advice and recommendations, you&apos;ll find everything
              you need to get more from your games.
            </p>
          </div>
        </div>
      </section>

      <div className="container md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Highlights
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            The most recent additions to the More From Games library.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          <Card />
          <Card />
          <Card />
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
          <div className="md:col-span-12 text-center">
            <a
              href="nft-explore.html"
              className="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              Explore All Items{" "}
              <i className="uil uil-arrow-right align-middle"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
