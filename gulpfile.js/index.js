
// File extension router

const gulp = require("gulp");

exports.watcher = () => {

    const ts = require("./ts");
    // TypeScript -> JavaScript (client - ES)
    gulp.watch(["src/local/**/*.tsx", "!src/local/wc/server/**/*.tsx", "!**/*.d.*"])
        .on("change", path => ts.change(path, true));
    // TypeScript -> JavaScript (server - UMD)
    gulp.watch(["src/servers/**/*.tsx", "src/local/wc/server/**/*.tsx", "!**/*.d.*"])
        .on("change", path => ts.change(path));

    // Server file change watcher
    const node = require("./node");
    node.change();
    gulp.watch(["app/**/*"])
        .on("change", node.change);
    console.log("\x1B[90m%s \x1b[36m%s\x1b[0m", new Date().toLocaleTimeString(),
        "URL: http://localhost:3456");

};
