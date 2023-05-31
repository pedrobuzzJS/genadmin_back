import { ApiError } from "../helpers/Error";
import { client } from "../server/prisma/client";
import { Request, Response } from "express";

export default class MenuController {
    static async list(request: Request, response: Response) {
        const { id } = request.query;
        let data;

        if (id) {
            data = await client["menu"].findFirst({
                where: {
                    id: Number(id)
                },
                orderBy: {
                    id: "asc"
                }
            });   
        } else {
            data = await client["menu"].findMany({
                orderBy: {
                    id: "asc"
                }
            });
        }

        if (!data) {
            throw new ApiError("Sem retorno de registro do banco", 404)
        } else {
            return response.json(data);
        };
    };
    
    static async delete(request: Request, response: Response) {
        const { id } = request.query;
        try {
            if (id) {
                const menus = await client["menu"].delete({
                    where: {
                        id: Number(id)
                    }
                })
                if (menus) {
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