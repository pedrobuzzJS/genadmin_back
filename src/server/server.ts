import app from "./app";

declare global {
    var client: number;
  }
  
  global.client = 5005;

app.listen( 3333, () => {
    console.log(`App running on http://localhost:${3333}`)
} );