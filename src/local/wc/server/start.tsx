
/**
 * SERVER FOR WORKING WITH LOCAL RESOURCES
 */

import express from "express";
const app = express();

app
    .use(["html", "css", "js"].map(v => express.static(v)))
    .use("/wc", express.static("wc/client"))
    .listen(3333);
