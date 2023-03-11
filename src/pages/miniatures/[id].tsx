import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";

import { IMiniature } from "@/utilities/interfaces";

interface IMiniatureProps {
  miniature: IMiniature;
}

const Game: NextPage<IMiniatureProps> = ({ miniature }) => {
  return (
    <>
      <title>More From Games</title>
      <PageHero title={miniature.title} />
      <section className="relative table w-full md:pb-24 pb-16 mt-28">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-6 md:col-span-5">
              <div className="sticky top-20">
                <Image
                  src={miniature.imageLocation}
                  className="rounded-md shadow-md dark:shadow-gray-800"
                  width={600}
                  height={600}
                  alt={miniature.title + " image"}
                />
              </div>
            </div>

            <div className="lg:col-span-6 md:col-span-7">
              <div className="">
                <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">
                  {miniature.title}
                </h5>

                <div className="grid grid-cols-1 mt-8">
                  <div id="StarterContent" className="mt-6">
                    <div className="grid grid-cols-1">
                      <p className="text-slate-400 mb-4">
                        {miniature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardContainer title={"Links"} text={""}>
          <Card
            title={"Miniature 1"}
            text={"Sext about miniature 1 that will be dynamic"}
            imageLocation={
              "https://res.cloudinary.com/deftmtx9e/image/upload/v1678295557/More%20From%20Games/placeholder_wxmc94_bynmht.png"
            }
            link={"/games"}
          />
        </CardContainer>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch("http://localhost:3000/api/miniatureIndividual", {
    body: JSON.stringify(`${id}`),
    method: "POST",
  });
  const data = await res.json();

  return {
    props: {
      miniature: data,
    },
  };
};

export default Game;
