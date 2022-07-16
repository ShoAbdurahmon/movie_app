import model from "#models/blog_comments.Model"
import userModel from "#models/blog_comments.Model"
import { response } from "express"


const GET = async (req, res) => {
	try{
		const blogs = await model.GET()
        res.send({
            status: 200,
            message: "ok",
            data: blogs
        })
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}
const POST = async (req, res) => {
    try {
        const { user_id, blog_id, comment_text } = req.body
        const users = await userModel.GET()
        const blogs = await model.GET()

        const user = users.find(el => el.user_id == user_id)
        const blog = blogs.find(el => el.blog_id == blog_id)

        if(!user || !blog) {
            return res.status(400).send({
                status: 400,
                message: "user_id or blog_id is incorrect",
                data: null
            })
        }
        const data = await model.POST({user_id, blog_id, comment_text})
        return res.status(200).send({
            status: 200,
            message: "Created succesfully",
            data
        })

    }catch (error){
        return res.status(400).send({
            status: 400,
            message: error.message,
            data: null
        })
    }
}
const DELETE = async (req, res) => {
    try {
        const id = req.params.id
        const data = await model.GET()
        const comment = data.find(el => el.comment_id == id)
        if(!comment){
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }
        const deleted = await model.DELETE(id)
        return res.status(200).send({
            status: 200,
            message: "Deleted succesfully!",
            data: deleted
        })
    }catch(error) {
        return res.status(400).send({
            status: 400,
            message: error.message,
            data: null
        })
    }
}



export default {
	GET,
    DELETE,
    POST
}