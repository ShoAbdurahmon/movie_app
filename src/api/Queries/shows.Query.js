const GET = `
    select 
        *
    from shows;
`
const DELETE = `
    delete from shows
    where show_id = $1
    returning *;
`
const POST = `
insert into blogs(user_id, blog_title, blog_slug, blog_body, blog_image, category_id) values
($1, $2, $3, $4, $5, $6)
returning *;
`

export default {
    GET,
    DELETE,
    POST
}