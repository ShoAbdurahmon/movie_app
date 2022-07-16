import query from "#query/movies.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}
const DELETE = async (id) => {
	const data = await db(query.DELETE, id)
	return data
}
const POST = async ({movie_name, movie_big_img, movie_small_img, movie_trailer, movie_full, movie_category, release_date, duration, movie_description}) => {
	const data = await db(query.POST, movie_name, movie_big_img, movie_small_img, movie_trailer, movie_full, movie_category, release_date, duration, movie_description)
	return data
}

export default {
    GET,
    DELETE,
    POST
}