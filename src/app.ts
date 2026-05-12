import express, { type Application, type Request, type Response } from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import { AuthRouter } from "./app/modules/auth/auth.route";
import router from "./app/routes/routes";
import notFound from "./app/middleware/notFound";

const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router)

// app.use("/auth", AuthRouter)

app.get("/", (req: Request, res: Response) => {
     res.json("hello world");
});

app.use(notFound)

export default app;