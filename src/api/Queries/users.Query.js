const GET = `
    select 
        *
    from users;
`
const DELETE = `
    delete from users
    where user_id = $1
    returning *;
`
const POST = `
insert into users (user_name, user_fullname, user_email, user_password, user_country) values
($1,$2,$3,$4,$5)
returning *;
`

export default {
    GET,
    DELETE,
    POST
}