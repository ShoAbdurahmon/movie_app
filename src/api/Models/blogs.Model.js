import query from "#query/blogs.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}
const DELETE = async (id) => {
	const data = await db(query.DELETE, id)
	return data
}
const POST = async ({user_id, blog_title, blog_body, blog_img}) => {
	const data = await db(query.POST, user_id, blog_title, blog_body, blog_img)
	return data
}

export default {
    GET,
    DELETE,
    POST
}