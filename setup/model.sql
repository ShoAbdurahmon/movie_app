
-- Creating database

drop database if exists movie;

create database movie;

-- Creating tables

drop table if exists categories cascade;
create table categories(
    category_id serial not null primary key,
    category_name varchar(255) not null
);

drop table if exists users cascade;
create table users (
    user_id serial not null primary key,
    user_name text not null,
    user_fullname text not null,
    user_email text not null,
    user_password text not null,
    user_country text not null,
    user_bio text default '',
    user_watchlist json default '{}',
    user_img text default 'default.jpeg',
    user_social json default '{}',
    member_since timestamp default now()
);


drop table if exists movies cascade;
create table movies(
    movie_id serial not null primary key,
    movie_name text not null,
    movie_big_img text not null, 
    movie_small_img text not null,
    movie_trailer text,
    movie_full text,
    movie_category serial not null references categories(category_id) on delete cascade,
    release_date date not null,
    duration time not null,
    movie_description text not null
);

drop table if exists shows cascade;
create table shows(
    show_id serial not null primary key,
    show_name text not null,
    show_big_img text not null,
    show_small_img text not null,
    show_trailer text,
    show_full json not null,
    show_category serial not null references categories(category_id) on delete cascade,
    release_date date not null,
    duration time not null,
    show_description text not null
);


drop table if exists blogs cascade;
create table blogs(
    blog_id serial not null primary key,
    user_id serial references users (user_id) on delete cascade,
    blog_title varchar(255) not null,
    blog_body text not null,
    blog_img text not null  
);


drop table if exists blog_comments cascade;
create table blog_comments (
    comment_id serial not null,
    user_id serial not null references users (user_id) on delete cascade,
    blog_id serial not null references blogs (blog_id) on delete cascade,
    comment_text text not null,
    comment_date date default now()
);

drop table if exists movie_reviews cascade;
create table movie_reviews(
    review_id serial not null,
    user_id serial not null references users (user_id) on delete cascade,
    movie_id serial not null references movies (movie_id) on delete cascade,
    review_star int not null,
    review_date timestamp default now(),
    review_text text not null,
    contains_spoiler boolean default false
);

drop table if exists show_reviews cascade;
create table show_reviews (
    review_id serial not null,
    user_id serial not null references users (user_id) on delete cascade,
    show_id serial not null references shows (show_id) on delete cascade,
    review_star int not null,
    review_date timestamp default now(),
    review_text text not null,
    contains_spoiler boolean default false
);



