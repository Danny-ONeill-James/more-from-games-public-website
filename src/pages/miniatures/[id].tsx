import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import Card from "@/components/card";
import PageHero from "@/components/pageHero";
import CardContainer from "@/components/cardContainer";

import { IMiniature } from "@/utilities/interfaces";
import ArticleRight from "@/components/articleRight";

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
        <CardContainer
          title={"Painting Video"}
          text={
            "Here you will find the start painting video aimed at starting to get people painting the miniatures"
          }
        >
          <div className="grid grid-cols-1 justify-center">
            <div className="relative z-1">
              <div className="grid lg:grid-cols-12 grid-cols-1 ltr:md:text-left rtl:md:text-right text-center justify-center">
                <div className="lg:col-start-2 lg:col-span-10">
                  <div className="relative">
                    <iframe
                      width="560"
                      height="315"
                      src={
                        "https://www.youtube.com/embed/" +
                        miniature.paintingVideoEmbedCode
                      }
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContainer>

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
