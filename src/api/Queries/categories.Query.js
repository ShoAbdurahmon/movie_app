const GET = `
    select 
        *
    from categories;
`
const DELETE = `
    delete from categories
    where category_id = $1
    returning *;
`
const POST = `
insert into categories(category_name) values
($1)
returning *;
`

export default {
    GET,
    DELETE,
    POST
}