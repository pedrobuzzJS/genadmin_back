import { client } from "../server/prisma/client";
import { Response } from "express";

export default class MenuService {
	static async list(reponser: Response) {
		const data = await client.menu.findMany({
		    orderBy: {
		        id: "asc",
		    },
		    // take: 5
		});
		return reponser.json(data);
	}
}