import { DefaultModel } from "../Abstracts/Model";
import { getColumnsToSearch } from "../helpers/Functions";
import { response } from "express";

export class Status extends DefaultModel {
	constructor() {
		super('status')
	}
}