"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const https = require("https");
const fs = require("fs");
var path = require('path');
const port = process.env.PORT || 4999;
const httpsOptions = {
    key: fs.readFileSync((path.resolve('dist/config/key.pem')), "utf8"),
    cert: fs.readFileSync((path.resolve('dist/config/cert.pem')), "utf8")
};
https.createServer(httpsOptions, App_1.default).listen(port, () => {
    console.log('Express server listening on port ' + port);
});
//# sourceMappingURL=index.js.map