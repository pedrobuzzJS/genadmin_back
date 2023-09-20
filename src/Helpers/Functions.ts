import { collect } from "collect.js";

export function getColumnsToSearch(columns: string[]) {
  return columns.reduce((obj: any, item: any) => ((obj[item] = true), obj), {});
}

global.log = (args) => console.log(args)
global.c = (args) => collect(args)
global.cliente = 5005