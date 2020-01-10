/*!
 * Copyright (C) 2020  Zachary Kohnen (DusterTheFirst)
 */

import { PowerSchoolAPI, PowerSchoolSession, PowerSchoolUser } from "@whsha/powerschool-api";
import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import listEndpoints from "express-list-endpoints";
import config from "./config.json";

/** The app that manages and runs the API */
const app = express();

/** The PowerSchool API Handler */
const api = new PowerSchoolAPI(config.api.endpoint);

api.setup();

/** A helper method to stringify powerschool api classes while ignoring the api part */
function JSONStringifyNoApi<T>(object: T): string {
    return JSON.stringify(
        object,
        // tslint:disable-next-line: no-unsafe-any
        (key, value) => key === "api" ? undefined : value,
        4
    );
}

/** The info to use for login */
interface ILoginInfo {
    /** The username of the user */
    username: string;
    /** The password of the user */
    password: string;
}

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.get("/endpoints", (req, res) => {
    res.status(200).json(listEndpoints(app));
});

app.post<{}, {}, ILoginInfo>("/login", bodyParser.json(), async (req, res, next) => {
    res.status(200).contentType("json").send(
        JSONStringifyNoApi(
            await api.login(req.body.username, req.body.password).catch(next)
        )
    );
});

app.post<{}, {}, PowerSchoolSession>("/student", bodyParser.json(), async (req, res, next) => {
    res.status(200).contentType("json").send(
        JSONStringifyNoApi(
            await new PowerSchoolUser(req.body, api).getStudentInfo()
        )
    );
});

app.get("/", (req, res) => {
    res.status(200).contentType("html").send(`
        <h1>Avaliable Endpoints</h1>
        ${listEndpoints(app)
            .map(x => `<a href="${x.path}">${x.path}</a> => ${x.methods.join(", ")}`)
            .join("</br>")}
    `);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(err);
});

app.listen(process.env.PORT ?? 8080);
console.log(`Application started at http://localhost:${process.env.PORT ?? 8080}`);