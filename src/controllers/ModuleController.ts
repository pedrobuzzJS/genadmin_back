import { DefaultControler } from "../Abstracts/Controller";
import { Request, Response } from "express";
import { ModuleService } from "../Services/ModuleService";

export default class ModulesController extends DefaultControler {
  constructor() {
    super(new ModuleService)
  }

  public async list(request: Request, response: Response) {
    return response.json(await this.service.list());
  }

  public async show(request: Request, response: Response) {
      return response.json(await this.service.show(request.params));
  }
}