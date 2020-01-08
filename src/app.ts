/*!
 * Copyright (C) 2020  Zachary Kohnen (DusterTheFirst)
 */

import express from "express";
import PowerSchoolAPI from "powerschool-api";
import config from "./config.json";
import secrets from "./secrets.json";

/** The app that manages and runs the API */
const app = express();

/** The PowerSchool API Handler */
const api = new PowerSchoolAPI(config.api.endpoint);

api.setup().then(() => api.login(secrets.username, secrets.password).then(x => x.getStudentInfo().then(console.log)));

// app.listen(process.env.PORT ?? 8080);
console.log(`Application listining on port ${process.env.PORT ?? 8080}`);