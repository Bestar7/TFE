import { FastifyInstance } from "fastify"
import usersRouter from './users/usersRouter'
import itemsRouter from './items/itemsRouter'
import indexRouter from './indexRouter'

//const app: FastifyInstance = fastify()
async function appRouter (app: FastifyInstance){
  app.register(usersRouter)
  app.register(itemsRouter)
  app.register(indexRouter) 

}

export default appRouter