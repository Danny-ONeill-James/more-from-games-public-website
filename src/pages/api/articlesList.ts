// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import articles from "@/utilities/data/articlesList.json";
import { IArticles } from "@/utilities/interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    const articlesJson = articles.Articles;

    res.status(200).json(articlesJson);
  } else {
    const articlesJson = await articles.Articles;
    const postBody = await JSON.parse(req.body);
    let foundArticle: IArticles[] = new Array();

    articlesJson.forEach((element) => {
      if (element.itemLink == postBody) {
        foundArticle.push(element as IArticles);
      }
    });

    if (foundArticle.length == 0) {
      res.status(200).json(foundArticle);
    } else {
      res.status(200).json(foundArticle);
    }
  }
}
