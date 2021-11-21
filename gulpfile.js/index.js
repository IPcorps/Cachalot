
// File extension router

const gulp = require("gulp");

exports.watcher = () => {

    const ts = require("./ts");
    // TypeScript -> JavaScript (client)
    gulp.watch(["src/client/**/*.tsx", "!**/*.d.*"])
        .on("change", path => ts.change(path, true));
    // TypeScript -> JavaScript (server)
    gulp.watch(["src/server/**/*.tsx", "!**/*.d.*"])
        .on("change", path => ts.change(path));

    // Server file change watcher
    const node = require("./node");
    node.change();
    gulp.watch(["app/**/*"])
        .on("change", node.change);
    console.log("\x1B[90m%s \x1b[36m%s\x1b[0m", new Date().toLocaleTimeString(),
        "URL: http://localhost:3456");

};
