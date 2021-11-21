
// A few "require"
const childProcess = require("child_process"),
    fs = require("fs"),
    browserSync = require("browser-sync").create();

// Configuration preparation
let bsOpt = require("./config/config-bs.js");

browserSync.init(bsOpt);

let node;
exports.change = () => {

    // Start/restart node server
    if (node) node.kill();
    node = childProcess.fork("../server/main.js", { // Starting the server on the node
        cwd: process.cwd() + "/app/client"
    });

    // Update live-server
    browserSync.reload();

    // To see something happen
    console.log("\x1B[90m%s \x1b[36m%s\x1b[0m", new Date().toLocaleTimeString(), "Node server start/restart");

}
