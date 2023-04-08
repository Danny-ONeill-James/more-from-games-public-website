import { GetServerSideProps, NextPage } from "next";

import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";
import ArticleRight from "@/components/articleRight";

import { IArticles, IGame, IMiniature } from "@/utilities/interfaces";

interface IGameProps {
  game: IGame;
  miniatures: IMiniature[];
  articles: IArticles[];
}

const Game: NextPage<IGameProps> = ({ game, miniatures, articles }) => {
  let miniatureMessage = "";
  let articleMessage = "";

  if (miniatures.length == 0) miniatureMessage = "No Miniatures for this game";
  if (articles.length == 0) articleMessage = "No Articles for this game";

  return (
    <>
      <PageHero title={game.title} />
      <section className="relative table w-full md:pb-24 pb-16 mt-28">
        <ArticleRight
          imageLocation={game.imageLocation}
          title={game.title}
          text={game.description}
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

        <CardContainer title={"Miniatures"} text={miniatureMessage}>
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

        <CardContainer title={"Where to Buy"} text={""}>
          <Card
            title={"Firestorm Games"}
            text={"Stock: Unknown"}
            imageLocation={
              "https://res.cloudinary.com/deftmtx9e/image/upload/v1678575887/More%20From%20Games/Site/Affiliates/firestorm-games_tsx1ts.png"
            }
            link={game.purchaseLink}
            target={"_new"}
          />
        </CardContainer>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const [gameResults, miniaturesResults, articlesResults] = await Promise.all([
    fetch("http://localhost:3000/api/gameIndividual", {
      body: JSON.stringify(`${id}`),
      method: "POST",
    }),
    fetch("http://localhost:3000/api/miniaturesList", {
      body: JSON.stringify(`${id}`),
      method: "POST",
    }),
    fetch("http://localhost:3000/api/articlesList", {
      body: JSON.stringify(`/games/${id}`),
      method: "POST",
    }),
  ]);

  const [game, miniatures, articles] = await Promise.all([
    gameResults.json(),
    miniaturesResults.json(),
    articlesResults.json(),
  ]);

  return {
    props: {
      game,
      miniatures,
      articles,
    },
  };
};

export default Game;
