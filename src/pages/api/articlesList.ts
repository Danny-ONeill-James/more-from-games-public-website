// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import articles from "@/utilities/data/articlesList.json";
import { IArticles } from "@/utilities/interfaces";

export async function ArticlesListApi() {
  const response = await articles.Articles;

  return response;
}
