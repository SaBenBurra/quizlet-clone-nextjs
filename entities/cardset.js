export default class Cardset {
  constructor(name, id, cardCount, cardList) {
    this.cardList = cardList;
    this.name = name;
    this.cardCount = cardCount;
    if (id !== undefined) this.id = id;
    if (cardList.length > 0) this.cardCount = cardList.length;
  }

  updateCardCount() {
    this.cardCount = this.cardList.length;
  }

  static fromJson(json) {
    parsedJson = JSON.parse(json);
    return new Cardset(json.name, json.id, json.cardCount, json.cardList);
  }

  toJson() {
    return {
      cardList: this.cardList,
      name: this.name,
      cardCount: this.cardCount,
      id: this.id,
    };
  }
}
