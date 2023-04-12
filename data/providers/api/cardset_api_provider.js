export default class CardsetApiProvider {
  static async getAll() {
    const response = await fetch(`${process.env.API_URL}/cardsets`);
    return response;
  }
}
