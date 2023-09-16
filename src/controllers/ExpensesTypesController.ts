import { DefaultControler } from "../Abstracts/Controller";
import { Request, Response } from "express";
import { ExpensesTypesService } from "../Services/ExpensesTypesService";

export default class ExpensesTypesController extends DefaultControler {
    constructor() {
        super(new ExpensesTypesService)
    }

    public async list(request: Request, response: Response) {
        return response.json(await this.service.list());
    }

    public async show(request: Request, response: Response) {
        return response.json(await this.service.show(request.params));
    }
};