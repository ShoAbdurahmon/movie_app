import model from "#models/show_reviews.Model"
import userModel from "#models/users.Model"
import showModel from "#models/shows.Model"


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
        const { user_id, show_id, review_star, review_text, contains_spoiler } = req.body
        const users = await userModel.GET()
        const shows = await showModel.GET()

        const user = users.find(el => el.user_id == user_id)
        const show = shows.find(el => el.show_id == show_id)

        if(!user || !show) {
            return res.status(400).send({
                status: 400,
                message: "user_id or show_id is incorrect",
                data: null
            })
        }
        const data = await model.POST({user_id, show_id, review_star, review_text, contains_spoiler})
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
        const review = data.find(el => el.review_id == id)
        if(!review){
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