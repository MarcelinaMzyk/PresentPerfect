import express from "express";
import { router } from "./routes/routes";

const app = express();

const port = 8080;

app.use(router);

app.use((req, res, next) => {
    // tslint:disable-next-line:no-console
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server listening on port ${port}`);
});
