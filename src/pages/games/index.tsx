import { Inter } from "next/font/google";
import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";

export function Games() {
  return (
    <>
      <title>Games - More From Games</title>
      <PageHero />
      <CardContainer title="Board Games" text="Top Board Games.">
        <Card
          title={"Hero Quest"}
          text={
            "Players take on the roles of brave adventurers, exploring dungeons and fighting monsters. The game utilizes a unique game system which incorporates miniatures, dungeon tiles, and cards to create an immersive experience. Players must use strategy and teamwork to defeat the monsters and complete their objectives."
          }
          imageLocation={
            "https://res.cloudinary.com/deftmtx9e/image/upload/v1669381073/More%20From%20Games/placeholder_rpff81.png"
          }
          link={"/games/hero-quest"}
        />
      </CardContainer>
    </>
  );
}

export default Games;
