import model from "#models/users.Model"
import sha256 from 'sha256'
import JWT from "#utils/jwt"


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
        const { user_name, user_fullname, user_email, user_password, user_country } = req.body

        const users = await model.GET()
        const user = users.find(el => el.user_name == user_name)
        if(user){
            return res.status(400).send({
                status: 400,
                message: "Username is already taken",
                data: null
            })
        }

        const data = await model.POST({ user_name, user_fullname, user_email, user_password: sha256(user_password), user_country})
        const token = await JWT.sign({
            user_name,
            user_password,
            user_country
        })
        return res.status(200).send({
            status: 200,
            message: "Created succesfully",
            token: token,
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
        const user = data.find(el => el.user_id == id)
        if(!user){
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