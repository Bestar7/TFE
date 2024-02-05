import express, { Express, Router } from "express"
import cors from "cors"
import dotenv from "dotenv";

dotenv.config()

const app: Express = express();
const port: string|number = process.env.PORT || 3001
const appRouter : Router = require('./routes/routes')

app.use(cors()); // allow cors policy
app.use(express.json()); // parse body from json to js
app.use('/', appRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

module.exports = app