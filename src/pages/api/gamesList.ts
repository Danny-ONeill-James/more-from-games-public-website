// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IGame } from "@/utilities/interfaces";
import games from "@/utilities/data/gamesList.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGame[]>
) {
  const gamesJson = games.Games;

  res.status(200).json(gamesJson);
}
