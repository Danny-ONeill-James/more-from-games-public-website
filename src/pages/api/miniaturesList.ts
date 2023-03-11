// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IMiniature } from "@/utilities/interfaces";
import miniatures from "@/utilities/data/miniaturesList.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMiniature[]>
) {
  if (req.method !== "POST") {
    const miniaturesJson = miniatures.Miniatures;

    res.status(200).json(miniaturesJson);
  } else {
    const miniatureJson = await miniatures.Miniatures;
    const postBody = await JSON.parse(req.body);
    let foundMiniature: IMiniature[] = new Array();

    miniatureJson.forEach((element) => {
      if (element.gameLink == postBody) {
        foundMiniature.push(element);
      }
    });

    if (foundMiniature.length == 0) {
      res.status(200).json(foundMiniature);
    } else {
      res.status(200).json(foundMiniature);
    }
  }
}
