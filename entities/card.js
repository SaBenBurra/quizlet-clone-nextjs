export default class Card {
  constructor(definition, term, id) {
    this.definition = definition;
    this.term = term;
    if (id !== undefined) this.id = id;
  }

  static fromJson(json) {
    parsedJson = JSON.parse(json);
    this.definition = parsedJson.definition;
    this.term = parsedJson.term;
    if (parsedJson.id !== undefined) this.id = parsedJson.id;
  }
}
