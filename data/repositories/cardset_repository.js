import Cardset from "@/entities/cardset";

import CardsetApiProvider from "../providers/api/cardset_api_provider";

export default class CardsetRepository {
  static async getAll() {
    const response = await CardsetApiProvider.getAll();
    const jsonResponse = await response.json();
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

  static async create(cardsetName) {
    const response = await CardsetApiProvider.create(cardsetName);
    const jsonResponse = await response.json();
    const data = jsonResponse.data;
    return data;
  }

  static async update(cardsetId, cardsetName, cardList) {
    const response = await CardsetApiProvider.update(
      cardsetId,
      cardsetName,
      cardList
    );
  }
}
