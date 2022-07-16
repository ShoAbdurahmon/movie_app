import query from "#query/users.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}
const DELETE = async (id) => {
	const data = await db(query.DELETE, id)
	return data
}
const POST = async ({user_name, user_fullname, user_email, user_password, user_country}) => {
	const data = await db(query.POST, user_name, user_fullname, user_email, user_password, user_country )
	return data
}


export default {
    GET,
    DELETE,
    POST
}