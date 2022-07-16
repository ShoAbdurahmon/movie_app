const GET = `
    select 
        *
    from movies;
`
const DELETE = `
    delete from movies
    where movie_id = $1
    returning *;
`
const POST = `
insert into movies (movie_name, movie_big_img, movie_small_img, movie_trailer, movie_full, movie_category, release_date, duration, movie_description) values
($1, $2, $3, $4, $5, $6, $7, $8, $9)
returning *;
`

export default {
    GET,
    DELETE,
    POST
}