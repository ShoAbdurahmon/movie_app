insert into categories (category_name) values
('Action'),
('Drama'),
('Fantastic'),
('Sci-Fi'),
('Comedy'),
('Thriller'),
('Horror'),
('History'),
('Biography'),
('Animation'),
('Documentary');


insert into users (user_name, user_fullname, user_email, user_password, user_country) values
('abdurahmon', 'Shohusniddinov Abdurahmon', 'shohusniddinovabdurahmon@gmail.com', '********', 'Uzbekistan'),
('jasur', 'Shohusniddinov Abdurahmon', 'shohusniddinovabdurahmon@gmail.com', '********', 'Malasia'),
('ali', 'Shohusniddinov Abdurahmon', 'shohusniddinovabdurahmon@gmail.com', '********', 'Afganistan'),
('nosir', 'Shohusniddinov Abdurahmon', 'shohusniddinovabdurahmon@gmail.com', '********', 'US');

insert into shows (show_name, show_big_img, show_small_img, show_trailer, show_full, show_category, release_date, duration, show_description) values
('Oy ritsari', 'big_img.png', 'small_img.png', 'trailer.mp4', '{"s1":{"e1":"show.mp4", "e2": "show.mp4"}, "s2":{"e1":"show.mp4", "e2": "show.mp4"}}', 2, now(), '2:12', 'The marvel show The Moonknight'),
('Arcane: League of Legends', 'big_img.png', 'small_img.png', 'trailer.mp4', '{"s1":{"e1":"show.mp4", "e2": "show.mp4"}, "s2":{"e1":"show.mp4", "e2": "show.mp4"}}', 2, now(), '2:12', 'The marvel show The Moonknight'),
('Loki', 'big_img.png', 'small_img.png', 'trailer.mp4', '{"s1":{"e1":"show.mp4", "e2": "show.mp4"}, "s2":{"e1":"show.mp4", "e2": "show.mp4"}}', 2, now(), '2:12', 'The marvel show The Moonknight'),
('Qog''oz bino', 'big_img.png', 'small_img.png', 'trailer.mp4', '{"s1":{"e1":"show.mp4", "e2": "show.mp4"}, "s2":{"e1":"show.mp4", "e2": "show.mp4"}}', 2, now(), '2:12', 'The marvel show The Moonknight');

insert into movies (movie_name, movie_big_img, movie_small_img, movie_trailer, movie_full, movie_category, release_date, duration, movie_description) values
('Avengers', 'big_img.png', 'small_img.png', 'trailer.mp4', '{"s1":{"e1":"show.mp4", "e2": "show.mp4"}, "s2":{"e1":"show.mp4", "e2": "show.mp4"}}', 2, now(), '2:12', 'The marvel show The Moonknight'),
('1 + 1', 'big_img.png', 'small_img.png', 'trailer.mp4', '{"s1":{"e1":"show.mp4", "e2": "show.mp4"}, "s2":{"e1":"show.mp4", "e2": "show.mp4"}}', 2, now(), '2:12', 'The marvel show The Moonknight'),
('Shumbola', 'big_img.png', 'small_img.png', 'trailer.mp4', '{"s1":{"e1":"show.mp4", "e2": "show.mp4"}, "s2":{"e1":"show.mp4", "e2": "show.mp4"}}', 2, now(), '2:12', 'The marvel show The Moonknight'),
('Madagaskar', 'big_img.png', 'small_img.png', 'trailer.mp4', '{"s1":{"e1":"show.mp4", "e2": "show.mp4"}, "s2":{"e1":"show.mp4", "e2": "show.mp4"}}', 2, now(), '2:12', 'The marvel show The Moonknight');



insert into blogs (user_id, blog_title, blog_body, blog_img) values
(1, 'Assalomu alaykum', 'Lorem ipsum lorem dormut hel manasole kante ipsum', 'img.png'),
(2, 'Assalomu alaykum', 'Lorem ipsum lorem dormut hel manasole kante ipsum', 'img.png'),
(3, 'Assalomu alaykum', 'Lorem ipsum lorem dormut hel manasole kante ipsum', 'img.png');

insert into blog_comments (user_id, blog_id, comment_text) values 
(2, 1, 'Ajoyib maqola'),
(3, 2, 'Woow Super'),
(1, 3, 'Definitly, ture.');

insert into movie_reviews (user_id, movie_id, review_star, review_text, contains_spoiler) values
(2, 4, 5, 'Juda zo''r kino', false),
(1, 1, 5, 'Juda zo''r kino', false),
(3, 2, 5, 'Juda zo''r kino', false);

insert into show_reviews (user_id, show_id, review_star, review_text, contains_spoiler) values
(2, 4, 5, 'Juda zo''r kino', false),
(1, 1, 5, 'Juda zo''r kino', false),
(3, 2, 5, 'Juda zo''r kino', false);
