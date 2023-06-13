"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogControllers = void 0;
const index_1 = require("../../../index");
class BlogControllers {
    static async addBlog(req, res) {
        try {
            const blogSearch = await index_1.ProductRepo.findOneBy({ title: req.body.title });
            if (blogSearch) {
                res.status(500).json({
                    message: "This Blog was existed! "
                });
            }
            else {
                const blogData = {
                    title: req.body.title,
                    content: req.body.content
                };
                const blog = await index_1.ProductRepo.save(blogData);
                if (blog) {
                    res.status(200).json({
                        message: "Create Blog successfully!"
                    });
                }
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async listBlogs(req, res) {
        try {
            const blogs = await index_1.ProductRepo.find();
            if (blogs) {
                res.status(200).json({
                    message: "Get list Blogs Successfully",
                    blogs: blogs
                });
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async updateBlog(req, res) {
        try {
            let blogSearch = await index_1.ProductRepo.findOneBy({ id: +req.params.id });
            if (!blogSearch) {
                res.status(500).json({
                    message: "Blogs was not existed! "
                });
            }
            else {
                const blog = await index_1.ProductRepo.update({ id: +req.params.id }, req.body);
                if (blog) {
                    res.status(200).json({
                        message: "Update Blogs successfully!"
                    });
                }
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async deleteBlog(req, res) {
        try {
            let blogSearch = await index_1.ProductRepo.findOneBy({ id: +req.params.id });
            if (!blogSearch) {
                res.status(500).json({
                    message: "Blogs was not existed! "
                });
            }
            else {
                const blog = await index_1.ProductRepo.delete({ id: +req.params.id });
                if (blog) {
                    res.status(200).json({
                        message: "Delete Blogs successfully!"
                    });
                }
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async detailBlog(req, res) {
        try {
            let blogSearch = await index_1.ProductRepo.findOneBy({ id: +req.params.id });
            if (!blogSearch) {
                res.status(500).json({
                    message: "Blogs was not existed! "
                });
            }
            else {
                const blog = await index_1.ProductRepo.findOneBy({ id: +req.params.id });
                if (blog) {
                    res.status(200).json({
                        message: "Detail Blogs successfully!",
                        blog: blog
                    });
                }
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
}
exports.BlogControllers = BlogControllers;
//# sourceMappingURL=blog.controllers.js.map