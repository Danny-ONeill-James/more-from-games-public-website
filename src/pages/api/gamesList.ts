// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import games from "@/utilities/data/gamesList.json";

export async function GamesListApi() {
  const response = await games.Games;

  return response;
}
