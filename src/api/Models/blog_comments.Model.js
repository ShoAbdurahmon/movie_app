import query from "#query/blog_comments.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}
const DELETE = async (id) => {
	const data = await db(query.DELETE, id)
	return data
}
const POST = async ({user_id, blog_id, comment_text}) => {
	const data = await db(query.POST, user_id, blog_id, comment_text)
	return data
}

export default {
    GET,
    DELETE,
    POST
}