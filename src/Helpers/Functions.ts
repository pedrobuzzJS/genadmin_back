export function getColumnsToSearch(columns: string[]) {
  return columns.reduce((obj: any, item: any) => ((obj[item] = true), obj), {});
}