import miniatures from "@/utilities/data/miniaturesList.json";

export async function MiniaturesListApi() {
  const response = await miniatures.Miniatures;

  return response;
}
