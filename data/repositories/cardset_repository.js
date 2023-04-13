import Cardset from "@/entities/cardset";
import Router from "next/router";

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

  static async create(cardsetName, cardList) {
    try {
      let response = await CardsetApiProvider.create(cardsetName);
      let jsonResponse = await response.json();
      let data = jsonResponse.data;
      let cardsetId = data.id;

      response = await CardsetApiProvider.update(
        cardsetId,
        cardsetName,
        cardList
      );
      jsonResponse = await response.json();
      data = jsonResponse.data;
      alert("Success!");
      Router.push("/");
      return data;
    } catch {
      alert("error");
      return;
    }
  }

  static async update(cardsetId, cardsetName, cardList) {
    try {
      const response = await CardsetApiProvider.update(
        cardsetId,
        cardsetName,
        cardList
      );
    } catch {
      alert("error");
      return;
    }

    alert("Success!");
  }

  static async getById(cardsetId) {
    try {
      const response = await CardsetApiProvider.getById(cardsetId);
      const jsonResponse = await response.json();
      const data = jsonResponse.data;
      return data;
    } catch {
      alert("error");
      return;
    }
  }
}
