import { Inter } from "next/font/google";
import Card from "@/components/card";
import CardContainer from "@/components/cardContainer";

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
      <CardContainer
        title="Highlights"
        text="The most recent additions to the More From Games library."
      >
        <Card
          title={"Title here"}
          text={"Description Here"}
          imageLocation={
            "https://res.cloudinary.com/deftmtx9e/image/upload/v1669381073/More%20From%20Games/placeholder_rpff81.png"
          }
          link={"/"}
        />
      </CardContainer>
    </>
  );
}

export default Home;
