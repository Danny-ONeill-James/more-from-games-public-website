import { GetServerSideProps, NextPage } from "next";

import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";

import { IArticles, IMiniature } from "@/utilities/interfaces";
import ArticleRight from "@/components/articleRight";
import VideoLeft from "@/components/videoLeft";

interface IMiniatureProps {
  miniature: IMiniature;
  articles: IArticles[];
}

const Game: NextPage<IMiniatureProps> = ({ miniature, articles }) => {
  let articleMessage = "";
  if (articles.length == 0) articleMessage = "No Articles for this miniature";

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
        <CardContainer title={"Articles"} text={articleMessage}>
          {articles.map((article) => {
            return (
              <Card
                key={article.id}
                title={article.title}
                text={article.description}
                imageLocation={article.imageLocation}
                link={"/articles/" + article.id}
                target={"_self"}
              />
            );
          })}
        </CardContainer>
        <VideoLeft
          title={"Painting Guide"}
          text={""}
          embedCode={miniature.paintingVideoEmbedCode}
        />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const [miniatureResult, articleResults] = await Promise.all([
    fetch("http://localhost:3001/api/miniatureIndividual", {
      body: JSON.stringify(`${id}`),
      method: "POST",
    }),
    fetch("http://localhost:3001/api/articlesList", {
      body: JSON.stringify(`/miniatures/${id}`),
      method: "POST",
    }),
  ]);

  const [miniature, articles] = await Promise.all([
    miniatureResult.json(),
    articleResults.json(),
  ]);

  return {
    props: {
      miniature,
      articles,
    },
  };
};

export default Game;
