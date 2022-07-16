const GET = `
    select 
        *
    from blogs;
`
const DELETE = `
    delete from blogs
    where blog_id = $1
    returning *;
`
const POST = `
insert into blogs (user_id, blog_title, blog_body, blog_img) values
($1, $2, $3, $4)
returning * ;
`

export default {
    GET,
    DELETE,
    POST
}