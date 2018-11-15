"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const port = process.env.PORT || 4999;
App_1.default.listen(port, (e) => {
    if (e)
        return console.log(e);
    return console.log(`Started on localhost:${port}`);
});
//# sourceMappingURL=index.js.map