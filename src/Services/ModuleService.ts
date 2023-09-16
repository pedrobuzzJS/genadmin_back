import DefaultService from "../Abstracts/Service";
import { Modules } from "../Models/Modules";

export class ModuleService extends DefaultService {
  public constructor() {
    super()
  }
  public async list() {
    let menu = new Modules()
    return await menu.get()
  }

  public async show(params: number) {
    const [ id ] = Object.values(params)
    return await new Modules().id(id)
  }
}