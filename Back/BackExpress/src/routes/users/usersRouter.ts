import { NextFunction, Request, Response, Router } from "express";
import { User } from "../../models/user";
import userUCC from "../../ucc/userUCC"

const router: Router = Router();

router.post('/login',    login);
function login(req: Request, res: Response, next: NextFunction){
  const email: string|undefined = req?.body?.email;
  const password: string|undefined = req?.body?.password;
  
  if (!email || !password || !checkEmail(email) || !checkPassword(password)){
    console.log("we get ", email, password)
    return res.sendStatus(400); // error code '400 Bad request'
  }
  
  const foundUser: User|undefined = userUCC.login(email, password);
  if (!foundUser)
    return res.sendStatus(401); // error code '401 Unauthorized' : it lacks valid authentication credentials

  return res.json(listUsers); // TODO return += token
}

// _____UTILS
function checkEmail(email : string){
  return (email.length > 0);
}

function checkPassword(password : string){
  return (password.length > 0);
}

router.get("/", (req: Request, res: Response) => {
  res.send(listUsers);
});

router.get("/:id", (req: Request, res: Response) => {
  const id : number = Number(req.params?.id)
  res.send(listUsers[id]);
});

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

module.exports = router