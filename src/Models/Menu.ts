import { DefaultModel } from "../Abstracts/Model";
import { getColumnsToSearch } from "../helpers/Functions";
import { response } from "express";

export class Menu extends DefaultModel {
	constructor() {
		super('menu')
	}
}