import fileUpload from "express-fileupload"
import bodyParser from "body-parser"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import  path  from "path"

import "#config/index"

import routes from "#api/routes"
!async function() {
	const app = express()

	// Cors settings 
	app.use(cors())

	// Morgan settings 
	app.use(morgan("dev"))

	// Body parser settings
	app.use(bodyParser.json())
	
	// Urlencode extended settings
	app.use(bodyParser.urlencoded({extended: true}))

	// Server static files
	app.use(express.static(path.join(process.cwd(), "src", "uploads")))
	app.use(express.static(path.join(process.cwd(), 'src', 'uploads')))
	
	// Express json
	app.use(express.json())

	// fileUpload settings
	app.use(fileUpload())

	// All routes configuration
	app.use("/api", routes)

	try {
		await app.listen(process.env.PORT, () => {
			console.log(`Server running on port ${process.env.PORT}`)
		})
	} catch (error) {
		console.error(error)
	}
}()