import model from "#models/users.Model"
import sha256 from 'sha256'
import JWT from '#utils/jwt'

const GET = async (req, res) => {
	try{
        const { user_name, user_password } = req.body
		const users = await model.GET()

        const user = users.find(el => el.user_name == user_name && el.user_password == sha256(user_password))
        if(!user){
            return res.status(400).send({
                status: 400,
                message: "User Not found",
                data: null
            })
        }
        const token = await JWT.sign({
            user_id: user.user_id,
            user_name
        })

        res.send({
            status: 200,
            message: "ok",
            data: user,
            token
        })
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

export default {
    GET
}