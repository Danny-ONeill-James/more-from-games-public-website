import articles from "@/utilities/data/articlesList.json";

export async function ArticlesListApi() {
  const response = await articles.Articles;

  return response;
}
