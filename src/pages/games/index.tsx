import { Inter } from "next/font/google";
import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";

import { IGame } from "@/utilities/interfaces";
import { NextPage } from "next";

interface IGameProps {
  boardGames: IGame[];
}

const Games: NextPage<IGameProps> = ({ boardGames }) => {
  return (
    <>
      <title>Games - More From Games</title>
      <PageHero title="Games" />
      <CardContainer title="Board Games" text="Top Board Games.">
        {boardGames.map((game) => {
          return (
            <Card
              key={game.id}
              title={game.title}
              text={game.description}
              imageLocation={game.imageLocation}
              link={"/games/" + game.gameLink}
            />
          );
        })}
      </CardContainer>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/gamesList");
  const data = await res.json();

  return {
    props: {
      boardGames: data,
    },
  };
};

export default Games;
