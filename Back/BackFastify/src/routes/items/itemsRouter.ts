import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify"

async function itemsRouter (app: FastifyInstance ) {
  app.get("/items", (req: FastifyRequest, res: FastifyReply) : {data: string} => {
    return {data: "GET items"};
  });
}

export default itemsRouter