
import mHttp from "http";

// Create a local server to receive data from
mHttp.createServer((_req, res) => {

    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/style.css">
        <!-- <script type="module" src="main.js"></script> -->
    </head>
    
    <body>TEST WEB</body>
    
    </html>
    `);

}).listen(3457);

console.log("START WEB SERVER!!!");
