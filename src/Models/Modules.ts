import { DefaultModel } from "../Abstracts/Model";
import { client } from "../server/prisma/client";

export class Modules extends DefaultModel {
	constructor() {
		super('module')
	}
}