import axios from 'axios'
const baseUrl = 'http://localhost:3000/users'
// TODO handle error


const connectUser = async () => { // TODO send body email password or token
  return await axios
    .get(baseUrl + '/connect')
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      console.error("fail connect user")
      throw err
    })
}

export default { connectUser }

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