import axios, { AxiosInstance } from 'axios'

//const services: AxiosStatic = axios 
/* TODO create interface with all the wanted behaviour
like create value, read value,  set value etc... */

const services: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3003",
})

// TODO make a constructor ?
const KVService: any = class KVService{
  public static async getValue (key : string) : Promise<any> {
      const response = await services.get(`/${encodeURIComponent(key)}`)
      if (!response.data.success) throw new Error("Failed to fetch key")
      else return response.data.value
  }

  public static async setValue (key : string, value : any) : Promise<void>{
    try {
        let res = await services.post("/", {key, value})
        if(!res.data.success) throw new Error('Failed to set Key-Value')
    } catch (error) {
        console.log(error);
        throw error
    }
    
  }

  public static removeKey (key : string) : Promise<boolean>{
    return services.delete(`/${encodeURIComponent(key)}`).then(()=>true).catch(()=>false)
  }

  public static listKeys () : Promise<string[]>{
    return services.get('/list').then((r)=> r.data.keys)
  }
}
console.log(KVService)

export default services

/*
app.use({
  install(app:App) {
    axios.create({
      // baseURL: "http://localhost/recuperatheque/",
      // baseURL: "http://localhost/",
      publicPath: "/dash/dist/",
      // publicPath: "/"
      // withCredentials: true
    });
  },
})
*/