import { client } from "../server/prisma/client";

export default class Model {
  protected model: any;
  protected perPage = 50;

  constructor(
    model: any,
  ) {
    this.model = model;
  };

  find() {
    // data = client.menu.fi
    return client['menu'].findFirst()
  }

  findMany() {

  }

  findFirst() {

  }
}