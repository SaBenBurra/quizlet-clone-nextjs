export default class CardsetApiProvider {
  static async getAll() {
    const response = await fetch(`${process.env.API_URL}/cardsets`);
    return response;
  }

  static async create(cardsetName) {
    const response = await fetch(`${process.env.API_URL}/cardsets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cardsetName,
      }),
    });
    return response;
  }

  static async update(cardsetId, cardsetName, cardList) {
    const response = await fetch(
      `${process.env.API_URL}/cardsets/${cardsetId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cardsetName,
          cards: cardList,
        }),
      }
    );
    return response;
  }
}
