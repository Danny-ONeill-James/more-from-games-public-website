import { NextPage } from "next";
import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";
import { IMiniature } from "@/utilities/interfaces";
import { MiniaturesListApi } from "../api/miniaturesList";

interface IMiniatureProps {
  miniatures: IMiniature[];
}

const Miniatures: NextPage<IMiniatureProps> = ({ miniatures }) => {
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

export async function getServerSideProps() {
  const res = await MiniaturesListApi();

  return {
    props: {
      miniatures: res,
    },
  };
}

export default Miniatures;
