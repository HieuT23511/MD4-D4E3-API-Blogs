"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepo = void 0;
const Blog_1 = require("./src/entity/Blog");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_source_1 = require("./src/data-source");
const api_routers_1 = require("./src/routers/api.routers");
const app = (0, express_1.default)();
exports.ProductRepo = data_source_1.AppDataSource.getRepository(Blog_1.Blog);
const PORT = 3535;
data_source_1.AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(api_routers_1.apiRouters);
app.listen(PORT, 'localhost', () => {
    console.log(`App running with port http://localhost:${PORT} `);
});
//# sourceMappingURL=index.js.map