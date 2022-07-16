import query from "#query/movie_reviews.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}
const DELETE = async (id) => {
	const data = await db(query.DELETE, id)
	return data
}
const POST = async ({user_id, movie_id, review_star, review_text, contains_spoiler}) => {
	const data = await db(query.POST, user_id, movie_id, review_star, review_text, contains_spoiler)
	return data
}

export default {
    GET,
	DELETE,
	POST
}