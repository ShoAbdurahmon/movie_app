import query from "#query/shows.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}
const DELETE = async (id) => {
	const data = await db(query.DELETE, id)
	return data
}

export default {
    GET,
    DELETE
}