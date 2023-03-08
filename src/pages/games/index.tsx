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
        <Card />
      </CardContainer>
    </>
  );
}

export default Games;
