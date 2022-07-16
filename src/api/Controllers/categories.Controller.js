import model from "#models/categories.Model"


const GET = async (req, res) => {
	try{
		const categories = await model.GET()
        res.send({
            status: 200,
            message: "ok",
            data: categories
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
        const { category_name } = req.body

        if(!category_name) {
            return res.status(400).send({
                status: 400,
                message: "user_id or movie_id is incorrect",
                data: null
            })
        }
        const data = await model.POST({ category_name })
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
        const category = data.find(el => el.category_id == id)
        if(!category){
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