import { ApiError } from "../helpers/Error";
import { client } from "../server/prisma/client";
import { Request, Response } from "express";

export default class TipoDespesaController {
    static async list(request: Request, response: Response) {
        const { id } = request.query;
        let data;

        if (id) {
            data = await client["expenseType"].findFirst({
                where: {
                    id: Number(id)
                },
                orderBy: {
                    id: "asc"
                }
            });
        } else {
            data = await client["expenseType"].findMany({
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
        const expenseType = await client["expenseType"].create({
            data: {
                name: objJson.name,
                description: objJson.description,
                status_id: Number(objJson.status_id)
            }
        });
        if (expenseType) {
            return response.json(
                {
                    "msg" : "Successes"
                }
            );
        }
    };

    static async update(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        const updateTipoDespesa = await client["expenseType"].update({
            where: {
                id: Number(objJson.id)
            },
            data: {
                name: objJson.name,
                description: objJson.description,
                status_id: objJson.status_id
            }
        });
        if (updateTipoDespesa) {
            return response.json(
                {
                    "msg" : "Successes"
                }
            );
        };
    };
    
    static async delete(request: Request, response: Response) {
        const { id } = request.query;
        if (id) {
            const deleteTipoDespesa = await client["expenseType"].delete({
                where: {
                    id: Number(id)
                }
            })
            if (deleteTipoDespesa) {
                return response.json(
                    {
                        "msg" : "Successes"
                    }
                );
            };
        };
    };
};