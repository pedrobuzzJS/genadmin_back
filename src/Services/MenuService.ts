import DefaultService from "../Abstracts/Service";
import { Menu } from "../Models/Menu";

export class MenuService extends DefaultService {
  public constructor() {
    super()
  }
  public async list() {
    let menu = new Menu()
    return await menu.get()
  }

  public async show(params: number) {
    const [ id ] = Object.values(params)
    return await new Menu().id(id)
  }
}