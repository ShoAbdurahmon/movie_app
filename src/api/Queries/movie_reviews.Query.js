const GET = `
    select 
        *
    from movie_reviews;
`
const DELETE = `
    delete from movie_reviews
    where review_id = $1
    returning *;
`
const POST = `
insert into movie_reviews (user_id, movie_id, review_star, review_text, contains_spoiler) values
($1, $2, $3, $4, $5)
returning *;
`

export default {
    GET,
    DELETE,
    POST
}