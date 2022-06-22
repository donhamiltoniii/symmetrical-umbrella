import path from "path";
import express, { Express, NextFunction, Request, Response } from "express";
import { engine } from "express-handlebars";

const port = 3000;

const app: Express = express();

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "")));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (_req: Request, res: Response) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
