import Card from "@/components/card";
import CardContainer from "@/components/cardContainer";
import PageHero from "@/components/pageHero";
import { IArticles } from "@/utilities/interfaces";
import { NextPage } from "next";

interface IArticlesProps {
  articles: IArticles[];
}

const Articles: NextPage<IArticlesProps> = ({ articles }) => {
  return (
    <>
      <PageHero title={"Articles"} />
      <CardContainer title={"All Articles"} text={"Some text Here"}>
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
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("/api/articlesList");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
};

export default Articles;
