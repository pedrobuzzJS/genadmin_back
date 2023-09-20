declare global {
  var cliente: number;
  function log(args: any): void;
  function c(args: []): any
}

export = {
  global
}