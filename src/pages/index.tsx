import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    </>
  );
}
