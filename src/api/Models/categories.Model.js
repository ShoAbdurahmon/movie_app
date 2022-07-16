import query from "#query/categories.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}
const DELETE = async (id) => {
	const data = await db(query.DELETE, id)
	return data
}
const POST = async ({ category_name }) => {
	const data = await db(query.DELETE, category_name)
	return data
}


export default {
    GET,
    DELETE,
    POST
}