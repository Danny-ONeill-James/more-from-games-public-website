// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IArticles } from "@/utilities/interfaces";
import articles from "@/utilities/data/articlesList.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if ((req.method = "POST")) {
    const articlesJson = await articles.Articles;
    const postBody = await JSON.parse(req.body);

    const foundArticle = await articlesJson.find(
      (Articles) => Articles.id == postBody
    );

    res.status(200).json(foundArticle);
  }
}
