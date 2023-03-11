import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";

import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";

import { IGame, IMiniature } from "@/utilities/interfaces";

interface IGameProps {
  game: IGame;
  miniatures: IMiniature[];
}

const Game: NextPage<IGameProps> = ({ game, miniatures }) => {
  console.log(miniatures.length);
  let miniatureMessage;
  if (miniatures.length == 0) {
    miniatureMessage = "No Miniatures for this game";
  } else {
    miniatureMessage = "";
  }

  return (
    <>
      <title>More From Games</title>
      <PageHero title={game.title} />
      <section className="relative table w-full md:pb-24 pb-16 mt-28">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-6 md:col-span-5">
              <div className="sticky top-20">
                <Image
                  src={game.imageLocation}
                  className="rounded-md shadow-md dark:shadow-gray-800"
                  width={600}
                  height={600}
                  alt={game.title + " image"}
                />
              </div>
            </div>

            <div className="lg:col-span-6 md:col-span-7">
              <div className="">
                <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">
                  {game.title}
                </h5>

                <div className="grid grid-cols-1 mt-8">
                  <div id="StarterContent" className="mt-6">
                    <div className="grid grid-cols-1">
                      <p className="text-slate-400 mb-4">{game.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardContainer title={"Miniatures"} text={miniatureMessage}>
          {miniatures.map((miniature) => {
            return (
              <Card
                key={miniature.id}
                title={miniature.title}
                text={miniature.description}
                imageLocation={miniature.imageLocation}
                link={"/miniatures/" + miniature.miniatureLink}
              />
            );
          })}
        </CardContainer>

        <CardContainer title={"Where to Buy"} text={""}>
          <Card
            title={"Firestorm Games"}
            text={"Stock: Unknown"}
            imageLocation={""}
            link={""}
          />
        </CardContainer>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const [gameResults, miniaturesResults] = await Promise.all([
    fetch("http://localhost:3000/api/gameIndividual", {
      body: JSON.stringify(`${id}`),
      method: "POST",
    }),
    fetch("http://localhost:3000/api/miniaturesList", {
      body: JSON.stringify(`${id}`),
      method: "POST",
    }),
  ]);

  const [game, miniatures] = await Promise.all([
    gameResults.json(),
    miniaturesResults.json(),
  ]);

  return {
    props: {
      game,
      miniatures,
    },
  };
};

export default Game;
