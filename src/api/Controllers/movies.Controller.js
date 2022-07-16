import model from "#models/movies.Model"
import categoryModel from "#models/categories.Model"
import path from "path"

const GET = async (req, res) => {
	try{
		const users = await model.GET()
        res.send({
            status: 200,
            message: "ok",
            data: users
        })
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}
const POST = async (req, res) => {
    try {
        const { movie_name, movie_category, release_date, duration, movie_description } = req.body
        const { movie_big_img, movie_small_img, movie_trailer, movie_full } = req.files

        if(!movie_big_img || !movie_big_img || !movie_trailer || !movie_full){
			return res.status(400).send({
				status: 400,
				message: "Image is required",
				data: null
			})
		}
        const categories = await categoryModel.GET()
        const category = categories.find(el => el.category_id == movie_category)
        if(!category){
            return res.status(400).send({
                status: 400,
                message: "Category not found",
                data: null
            })
        }

        if(!['image/png', 'image/jpg', 'image/jpeg'].includes(movie_big_img.mimetype)) {
			return res.send({
				status: 400,
				message: "Invalid file type movie_big_img",
				data: null
			})
		}if(!['image/png', 'image/jpg', 'image/jpeg'].includes(movie_small_img.mimetype)) {
			return res.send({
				status: 400,
				message: "Invalid file type movie_small_img",
				data: null
			})
		}if(!['video/mp4', 'video/mpeg', 'video/quicktime', 'video/x-msvideo'].includes(movie_trailer.mimetype)) {
			return res.send({
				status: 400,
				message: "Invalid file type movie_trailer",
				data: null
			})
		}if(!['video/mp4', 'video/mpeg', 'video/quicktime', 'video/x-msvideo'].includes(movie_full.mimetype)) {
			return res.send({
				status: 400,
				message: "Invalid file type movie_full",
				data: null
			})
		}

        const fileName1 = Date.now() + movie_big_img.name.replace(/\s/g, "")
		const filePath1 = path.join(process.cwd(),'src', "uploads", fileName1)
		movie_big_img.mv(filePath1)

        const fileName2 = Date.now() + movie_small_img.name.replace(/\s/g, "")
		const filePath2 = path.join(process.cwd(),'src', "uploads", fileName2)
		movie_small_img.mv(filePath2)

        const fileName3 = Date.now() + movie_trailer.name.replace(/\s/g, "")
		const filePath3 = path.join(process.cwd(),'src', "uploads", fileName3)
		movie_trailer.mv(filePath3)

        const fileName4 = Date.now() + movie_full.name.replace(/\s/g, "")
		const filePath4 = path.join(process.cwd(),'src', "uploads", fileName4)
		movie_full.mv(filePath4)


        const data = await model.POST({ movie_name, movie_big_img: fileName1, movie_small_img: fileName2, movie_trailer: fileName3, movie_full: fileName4, movie_category, release_date, duration, movie_description })

        return res.status(200).send({
            status: 200,
            message: "Created succesfully",
            data
        })

    }catch (error){
        return res.status(400).send({
            status: 400,
            message: error.message,
            data: null
        })
    }
}
const DELETE = async (req, res) => {
    try {
        const id = req.params.id
        const data = await model.GET()
        const movie = data.find(el => el.movie_id == id)
        if(!movie){
            return res.status(404).send({
                status: 404,
                message: "Data not found",
                data: null
            })
        }
        const deleted = await model.DELETE(id)
        return res.status(200).send({
            status: 200,
            message: "Deleted succesfully!",
            data: deleted
        })
    }catch(error) {
        return res.status(400).send({
            status: 400,
            message: error.message,
            data: null
        })
    }
}

export default {
	GET,
    DELETE,
    POST
}