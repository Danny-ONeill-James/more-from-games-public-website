// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IGame } from "@/utilities/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGame[]>
) {
  res.status(200).json([
    {
      id: 1,
      title: "Hero Quest",
      description:
        "Players take on the roles of brave adventurers, exploring dungeons and fighting monsters. The game utilizes a unique game system which incorporates miniatures, dungeon tiles, and cards to create an immersive experience. Players must use strategy and teamwork to defeat the monsters and complete their objectives.",
      type: "Board Game",
      imageLocation:
        "https://res.cloudinary.com/deftmtx9e/image/upload/v1678368260/More%20From%20Games/Site/Games/hero-quest_diq2yz.png",
      link: "/games/hero-quest",
    },
    {
      id: 2,
      title: "Dark Souls",
      description:
        "Take on a tabletop reimagining of one of the most challenging video games ever made. In this cooperative dungeon crawl game for 1-4 players, you'll explore dangerous locations, discover treasure, and fight your way past deadly enemies to reclaim your humanity.",
      type: "Board Game",
      imageLocation:
        "https://res.cloudinary.com/deftmtx9e/image/upload/v1678368332/More%20From%20Games/Site/Games/dark-souls_my1lnr.png",
      link: "/games/dark-souls",
    },
  ]);
}
