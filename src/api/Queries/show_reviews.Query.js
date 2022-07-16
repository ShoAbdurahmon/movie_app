const GET = `
    select 
        *
    from show_reviews;
`
const DELETE = `
    delete from show_reviews
    where review_id = $1
    returning *;
`
const POST = `
insert into show_reviews (user_id, show_id, review_star, review_text, contains_spoiler) values
($1, $2, $3, $4, $5)
returning *;
`

export default {
    GET,
    DELETE,
    POST
}