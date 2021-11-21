
// A few "require"
const childProcess = require("child_process"),
    browserSync = require("browser-sync").create();

// Configuration preparation
const bsOpt = require("./config/config-bs.js");
browserSync.init(bsOpt);

let nodeWeb, nodeLocal;
exports.change = () => {

    // Start/restart node web server
    if (nodeWeb) nodeWeb.kill();
    nodeWeb = childProcess.fork("../servers/server1/wc/start.js", { // Starting the web server on the node
        cwd: process.cwd() + "/app/local/"
    });
    log("web");

    // Start/restart node local server
    if (nodeLocal) nodeLocal.kill();
    nodeLocal = childProcess.fork("wc/server/start.js", { // Starting the local server on the node
        cwd: process.cwd() + "/app/local/"
    });
    log("local");

    // Update live-server
    browserSync.reload();

    // To see something happen
    function log(pType) {
        console.log("\x1B[90m%s \x1b[36m%s\x1b[0m", new Date().toLocaleTimeString(), `Node ${pType} server start/restart`);
    }

}
