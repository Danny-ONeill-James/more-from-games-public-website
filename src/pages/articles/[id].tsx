import PageHero from "@/components/pageHero";
import { GetServerSideProps, NextPage } from "next";
import { IArticles } from "@/utilities/interfaces";
import CardContainer from "@/components/cardContainer";
import Card from "@/components/card";
import ArticleLeft from "@/components/articleLeft";
import ArticleRight from "@/components/articleRight";

interface IArticleProps {
  article: IArticles;
}

const Article: NextPage<IArticleProps> = ({ article }) => {
  return (
    <>
      <PageHero title={"Articles"} />
      <section className="relative table w-full md:pb-24 pb-16 mt-28">
        {article.sections.map((section) => {
          const remainder = section.id % 2;
          if (remainder === 0) {
            return (
              <ArticleRight
                key={section.id}
                imageLocation={section.imageLocation}
                title={section.title}
                text={section.title}
              />
            );
          } else {
            return (
              <ArticleLeft
                key={section.id}
                imageLocation={section.imageLocation}
                title={section.title}
                text={section.title}
              />
            );
          }
        })}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch("http://localhost:3000/api/articleIndividual", {
    body: JSON.stringify(`${id}`),
    method: "POST",
  });
  const data = await res.json();

  return {
    props: {
      article: data,
    },
  };
};

export default Article;
