import { User } from "../models/user";

const login = (email: string, password: string): User|undefined => {
  const user: User = {
    email,
    password,
    name: ""
  }

  if (!user)
    return undefined;
  if (user?.password !== password)
    throw new Error('Wrong password');
  return user;
};

export default { 
  login,
};