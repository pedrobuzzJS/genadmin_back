import { getColumnsToSearch } from "../Helpers/Functions";
import { client } from "../server/prisma/client";

export abstract class DefaultModel {
	// protected modelClient: any;
	protected model: any;
	protected perPage = 50;

	constructor(
		model: any,
	) {
		this.model = client[model as keyof object];
	};

	public async get(columns?: string[]) {
		if (columns) {
			let data = await this.model.findMany({
				select: {
					...getColumnsToSearch(columns)
				}
			});
			return data
		}
		
		let data = await this.model.findMany();
		return data
	}

	public async id(id: any) {
		let data = await this.model.findMany({
			where: {
					id: { in: Number(id) },
			}
	})
		return data
	}
}