import { client } from "../server/prisma/client";

export default class Model {
	protected modelClient: any;
	protected model: any;
	protected perPage = 50;

	constructor(
		model: any,
	) {
		this.model = model;
	};
}