import { Inter } from "next/font/google";
import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";

import { IGame } from "@/utilities/interfaces";
import { NextPage } from "next";
import { GamesListApi } from "../api/gamesList";

interface IGameProps {
  boardGames: IGame[];
}

const Games: NextPage<IGameProps> = ({ boardGames }) => {
  return (
    <>
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
              target={"_self"}
            />
          );
        })}
      </CardContainer>
    </>
  );
};

export async function getServerSideProps() {
  const res = await GamesListApi();

  return {
    props: {
      boardGames: res,
    },
  };
}

export default Games;
