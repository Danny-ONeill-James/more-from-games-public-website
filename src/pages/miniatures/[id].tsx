import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";

import { IMiniature } from "@/utilities/interfaces";
import ArticleRight from "@/components/articleRight";
import VideoLeft from "@/components/videoLeft";

interface IMiniatureProps {
  miniature: IMiniature;
}

const Game: NextPage<IMiniatureProps> = ({ miniature }) => {
  return (
    <>
      <title>More From Games</title>
      <PageHero title={miniature.title} />
      <section className="relative table w-full md:pb-24 pb-16 mt-28">
        <ArticleRight
          imageLocation={miniature.imageLocation}
          title={miniature.title}
          text={miniature.description}
        />
        <div className="grid grid-cols-1 pb-8 text-center "></div>
        <VideoLeft
          title={"Painting Guide"}
          text={"Description"}
          embedCode={miniature.paintingVideoEmbedCode}
        />
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
