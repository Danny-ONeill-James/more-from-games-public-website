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
          text={
            "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
          embedCode={miniature.paintingVideoEmbedCode}
        />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const [miniatureResult, articleResults] = await Promise.all([
    fetch("http://localhost:3000/api/miniatureIndividual", {
      body: JSON.stringify(`${id}`),
      method: "POST",
    }),
    fetch("http://localhost:3000/api/articlesList", {
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
