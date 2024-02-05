import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify"

async function itemsRouter (app: FastifyInstance ) {
  app.get("/", (req: FastifyRequest, res: FastifyReply) : {data: string} => {
    return {data: "GET index"};
  });
}

export default itemsRouter