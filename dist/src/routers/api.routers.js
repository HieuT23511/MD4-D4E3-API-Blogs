"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouters = void 0;
const express_1 = __importDefault(require("express"));
const blog_controllers_1 = require("../controllers/api.controllers/blog.controllers");
exports.apiRouters = express_1.default.Router();
exports.apiRouters.post('/blogs', blog_controllers_1.BlogControllers.addBlog);
exports.apiRouters.get('/blogs', blog_controllers_1.BlogControllers.listBlogs);
exports.apiRouters.get('/blog/:id/detail', blog_controllers_1.BlogControllers.detailBlog);
exports.apiRouters.put('/blog/:id/update', blog_controllers_1.BlogControllers.updateBlog);
exports.apiRouters.delete('/blog/:id/delete', blog_controllers_1.BlogControllers.deleteBlog);
//# sourceMappingURL=api.routers.js.map