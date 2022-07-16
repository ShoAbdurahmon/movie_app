import model from "#models/blogs.Model"
import userModel from "#models/users.Model"
import path from "path"


const GET = async (req, res) => {
	try{
		const users = await model.GET()
        res.send({
            status: 200,
            message: "ok",
            data: users
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
        const { user_id, blog_title, blog_body } = req.body
        const { blog_img } = req.files

        const users = await userModel.GET()
        const user = users.find(el => el.user_id == user_id)
        if(!user){
            return res.status(400).send({
                status: 400,
                message: "User id is incorrect!",
                data: null
            })
        }
        if(!blog_img){
			return res.status(400).send({
				status: 400,
				message: "Blog image is required",
				data: null
			})
		}
        if(!['image/png', 'image/jpg', 'image/jpeg'].includes(blog_img.mimetype)) {
			return res.send({
				status: 400,
				message: "Invalid file type blog_img",
				data: null
			})
		}

        const fileName = Date.now() + blog_img.name.replace(/\s/g, "")
		const filePath = path.join(process.cwd(),'src', "uploads", fileName)
		blog_img.mv(filePath)


        const data = await model.POST({ user_id, blog_title, blog_body, blog_img: fileName })

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
        const blog = data.find(el => el.blog_id == id)
        if(!blog){
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