// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IGame } from "@/utilities/interfaces";
import games from "@/utilities/data/gamesList.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if ((req.method = "POST")) {
    const gamesJson = await games.Games;
    const postBody = await JSON.parse(req.body);

    const foundGame = (await gamesJson.find(
      (Games) => Games.gameLink === postBody
    )) as IGame;

    res.status(200).json(foundGame);
  }
}
