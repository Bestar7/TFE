import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify"
import { User } from "../../models/user";

const schema: {body: User} = {
  body : {
    id : 3,
    email : "j@b",
    name : "f",
    password : "s",
  }
}

const listUsers: User[] = [
  {
    id:1,
    email:"email",
    password:"anold",
    name:"Tommy",
  },
  {
    id:2,
    email:"email2",
    password:"password",
    name:"Tommy cool",
  }];


async function usersRouter (app: FastifyInstance ) {
  app.get ("/users",        getAll);
  app.post("/users/login",  login);
}

function login (req: FastifyRequest, res: FastifyReply) {
  try {
    console.log("Received request body:", req.body);
    //const { email, password, name } = req.body as User;
    //console.log("body login", email, password, name)
  } catch (error) { // TODO middleware for mapping buisness error -> code + msg
    console.log("error login", error)
    res.status(500).send({ error: 'Internal Server Error' });
  }
  res.send(listUsers)
};

function getAll (req: FastifyRequest, res: FastifyReply) {
  res.send(listUsers)
};

export default usersRouter