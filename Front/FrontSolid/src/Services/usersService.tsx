import axios from 'axios'
const baseUrl = 'http://localhost:3003/users' // TODO get port from process.env.PORT
import type { User } from '../Models/User'
// TODO handle error


const connectUser = async (login:string, password:string) => { // TODO send body email password or token
  
  console.log("we send this", login, password)
  
  return await axios
    .post(baseUrl + '/login', {email:login, password:password})
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      console.error("fail to connect user", err)
      throw err
    })
}

const registerUser = async (user: User) => { // TODO send body email password or token
  return await axios
    .post(baseUrl + '/register', user)
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      console.error("fail to register user")
      throw err
    })
}

export default { connectUser, registerUser }

/*
const getAll = async () => {
  return await axios
    .get(baseUrl)
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      console.error("fail get phonebook")
      throw err
      //return []
    })
}

const create = async (newObject: any) => {
  return await axios
    .post(baseUrl, newObject)
    .then(res => res.data)
    .catch(err => {
      console.error("fail create phonebook entry")
      throw err
    })
}

const update = async (id: any, newObject: any) => {
  return await axios
    .put(`${baseUrl}/${id}`, newObject)
    .then(res => res.data)
    .catch(err => {
      console.error("fail update phonebook entry")
      throw err
    })
}

const deleteById = async (id: any) => {
  return await axios
    .delete(`${baseUrl}/${id}`)
    .then(res => res)
    .catch(err => {
      console.error("fail update phonebook entry")
      throw err
    })
}

export default { getAll, create, update, deleteById }
*/