const GET = `
    select 
        *
    from blog_comments;
`
const DELETE = `
    delete from blog_comments
    where comment_id = $1
    returning *;
`
const POST = `
insert into blog_comments (user_id, blog_id, comment_text) values 
($1, $2, $3)
returning *;
`

export default {
    GET,
    DELETE,
    POST
}