import { client } from "../server/prisma/client";
import { Request, Response } from "express";

export default class ModulesController {
    static async list(request: Request, response: Response) {
        const { id } = request.query;
        let data;

        if (id) {
            data = await client.module.findFirst({
                where: {
                    id: Number(id)
                },
                orderBy: {
                    id: "asc"
                }
            });
        } else {
            data = await client.module.findMany({
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
            const module = await client.module.create({
                data: {
                    id: objJson.id,
                    name: objJson.name
                }
            })
            // if (module) {
            //     return response.json(
            //         {
            //             "msg" : "Successes"
            //         }
            //     );
            // }
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
            const updateStatus = await client.module.update({
                where: {
                    id: Number(objJson.id)
                },
                data: {
                    name: objJson.name,
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
                const deleteStatus = await client.module.delete({
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