import { client } from "../server/prisma/client";
import { Request, Response } from "express";

export default class StatusController {
    static async list(request: Request, response: Response) {
        const { id } = request.query;
        let data;
        let status: any = "status";

        if (id) {
            data = await client[`status`].findFirst({
                where: {
                    id: Number(id)
                },
                orderBy: {
                    id: "asc"
                }
            });
        } else {
            data = await client["status"].findMany({
                orderBy: {
                    id: "asc"
                }
            });
        }

        if (!data) {
            return response.status(204).json({
                "msg" : "Sem resultado"
            });
        } else {
            return response.json(data);
        };
    };

    static async create(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const status = await client["status"].create({
                data: {
                    name: objJson.name,
                    description: objJson.description,
                    color: objJson.color,
                }
            });
            if (status) {
                return response.json(
                    {
                        "msg" : "Successes"
                    }
                );
            }
        } catch (error) {
            return response.status(500).json({
                message: error
            });
        };
    };

    static async update(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const updateStatus = await client["status"].update({
                where: {
                    id: Number(objJson.id)
                },
                data: {
                    name: objJson.name,
                    description: objJson.description,
                    color: objJson.color
                }
            });
            if (updateStatus) {
                return response.json(
                    {
                        "msg" : "Successes"
                    }
                );
            };
        } catch (error) {
            return response.status(500).json({
                message: error
            });
        };
    };
    
    static async delete(request: Request, response: Response) {
        const { id } = request.query;
        try {
            if (id) {
                const deleteStatus = await client["status"].delete({
                    where: {
                        id: Number(id)
                    }
                })
                if (deleteStatus) {
                    return response.json(
                        {
                            "msg" : "Successes"
                        }
                    );
                };
            };
        } catch (error) {
            return response.status(500).json({
                message: error
            });
        };
    };
};