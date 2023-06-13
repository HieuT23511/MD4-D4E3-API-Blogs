import express from "express";
import {BlogControllers} from "../controllers/api.controllers/blog.controllers";
export const apiRouters = express.Router();

apiRouters.post('/blogs',BlogControllers.addBlog);
apiRouters.get('/blogs',BlogControllers.listBlogs);
apiRouters.get('/blog/:id/detail',BlogControllers.detailBlog);
apiRouters.put('/blog/:id/update',BlogControllers.updateBlog);
apiRouters.delete('/blog/:id/delete',BlogControllers.deleteBlog);
