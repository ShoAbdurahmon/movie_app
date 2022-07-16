import express from "express"


import blogsRouter from "#routes/blogs.Router"
import usersRouter from "#routes/users.Router"
import userRouter from "#routes/user.Router"
import categoriesRouter from "#routes/categories.Router"
import showsRouter from "#routes/shows.Router"
import moviesRouter from "#routes/movies.Router"
import blog_comments from "#routes/blog_comments.Router"
import show_reviews from "#routes/show_reviews.Router"
import movie_reviews from "#routes/movie_reviews.Router"

const router = express.Router()
router.use(blogsRouter)
router.use(usersRouter)
router.use(userRouter)
router.use(categoriesRouter)
router.use(showsRouter)
router.use(moviesRouter)
router.use(blog_comments)
router.use(show_reviews)
router.use(movie_reviews)



export default router