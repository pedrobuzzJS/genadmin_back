import { Request, Response, response } from "express";
import { StatusService } from "../Services/StatusService";
import { DefaultControler } from "../Abstracts/Controller";

export default class StatusController extends DefaultControler {
    public constructor()
    {
        super(new StatusService)
    }

    public async list(request: Request, response: Response) {
        return response.json(await this.service.list());
    }

    public async show(request: Request, response: Response) {
        return response.json(await this.service.show(request.params));
    }
};