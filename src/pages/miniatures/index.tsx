import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";

import { IMiniature } from "@/utilities/interfaces";
import { NextPage } from "next";

interface IGameProps {
  miniatures: IMiniature[];
}

const Games: NextPage<IGameProps> = ({ miniatures }) => {
  return (
    <>
      <title>More From Games</title>
      <PageHero title="Miniatures" />
      <CardContainer title="Miniatures" text="Top Miniatures.">
        {miniatures.map((miniature) => {
          return (
            <Card
              key={miniature.id}
              title={miniature.title}
              text={miniature.description}
              imageLocation={miniature.imageLocation}
              link={"/miniatures/" + miniature.miniatureLink}
              target={"_self"}
            />
          );
        })}
      </CardContainer>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/miniaturesList");
  const data = await res.json();

  return {
    props: {
      miniatures: data,
    },
  };
};

export default Games;
