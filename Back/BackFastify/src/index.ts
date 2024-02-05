import { fastify, FastifyInstance } from "fastify"
import cors from '@fastify/cors'
import dotenv from "dotenv";
//@fastify/env 
import appRouter from './routes/routes'

dotenv.config()

const app: FastifyInstance = fastify({logger: true}); // TODO look up options

const port: number = Number(process.env.PORT) || 3001

app.register(cors, {}); //TODO cors options here, TODO export to config/dotenv ???

app.register(appRouter)
//app.register(errorHandler)

app.listen({port:port, host: '127.0.0.1'}, (err, address) => { // TODO export host to dotenv
  console.log(`[server]: Server is running at ${address}`)
})

export default app