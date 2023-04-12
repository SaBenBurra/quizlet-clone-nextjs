import Cardset from "@/entities/cardset";

import CardsetApiProvider from "../providers/api/cardset_api_provider";

export default class CardsetRepository {
  static async getAll() {
    const jsonResponse = await CardsetApiProvider.getAll();
    const data = jsonResponse.data;

    let cardsetList = [];

    for (let i = 0; i < data.length; i++) {
      let dataObject = data[i];
      cardsetList.push(
        new Cardset(dataObject.name, dataObject.id, dataObject.cardCount, [])
      );
    }
    return cardsetList;
  }
}
