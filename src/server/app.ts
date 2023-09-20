import express, { NextFunction, Request, Response } from "express";
require("express-async-errors");
import cors from "cors";
import Routes from "./routes/index.routes";
import { errorMiddleware } from "../Middlewares/erro";

const app = express();

app.use(
    cors({
        origin: '*'
    })
);

// app.use((request: Request, response: Response, next: NextFunction) => {
//     response.header(
//         "Access-Control-Allow-Origin",
//         "*");
//     next();
// });

app.use(
    express.json({
        type: ['application/json', 'text/plain'],
        }
    )
);
    
app.use(Routes);
app.use(errorMiddleware);
import global from "../types/global";

export default app;