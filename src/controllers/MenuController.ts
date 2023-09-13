import { DefaultControler } from "../Abstracts/Controller";
import { Request, Response } from "express";
import { MenuService } from "../Services/MenuService";
export default class ModulesController extends DefaultControler {
    constructor() {
        super(new MenuService)
    }

    public async list(request: Request, response: Response) {
        return response.json(await this.service.list());
    }

    public async show(request: Request, response: Response) {
        return response.json(await this.service.show(request.params));
    }
};