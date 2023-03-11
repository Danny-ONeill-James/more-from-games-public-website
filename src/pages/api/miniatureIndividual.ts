// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IMiniature } from "@/utilities/interfaces";
import miniatures from "@/utilities/data/miniaturesList.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if ((req.method = "POST")) {
    const miniatureJson = await miniatures.Miniatures;
    const postBody = await JSON.parse(req.body);

    const foundMiniature = (await miniatureJson.find(
      (Miniatures) => Miniatures.miniatureLink === postBody
    )) as IMiniature;

    res.status(200).json(foundMiniature);
  }
}
