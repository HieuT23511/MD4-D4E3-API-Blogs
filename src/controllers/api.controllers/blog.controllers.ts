import {ProductRepo} from "../../../index";

export class BlogControllers {
    static async addBlog(req: any, res: any) {
        try {
            // console.log(req.body)
            const blogSearch = await ProductRepo.findOneBy({title: req.body.title})
            if (blogSearch) {
                res.status(500).json({
                    message: "This Blog was existed! "
                })
            } else {
                const blogData = {
                    title: req.body.title,
                    content: req.body.content
                }
                const blog = await ProductRepo.save(blogData);
                if (blog) {
                    res.status(200).json({
                        message: "Create Blog successfully!"
                    })
                }
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    }

    static async listBlogs(req: any, res: any) {
        try {
            const blogs = await ProductRepo.find();
            if (blogs) {
                res.status(200).json({
                    message: "Get list Blogs Successfully",
                    blogs: blogs
                })
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    }

    static async updateBlog(req: any, res: any) {
        try {
            let blogSearch = await ProductRepo.findOneBy({id: +req.params.id})
            if (!blogSearch) {
                res.status(500).json({
                    message: "Blogs was not existed! "
                })
            } else {
                const blog = await ProductRepo.update({id: +req.params.id}, req.body)
                if (blog) {
                    res.status(200).json({
                        message: "Update Blogs successfully!"
                    })
                }
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    }

    static async deleteBlog(req: any, res: any) {
        try {
            let blogSearch = await ProductRepo.findOneBy({id: +req.params.id})
            if (!blogSearch) {
                res.status(500).json({
                    message: "Blogs was not existed! "
                })
            } else {
                const blog = await ProductRepo.delete({id: +req.params.id})
                if (blog) {
                    res.status(200).json({
                        message: "Delete Blogs successfully!"
                    })
                }
            }

        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
    static async detailBlog(req:any , res: any){
        try{
            let blogSearch = await ProductRepo.findOneBy({id: +req.params.id})
            if (!blogSearch) {
                res.status(500).json({
                    message: "Blogs was not existed! "
                })
            } else {
                const blog = await ProductRepo.findOneBy({id: +req.params.id})
                if (blog) {
                    res.status(200).json({
                        message: "Detail Blogs successfully!",
                        blog : blog
                    })
                }
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}